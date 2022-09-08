import swal from 'sweetalert';
import $    from 'jquery';
import I18n from 'i18n-js';
import moment from 'moment'
//import '@fullcalendar/daygrid/main.css';
import { Calendar }  from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import esLocale      from '@fullcalendar/core/locales/es';
import {toastr} from './notifications';
import {validateData} from './events';
import 'bootstrap';
import 'select2';// from 'select2';
import 'javascripts/i18n/translations';

// I18n.locale = window.I18n.locale;

document.addEventListener("turbolinks:before-cache", function () {
    $('[data-toggle="m-tooltip"]').tooltip('hide');
    $('.selectpicker').selectpicker('destroy');
});

$(document).on('turbo:render', function(){
    UnobtrusiveFlash.showFlashFromCookies()
});

$(document).on('turbolinks:load', function () {



    //window.Calendar = require("@fullcalenda/core").Calendar;
    //window.dayGridPlugin = require("@fullcalendar/daygrid").default;

    window.moment = moment;

    if(document.getElementById('calendar')) {
        var calendarEl  = document.getElementById('calendar');

        var calendar = new Calendar(calendarEl, {
            plugins: [ dayGridPlugin ],
            initialView: 'dayGridMonth',
            initialDate: Date.now(),
            editable: true,
            droppable: false,
            locale: esLocale,
            eventSources: '/get_events',
            eventClick: function(info) {

                var authenticityToken = $('[name="csrf-token"]')[0] && $('[name="csrf-token"]')[0].content;

                $.ajax({
                    url: 'get_event_info/'+info.event.id,
                    data: {authenticity_token: authenticityToken},
                    type: 'GET',
                    dataType: 'json',
                    success: function (data) {
                        let event = data;
                        $("#titleModalLabel").text('EDITAR EVENTO');
                        fillEventForm(event.id, event.title, event.description, event.start, event.event_type, event.location, event.url, event.user_ids, event.request_ids)
                    },
                    error: function (error) {
                        var message = I18n.t('messages.try_again');
                        if (error.responseJSON && error.responseJSON.message) {
                            message = error.responseJSON.message;
                        }
                        swal(I18n.t('messages.error'), message, 'error');
                    }
                });
                info.el.style.borderColor = 'red';

                $('#m_modal_event').modal();
            }
        });
        calendar.render();
    }
    // $('.select2-tag').select2({
    //     placeholder: 'Agregar tags...',
    //     tokenSeparators: [',', '\\n'],
    //     width: '100%',
    //     tags: true,
    //     selectOnBlur: true,
    //     selectOnClose: false,
    //     closeOnSelect: true,
    //     ajax: {
    //         url: '/business/search_tags',
    //         dataType: 'json',
    //         data: function (term, page) {
    //             return term;
    //         },
    //         processResults: function (data, page) {
    //             return {
    //                 results: data.map(function (e, i) {
    //                     return {id: e, text: e}
    //                 })
    //             }
    //         }
    //     }
    // });

    $('.loading-screen').hide();

    $('.dir').click(function (e) {
        e.stopPropagation();
        $(this).children().slideToggle();
    });

    $('li').on('click', function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    // Custom search field for table content
    $('.search-field').on('change', function () {
        let $this = $(this);
        $this.toggleClass('expand-input', $this.val() ? true : false);
    });

    $('[data-toggle="tooltip"]').tooltip();

    // Sweet Alert modal for delete elements
    $('.btn-destroy').click(function (event) {
        let element, resource, resourceId, resourceMsg, row, url, authenticityToken;
        element = $(this);
        row = element.closest('tr');
        resource = element.data('resource');
        resourceId = element.data('resource-id');
        resourceMsg = element.data('resource-message');
        url = `/${resource}/${resourceId}`;
        authenticityToken = $('[name="csrf-token"]')[0] && $('[name="csrf-token"]')[0].content;
        swal(resourceMsg, {
            buttons: {
                cancel: I18n.t('messages.cancel'),
                confirm: {
                    text: I18n.t('messages.delete'),
                    closeModal: true
                }
            }
        }).then(function (isConfirm) {
            if (!isConfirm) {
                return;
            }
            $.ajax({
                url: url,
                data: {authenticity_token: authenticityToken},
                type: 'DELETE',
                dataType: 'json',
                success: function (data) {
                    swal({
                        title: I18n.t('messages.done'),
                        text: I18n.t('messages.deleted'),
                        type: 'success',
                        confirmButtonText: I18n.t('messages.ok')
                    });
                    $(row).remove();
                },
                error: function (error) {
                    let message = I18n.t('messages.try_again');
                    if (error.responseJSON && error.responseJSON.message) {
                        message = error.responseJSON.message;
                    }
                    swal(I18n.t('messages.error'), message, 'error');
                }
            });
        });
    });
    

    // bootstrap-select initializer
    $('.selectpicker, .per-page-selectpicker').selectpicker();

    // select2 initializer
    $('.select2#eventUsers').select2({
        placeholder: "Agregar usuarios",
        multiple: true,
        theme: "classic",
        createTag: function(params) {
            return undefined;
        }
    });

    // select2 initializer
    $('.select2#eventRequests').select2({
        placeholder: "Agregar Solicitudes",
        multiple: true,
        theme: "classic",
        createTag: function(params) {
            return undefined;
        }
    });

    $('.select2#product_list').select2({
        placeholder: "Agregar selección",
        multiple: true,
        theme: "classic",
        tags: true
    });

    $('.select2#company_income_calendars').select2({
        placeholder: "Asignar periodos",
        multiple: true,
        theme: "classic",
        createTag: function(params) {
            return undefined;
        }
    });

    $('.select2#company_balance_calendars').select2({
        placeholder: "Asignar periodos",
        multiple: true,
        theme: "classic",
        createTag: function(params) {
            return undefined;
        }
    });

    // Submit for elements per page on tables
    $('.per-page-pagination').on('change', function () {
        $(this).closest('form').submit();
    });

    // Simulate click for file_field on edit user
    $('.hover-image').on('click', function () {
        $('.update-picture').click();
    });

    // Replace profile picture on edit user
    $('.update-picture').on('change', function () {
        readURL(this);
    });

    $('.price').blur(function () {
        var sum = 0;
        document.getElementById("totalId").value = 0;

        $('.price').each(function () {
            sum += Number($(this).val());
        });

        document.getElementById("totalId").value = sum;

    });


    window.fileSize = function(type_file) {

        var fileInput = document.getElementById(type_file);

        try {
            if (fileInput.files[0].size > 2000000) {
                swal({
                    title: "Archivo demasiado grande",
                    text: "El archivo debe pesar menos de 2mb",
                    icon: 'warning',
                    button: I18n.t('messages.ok')
                });
                document.getElementById(type_file).value = null;

            }
        } catch (e) {

        }
    };

    // $('#idFileEnlace').on("change", fileEnlace);


    window.validate_files = function(){
        var idFile = document.getElementById("idFile").value;
        var constancyFile = document.getElementById("constancyFile").value;
        var financialStatementsOneFile = document.getElementById("financialStatementsOneFile").value;
        var financialStatementsTwoFile = document.getElementById("financialStatementsTwoFile").value;
        var financialStatementsParcialFile = document.getElementById("financialStatementsParcialFile").value;

        if(idFile && constancyFile && financialStatementsOneFile && financialStatementsTwoFile
            && financialStatementsParcialFile){
            $('#filesBtn').attr('class', 'btn btn-primary col-xl-12');
            $('#filesBtn').prop("disabled", false);
        }

    };

    if(document.getElementById("idStepOne")){
        var stepOne = document.getElementById("idStepOne").value;
        var stepTwo = document.getElementById("idStepTwo").value;
        var stepThree = document.getElementById("idStepThree").value;
        $('#filesBtn').attr('class', 'btn btn-primary col-xl-12 disabled');
        $('#filesBtn').prop("disabled", true);

    }


    function setNumberCollaboratorsValues(){
        if( $("#idOperative").val() === '') {
            $("#idOperative").val(0);
        }

        if ($("#idAdministrativos").val() === '' ){
            $("#idAdministrativos").val(0);
        }
        
        if ($("#idSales").val() === '' ){
            $("#idSales").val(0);
        }
        if ($("#idEventual").val() === '' ){
            $("#idEventual").val(0);
        }
        if ($("#idUnionized").val() === '' ){
            $("#idUnionized").val(0);
        }
        if ($("#totalId").val() === '' ){
            $("#totalId").val(0);
        }
    };


    if (!stepOne) {
        $('#step-0').show();
        $("#buttonCero").hide();
    }

    if (stepOne && !stepTwo) {
        $('#step-1').show();
        $("#buttonOne").hide();
    }

    if (stepTwo && !stepThree) {
        $('#step-2').show();
        $("#buttonTwo").hide();
        setNumberCollaboratorsValues();
    }

    if (stepThree) {
        $('#step-3').show();
        $("#buttonThree").hide();
    }


    window.prevPageNew = function (prev, current) {
        $("#step-" + current).hide();
        $("#step-" + prev).show();
    };

    window.nextPageNew = function (next, current) {
        $("#step-" + current).hide();
        $("#step-" + next).show();
    };


    window.prevPage = function (prev, current) {
        document.getElementById("page-" + prev).style.display = "block";
        document.getElementById("page-" + current).style.display = "none";
        document.getElementById("step" + current).style.opacity = 0.5;

        $("#step" + prev).removeClass('completed').addClass('active');
        $("#ind" + prev).removeClass('active');

        $("#step" + current).removeClass('completed').removeClass('active');
        $("#step" + prev + " > .step-icon").html(prev);


        $("#stepDesc" + current).addClass('inactive');
    }

    window.nextPage = function (next, current) {
        document.getElementById("page-" + next).style.display = "block";
        document.getElementById("page-" + current).style.display = "none";
        document.getElementById("step" + next).style.opacity = 1;

        $("#step" + next).addClass('active');

        $("#stepDesc" + next).removeClass('inactive');
        $("#step" + current).addClass('completed').removeClass('active');
        $("#ind" + current).addClass('active');
        $("#step" + current + " > .step-icon").html("<i class='fa fa-check' aria-hidden='true'></i>");
    }

    $('input.focusable-input').focus(function() {
        $(this).parent().parent().addClass('highlightedRowColumn');
        var colIdx = $(this).closest("td").index();
        $("td:nth-child(" + (colIdx +1) + ")").addClass('highlightedRowColumn');
    });

    $('input.focusable-input').blur(function() {
        $(this).parent().parent().removeClass('highlightedRowColumn');
        var colIdx = $(this).closest("td").index();
        $("td:nth-child(" + (colIdx +1) + ")").removeClass('highlightedRowColumn');
    });


    $(document).ready(function(){
        $("td").filter(function(index) {
            return $(this).html() == "0";
        }).parent().addClass("zero");
    });
    $("td:contains('1')").parent().addClass("one");

    window.hide_show_table = function (col_name, table_id){
        var checkbox_val = document.getElementById(col_name).value;

        if(checkbox_val == "hide"){
            var all_col = document.getElementsByClassName(col_name);
            for(var i = 0;i < all_col.length; i++)
            {
                all_col[i].style.display="none";
            }
            document.getElementById(col_name+"_head").style.display="none";
            document.getElementById(col_name).value="show";
        }else{
            var all_col = document.getElementsByClassName(col_name);
            for(var i = 0;i < all_col.length; i++)
            {
                all_col[i].style.display="table-cell";
            }
            document.getElementById(col_name+"_head").style.display="table-cell";
            document.getElementById(col_name).value="hide";
        }

        calculate_comparative(table_id);
    };


    // CHANGE SELECTOR FOR CALENDAR IN CALENDAR_PERIOD //
    loadSelectPeriod($('#calendar_period').val());
    $('#calendar_period').on('change', function(){
        var period_type = $('#calendar_period').val();
        var array = [];

        if(period_type === 'mensual'){
            array.push('<option value="enero">Enero</option>');
            array.push('<option value="febrero">Febrero</option>');
            array.push('<option value="marzo">Marzo</option>');
            array.push('<option value="abril">Abril</option>');
            array.push('<option value="mayo">Mayo</option>');
            array.push('<option value="junio">Junio</option>');
            array.push('<option value="julio">Julio</option>');
            array.push('<option value="agosto">Agosto</option>');
            array.push('<option value="septiembre">Septiembre</option>');
            array.push('<option value="octubre">Octubre</option>');
            array.push('<option value="noviembre">Noviembre</option>');
            array.push('<option value="diciembre">Diciembre</option>');
        }else if(period_type === 'trimestral'){
            array.push('<option value="1_trimestre">1 Trimestre</option>');
            array.push('<option value="2_trimestre">2 Trimestre</option>');
            array.push('<option value="3_trimestre">3 Trimestre</option>');
            array.push('<option value="4_trimestre">4 Trimestre</option>');
        }

        $('#period_selector').empty().append(array.join(''));
    });

    //Tabla comparativa
    if(document.getElementById("comparative_table_bs")){
        calculate_comparative('comparative_table_bs');
    }

    $( "#modal_providers" ).on('shown.bs.modal', function(e){

        var dollarUSLocale = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        var years = [];
        $('#divTransactions').empty();
        var transactions = $(e.relatedTarget).data('transactions');


        $('#divTransactions').html(
            "<table id='tablaTransactions' class='table'>" +
            "<thead class='thead-default thead-custom'>" +
            "<tr>" +
            "<th class='text-center'>Fecha</th> " +
            "<th class='text-center'>Total</th> " +
            "</thead>" +
            "<tbody>" +
            "</tbody>" +
            "</table>"
        ).appendTo('#divTransactions');

        $.each(transactions, function (index, transaction) {
            if(transaction.total !== 0){
                years.push( transaction.date.substring(0, transaction.date. indexOf('-')));
                $("#divTransactions tbody").append(
                    "<tr>" +
                    "<td class='text-center'>" + transaction.date + "</td>" +
                    "<td class='text-center'>" + dollarUSLocale.format(transaction.total) + "</td>" +
                    "</tr>"

                )
            }
        });

        var uniqueChars = [];
        years.forEach((y) => {
            if (!uniqueChars.includes(y)) {
                uniqueChars.push(y);
            }
        });

        var select = document.getElementById('selectProviders');
        select.innerHTML = '';

        var opt = document.createElement('option');
        opt.innerHTML = 'Buscar por año';
        select.appendChild(opt);

        uniqueChars.forEach((uc)=>{
            var opt = document.createElement('option');
            opt.value = uc;
            opt.innerHTML = uc;
            select.appendChild(opt);
        });


        window.getTransactionsForYearProviders = function(transaction) {
            $('#divTransactions tbody').empty();
            transactions.forEach((tr) =>{
                var year = tr.date.substring(0, tr.date. indexOf('-'));

                if(tr.total !== 0 && year === transaction.value){
                    $("#divTransactions tbody").append(
                        "<tr>" +
                        "<td class='text-center'>" + tr.date + "</td>" +
                        "<td class='text-center'>" + dollarUSLocale.format(tr.total) + "</td>" +
                        "</tr>"

                    );
                }else if(transaction.value === 'Buscar por año' && tr.total !== 0){
                    $("#divTransactions tbody").append(
                        "<tr>" +
                        "<td class='text-center'>" + tr.date + "</td>" +
                        "<td class='text-center'>" + dollarUSLocale.format(tr.total) + "</td>" +
                        "</tr>"

                    );
                }

            });


        };

    });

    $( "#modal_customers" ).on('shown.bs.modal', function(e){
        $('#divCustomersTransactions').empty();

        var dollarUSLocale = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        var years = [];
        var transactions = $(e.relatedTarget).data('transactions');


        $('#divCustomersTransactions').html(
            "<table id='tablaTransactions' class='table'>" +
            "<thead class='thead-default thead-custom'>" +
            "<tr>" +
            "<th class='text-center'>Fecha</th> " +
            "<th class='text-center'>Total</th> " +
            "</thead>" +
            "<tbody>" +
            "</tbody>" +
            "</table>"
        ).appendTo('#divCustomersTransactions');

        $.each(transactions, function (index, transaction) {
            if(transaction.total !== 0){
                years.push( transaction.date.substring(0, transaction.date. indexOf('-')));
                $("#divCustomersTransactions tbody").append(
                    "<tr>" +
                    "<td class='text-center'>" + transaction.date + "</td>" +
                    "<td class='text-center'>" + dollarUSLocale.format(transaction.total) + "</td>" +
                    "</tr>"

                )
            }
        });

        var uniqueChars = [];
        years.forEach((y) => {
            if (!uniqueChars.includes(y)) {
                uniqueChars.push(y);
            };
        });

        var select = document.getElementById('selectProvidersCustomers');
        select.innerHTML = '';

        var opt = document.createElement('option');
        opt.innerHTML = 'Buscar por año';
        select.appendChild(opt);

        uniqueChars.forEach((uc)=>{
            var opt = document.createElement('option');
            opt.value = uc;
            opt.innerHTML = uc;
            select.appendChild(opt);
        });
        
        window.getTransactionsForYearCustomers = function(transaction) {
            $('#divCustomersTransactions tbody').empty();

            transactions.forEach((tr) => {
                var year = tr.date.substring(0, tr.date.indexOf('-'));
                if(tr.total !== 0 && year === transaction.value){
                    $("#divCustomersTransactions tbody").append(
                        "<tr>" +
                        "<td class='text-center'>" + tr.date + "</td>" +
                        "<td class='text-center'>" + dollarUSLocale.format(tr.total) + "</td>" +
                        "</tr>"

                    );
                }else if(transaction.value === 'Buscar por año' && tr.total !== 0){
                    $("#divCustomersTransactions tbody").append(
                        "<tr>" +
                        "<td class='text-center'>" + tr.date + "</td>" +
                        "<td class='text-center'>" + dollarUSLocale.format(tr.total) + "</td>" +
                        "</tr>"

                    );
                }
            });



        };

    });





    //window.display_table = function (table_id) {
    //    calculate_comparative(table_id);
    //};
});

let readURL = (input) => {
    if (input.files[0]) {
        var reader = new FileReader();
        let ext = getFileExtension(input.files[0].name);
        let validImageTypes = ['gif', 'jpeg', 'png', 'jpg'];
        if (validImageTypes.includes(ext)) {
            reader.readAsDataURL(input.files[0]);
        }
    }

    reader.onload = function (e) {
        $('.profile-picture').attr('src', e.target.result);
        $('.profile-picture').attr('style', 'object-fit:cover; width:130px; height:130px;');
    }
};

let getFileExtension = (filename) => {
    return filename.split('.').pop();
};

let cascadeSelects = (source, destination, url) => {
    let ajaxRequest = (resource, edit) => {
        if (resource !== '') {
            $.get(url, {resource: resource}, function (data) {
                destination.empty();
                if (data.length > 0) {
                    for (let action of data) {
                        destination.append($('<option>', {value: action[0], text: action[1]}));
                    }
                    edit && destination.val(destination.data('value'));
                } else {
                    destination.append($('<option>', {value: '', text: I18n.t('helpers.select.no_options')}));
                }
                $('.selectpicker').selectpicker('refresh');
            })
                .fail(function () {
                    toastr.warning(I18n.t('messages.try_again'));
                });
        }
    };

    ajaxRequest(source.val(), true);

    source.on('change', function (e) {
        let resource = $(e.target).val();
        ajaxRequest(resource, false);
    });
};

let loadSelectPeriod = (period_type) => {
    var array = [];

    if(period_type === 'mensual'){
        array.push('<option value="enero">Enero</option>');
        array.push('<option value="febrero">Febrero</option>');
        array.push('<option value="marzo">Marzo</option>');
        array.push('<option value="abril">Abril</option>');
        array.push('<option value="mayo">Mayo</option>');
        array.push('<option value="junio">Junio</option>');
        array.push('<option value="julio">Julio</option>');
        array.push('<option value="agosto">Agosto</option>');
        array.push('<option value="septiembre">Septiembre</option>');
        array.push('<option value="octubre">Octubre</option>');
        array.push('<option value="noviembre">Noviembre</option>');
        array.push('<option value="diciembre">Diciembre</option>');
    }else if(period_type === 'trimestral'){
        array.push('<option value="1_trimestre">1 Trimestre</option>');
        array.push('<option value="2_trimestre">2 Trimestre</option>');
        array.push('<option value="3_trimestre">3 Trimestre</option>');
        array.push('<option value="4_trimestre">4 Trimestre</option>');
    }

    $('#period_selector').empty().append(array.join(''));
};

function calculate_comparative(table_id){
    //$("table#comparative_table").hide();
    var colMax  = 0;
    var all_col = document.getElementsByClassName('col-comp');
    var titles  = [];
    var noCols  = $("table#"+table_id+" tr.tr-rdata:first").children('td.sum_input').filter(function() {
        return $(this).css('display') !== 'none';
    }).length;

    if(noCols !== 2){
        for(var i = 0;i < all_col.length; i++)
        {
            all_col[i].style.display="none";
        }
        document.getElementById("col-comp_head_"+table_id).style.display="none";
    }else{
        $("table#"+table_id+" tr.tr-title").children('th.th-title').filter(function() {
            return $(this).css('display') !== 'none';
        }).each(function () {
            titles.push($(this).text().split(" ")[0]);
        });

        //****Evalua si pertenecen al mismo periodo en base a la primera palabra del th***//
        if(titles.every((val, ind, arr) => val === arr[0])){
            if(titles[0].toLowerCase()  === 'anual'){
                $('div.percentage-badge.blue-badge').show();
            }else{
                $('div.percentage-badge.blue-badge').hide();
            }
            for(var i = 0;i < all_col.length; i++)
            {
                all_col[i].style.display="table-cell";
            }
            document.getElementById("col-comp_head_"+table_id).style.display="table-cell";
        }
    }

    $("table#"+table_id+" tr.tr-rdata").each(function(index, tb_row) {
        var percent_values_array = [];
        var max_num              = 0;
        var min_num              = 0;
        var percent_value        = 0;

        var columns = $(tb_row).children('td.sum_input').filter(function() {
            return $(this).css('display') !== 'none';
        });
        var rowTotal    = 0;

        colMax = columns.length;

        for (var col = 0; col < colMax; col++) {
            if(columns.eq(col).css('display') !== 'none'){
                var colData    = parseFloat(columns.eq(col).find('span.td-value'+index).text().split(',').join(''));
                var colPercent = columns.eq(col).find('span.percent-value'+index).text().split(" ")[0];

                percent_values_array.push(colPercent);
                colData = Math.abs(colData);
                //CALCULO DE COMPARATIVA, RESTA DE AÑO 1 - 2
                if(!isNaN(colData)){
                    if(col === 0){
                        rowTotal = colData;
                    }else{
                        rowTotal -= colData;
                    }
                }else{
                    rowTotal = null;
                    break;
                }

            }
        };

        // CALCULO DE VARIACIÓN DE PORCENTAJES
        max_num = Math.max(...percent_values_array);
        min_num = Math.min(...percent_values_array);
        percent_value = ((max_num - min_num)/min_num)*100;

        if(Number.isFinite(percent_value) || percent_value){
            if(percent_value > 100 || percent_value < 0){
                $('span.percent_t'+index).text('+100 %');
            }else{
                $('span.percent_t'+index).text(percent_value.toFixed(2) + ' %');
            }
        }else{
            $('span.percent_t'+index).text('+100 %');
        }

        if(rowTotal !== null){

            $('span.total_p'+index).text(rowTotal.toLocaleString());
            $('span.percent_t'+index).show();
            $('span.scale'+index).show();
            $('span.total_p'+index).closest('td').removeClass( "bg-lines" );
        }else{
            $('span.total_p'+index).text('');
            if(titles.length > 0){
                if(titles[0].toLowerCase() != 'anual'){
                    $('span.total_p'+index).closest('td').addClass( "bg-lines" );
                }
            }
            $('span.scale'+index).hide();
            $('span.percent_t'+index).hide();
        }
    });

    //======> CALCULO DE PORCENTAJE HORIZONTAL COLUMNA COMPARATIVA ENTRE PORCENTAJES DE DIFERENCIA ENTRE SAT Y CAPTURA
    var rowMax = ($("table#"+table_id+" tr.tr-rdata").length)/2;

    for(var row = 0; row < rowMax; row ++) {
        var values_array = [];
        var max_num = 0;
        var min_num = 0;
        var percent_value = 0;
        var rowData = '';

        for (var col = 0; col < colMax; col++) {
            if ($('span#' + table_id + '.percent-bdg' + row + '-' + col).closest('td.sum_input').css('display') !== 'none') {
                rowData = $('span#' + table_id + '.percent-bdg' + row + '-' + col).text();
                values_array.push(parseFloat(rowData));
            }
        }

        max_num = Math.max(...values_array);
        min_num = Math.min(...values_array);
        percent_value = ((max_num - min_num) / min_num) * 100;
        if(percent_value > 100){
            $('span.tb-badge'+row).text('+100 %');
        }else{
            $('span.tb-badge'+row).text(percent_value.toFixed(2) + ' %');
        }
    }
    ///=======>

    //$("table#comparative_table").show();
}

function fillEventForm(eventId, eventTitle, eventDesc, eventDatetime, eventType, eventLocation, eventUrl, eventUsers, eventRequests){
    $(".modal-body #event_id").val(eventId);
    $(".modal-body #title_input").val(eventTitle);
    $(".modal-body #event_description").val(eventDesc);
    $(".modal-body #datetime_input").val(eventDatetime);
    $(".modal-body #event_type_select").val(eventType).trigger('change');
    $(".modal-body #event_location").val(eventLocation);
    $(".modal-body #event_url").val(eventUrl);
    $("#eventUsers").val(eventUsers).trigger('change');
    $("#eventRequests").val(eventRequests).trigger('change');

    validateData();
}

export {cascadeSelects, fillEventForm};
