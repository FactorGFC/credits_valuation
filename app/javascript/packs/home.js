import $ from 'jquery';
import I18n from 'i18n-js';
import 'javascripts/i18n/translations';
I18n.locale = window.I18n.locale;

$(document).on('turbolinks:load', function () {

    /*Modal para home y company_details*/
    $(document).on("click", ".open-modal1", function () {
        var companyName         = $(this).data('name');
        var companyRfc          = $(this).data('rfc');
        var companyId           = $(this).data('id');
        var companyApproved     = $(this).data('approved');
        var companyCalendars    = $(this).data('calendars');
        //var companyAssignTo     = $(this).data('assignto');

        $("#titleModalLabel").text( companyRfc + ' - '+ companyName);
        $('#company_income_calendars').val(companyCalendars);
        $('#company_income_calendars').trigger('change');
        $('#company_balance_calendars').val(companyCalendars);
        $('#company_balance_calendars').trigger('change');
        $(".modal-body #companyId").val(companyId);
        $(".modal-body #companyApproved").val(companyApproved);
        //$(".modal-body #companyAssignTo").val(companyAssignTo);

        if (companyApproved){
            $("#idBtn").text('Aprobar');
            $("#idBtn").removeClass('btn-danger');
            $("#idBtn").addClass('btn-primary');
            $("#textModal").text('Se va a validar la compañia para que pueda acceder al sistema.');
        }else{

            $("#idBtn").text('Rechazar');
            $("#idBtn").removeClass('btn-primary');
            $("#idBtn").addClass('btn-danger');
            $("#textModal").text('Se va a rechazar la compañia para que pueda no pueda acceder al sistema.');
        }

    });

    /*Modal en request comments*/
    $(document).on("click", ".open-modal2", function () {
        var requestId        = $(this).data('request');
        var analystId        = $(this).data('analyst');
        var processId        = $(this).data('process');
        var currentUserId    = $(this).data('current');

        $(".modal-body #requestId").val(requestId);
        $(".modal-body #analystId").val(analystId);
        $(".modal-body #processId").val(processId);
        $(".modal-body #currentUserId").val(currentUserId);
    });

    if(document.getElementById('comparative_table')) {
        var colMax = 0;

        $("table#comparative_table tr.tr-rdata").each(function(index, tb_row) {
            var columns     = $(tb_row).children('td.sum_input');
            var rowTotal    = 0;

            colMax = columns.length;

            for (var col = 0; col < colMax; col++) {
                var colData = parseFloat(columns.eq(col).find('span.td-value'+index).text());
                if(colData){
                    if(col === 0){
                        rowTotal = colData;
                    }else{
                        rowTotal -= colData;
                    }
                }else{
                    rowTotal -= 0;
                }
            }

            $('input[name=total_p'+index+']').val(rowTotal.toFixed(2));
        });

        var rowMax = ($("table#comparative_table tr.tr-rdata").length)/2;

        for(var row = 0; row < rowMax; row ++){
            var values_array  = [];
            var max_num       = 0;
            var min_num       = 0;
            var percent_value = 0;
            var rowData       = '';

            for (var col = 0; col < colMax; col++) {
                rowData = $('.percent-bdg'+row+'-'+col).text();
                values_array.push(parseFloat(rowData));
            }

            max_num = Math.max(...values_array);
            min_num = Math.min(...values_array);
            percent_value = ((max_num - min_num)/min_num);

            $('span.tb-badge'+row).text(percent_value.toFixed(2) + ' %');
        }
    }

});
