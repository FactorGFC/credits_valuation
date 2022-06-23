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
        var companyAssignTo     = $(this).data('assignto');

        $("#titleModalLabel").text( companyRfc + ' - '+ companyName);
        $('#company_income_calendars').val(companyCalendars);
        $('#company_income_calendars').trigger('change');
        $('#company_balance_calendars').val(companyCalendars);
        $('#company_balance_calendars').trigger('change');
        $(".modal-body #companyId").val(companyId);
        $(".modal-body #companyApproved").val(companyApproved);
        $(".modal-body #companyAssignTo").val(companyAssignTo);

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

    var emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    function emailValidate(){
        var isValid = emailRegex.test($('#email_input').val());

        if(isValid){
            $('#validEmail').hide();
            validateData();
        }else{
            $('#validEmail').show();
            $('#request_btn').attr('class', 'btn-section-disabled');
        }
    }

    function phoneValidate(){
        var isValid = phoneRegex.test($('#phone_input').val());

        if(isValid){
            $('#validPhone').hide();
            validateData();
        }else{
            $('#validPhone').show();
            $('#request_btn').attr('class', 'btn-section-disabled');
        }
    }

    function rfcValidate(){
        var rfc_value = $('#rfc_input').val();

        if(rfc_value.length === 13){
            $('#validRfc').hide();
            validateData();
        }else{
            $('#validRfc').show();
            $('#request_btn').attr('class', 'btn-section-disabled');
        }
    }

    function validateData(){
        var email_input = $('#email_input').val();
        var phone_input = $('#phone_input').val();
        var rfc_input   = $('#rfc_input').val();

        if(email_input !== '' && phone_input !== '' &&  rfc_input !== ''){
            $('#request_btn').attr('class', '');
        }
    }
});
