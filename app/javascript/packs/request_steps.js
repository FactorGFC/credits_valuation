import $ from 'jquery';
import I18n from 'i18n-js';
import 'javascripts/i18n/translations';


$(document).on('turbolinks:load', function () {
    console.log("ENTRE");

    function prevPage(prev, current) {
        document.getElementById("page-"+ prev).style.display     = "block";
        document.getElementById("page-"+ current).style.display  = "none";
        document.getElementById("step" + current).style.opacity  = 0.5;

        $("#step" + prev).removeClass('completed').addClass('active');
        $("#ind"  + prev).removeClass('active');

        $("#step" + current).removeClass('completed').removeClass('active');
        $("#step" + prev + " > .step-icon").html(prev);


        $("#stepDesc" + current).addClass('inactive');
    }

    function nextPage(next, current) {
        document.getElementById("page-"+next).style.display     = "block";
        document.getElementById("page-"+current).style.display  = "none";
        document.getElementById("step"+next).style.opacity      = 1;

        $("#step"+ next).addClass('active');

        $("#stepDesc"+ next).removeClass('inactive');
        $("#step"+ current).addClass('completed').removeClass('active');
        $("#ind" + current).addClass('active');
        $("#step"+ current+ " > .step-icon").html("<i class='fa fa-check' aria-hidden='true'></i>");
    }
    
    var emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    window.emailValidate = function() {
        var isValid = emailRegex.test($('#email_input').val());

        if (isValid) {
            $('#validEmail').hide();
            validateData();
        } else {
            $('#validEmail').show();
            $('#request_btn').attr('class', 'btn-section-disabled');
        }
    }

    window.phoneValidate = function() {
        var isValid = phoneRegex.test($('#phone_input').val());

        if (isValid) {
            $('#validPhone').hide();
            validateData();
        } else {
            $('#validPhone').show();
            $('#request_btn').attr('class', 'btn-section-disabled');
        }
    }

    window.rfcValidate = function() {
        var rfc_value = $('#rfc_input').val();

        if (rfc_value.length === 13 || rfc_value.length === 12) {
            $('#validRfc').hide();
            validateData();
        } else {
            $('#validRfc').show();
            $('#request_btn').attr('class', 'btn-section-disabled');
        }
    }

    window.validateData = function() {
        var email_input = $('#email_input').val();
        var phone_input = $('#phone_input').val();
        var rfc_input = $('#rfc_input').val();

        if (email_input !== '' && phone_input !== '' && rfc_input !== '') {
            $('#request_btn').attr('class', '');
        }
    }



    $('#creditRequestForm').on('submit', function() {

        console.log("ENTRE");

        return false;
    });
});