import $ from 'jquery';
import I18n from 'i18n-js';
import 'javascripts/i18n/translations';
I18n.locale = I18n.locale;

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

    /*Modal para cambiar estatus de captura*/
    $(document).on("click", ".open-modal-cstatus", function () {
        var companyId           = $(this).data('id');
        var captureType         = $(this).data('type');

        console.log(companyId)
        console.log(captureType)

        if(captureType === 'balance_sheet'){
            $("h5#titleModalLabel").text('Habilitar captura de Balance Financiero' );
        }else{
            $("h5#titleModalLabel").text('Habilitar captura de Estado de Resultados' );
        }

        $(".modal-body #companyId").val(companyId);
        $(".modal-body #captureType").val(captureType);
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

});
