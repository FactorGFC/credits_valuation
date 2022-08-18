import $ from 'jquery';
import I18n from 'i18n-js';
import 'javascripts/i18n/translations';
I18n.locale = window.I18n.locale;

const emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

$(document).on('turbolinks:load', function () {
    $(document).on("click", ".open-modal-request", function () {
        var requestId       = $(this).data('id');
        var companyId       = $(this).data('companyid');
        var processStatus   = $(this).data('process-status');
        var analystId       = $(this).data('analyst-id');
        var factorCreditId  = $(this).data('factorcredit-id');


        if(requestId){
            document.getElementById('input_credit_type').style.display = 'grid';
        }else{
            document.getElementById('input_credit_type').style.display = 'none';
        }

        if(processStatus['order'] > 2){
            document.getElementById('input_status_process').style.display = 'grid';
        }else{
            document.getElementById('input_status_process').style.display = 'none';
        }

        $(".modal-body #requestId").val(requestId);
        $(".modal-body #companyId").val(companyId);
        $(".modal-body #request_analyst_id").val(analystId).trigger('change');
        $(".modal-body #request_factor_credit_id").val(factorCreditId).trigger('change');
        $(".modal-body #request_process_status_id").val(processStatus['id']).trigger('change');

    });

    $(document).on("click", ".open-modal-file-request", function () {
        var requestId       = $(this).data('id');

        $(".modal-body #requestIdFile").val(requestId);

    });

    window.emailValidate = function() {
        var isValid = emailRegex.test($('#email_input').val());

        if (isValid) {
            $('#validEmail').hide();
            validateData();
        } else {
            $('#validEmail').show();
            $('#request_btn').attr('class', 'btn-section-disabled');
        }
    };

    window.phoneValidate = function() {
        var isValid = phoneRegex.test($('#phone_input').val());

        if (isValid) {
            $('#validPhone').hide();
            validateData();
        } else {
            $('#validPhone').show();
            $('#request_btn').attr('class', 'btn-section-disabled');
        }
    };

    window.rfcValidate = function() {
        var rfc_value = $('#rfc_input').val();

        if (rfc_value.length === 13 || rfc_value.length === 12) {
            $('#validRfc').hide();
            validateData();
        } else {
            $('#validRfc').show();
            $('#request_btn').attr('class', 'btn-section-disabled');
        }
    };

    window.validateData = function() {
        var email_input = $('#email_input').val();
        var phone_input = $('#phone_input').val();
        var rfc_input = $('#rfc_input').val();

        if (email_input !== '' && phone_input !== '' && rfc_input !== '') {
            $('#request_btn').attr('class', '');
        }
    };


});