import $    from 'jquery';
import swal from 'sweetalert';
import I18n from 'i18n-js';
import 'javascripts/i18n/translations';


$(document).on('turbolinks:load', function () {

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

        //console.log("ENTRE");

        return false;
    });

    $('#openAndSendCode').on('click', function(){
        console.log("ENTRE");
        var phoneNum    = $('#phone_input').val();
        var company_id  = $('#company_id').val();

        $.ajax({
            url: '/send_buro_confirm_code',
            type: 'PUT',
            dataType: 'json',
            data: {
                    phone:      phoneNum,
                    company_id: company_id
            },
            success: function (data, textStatus, xhr) {
                //console.log(data);
            },
            error: function (xhr, textStatus, errorThrown) {
                if(xhr.status == 401){
                    swal({
                        title: "El codigo ya fue enviado",
                        text: "Espera a recibir el código o intenta de nuevo mas tarde.",
                        icon: 'warning',
                        button: I18n.t('messages.ok')
                    });
                }else{
                    swal({
                        title: "!Ups!",
                        text: "Hubo un error, por favor intenta mas tarde.",
                        icon: 'warning',
                        button: I18n.t('messages.ok')
                    });
                }
                console.log('Error in Operation');
            }
        });

        $('#m_phone_confirmation').modal();
    });

    $('#resendConfirmCode').on('click', function(){
        var phoneNum    = $('#phone_input').val();
        var company_id  = $('#company_id').val();

        $.ajax({
            url: '/send_buro_confirm_code',
            type: 'PUT',
            dataType: 'json',
            data: {
                    phone:      phoneNum,
                    company_id: company_id
            },
            success: function (data, textStatus, xhr) {
                //console.log(data);
                swal({
                    title: "Código reenviado",
                    text: "El código fue reenviado a ti correo electrónico",
                    icon: 'success',
                    button: I18n.t('messages.ok')
                });
            },
            error: function (xhr, textStatus, errorThrown) {
                if(xhr.status == 401){
                    swal({
                        title: "El código ya fue enviado",
                        text: "Espera a recibir el código o intenta de nuevo mas tarde.",
                        icon: 'warning',
                        button: I18n.t('messages.ok')
                    });
                }else{
                    swal({
                        title: "!Ups!",
                        text: "Hubo un error, por favor intenta mas tarde.",
                        icon: 'error',
                        button: I18n.t('messages.ok')
                    });
                }
                console.log('Error in Operation');
            }
        });

        $('#m_phone_confirmation').modal();
    });

    $('#confirm_data_form').on('ajax:success', function(event){
        const [data, status, xhr] = event.detail
        //console.log(xhr.responseText)
        // or
        //console.log(data.success)
    }).on('ajax:error',function(event){
        //console.log("Something went wrong")
        swal({
            title: "!Ups!",
            text: "El código no coincide, intenta de nuevo.",
            icon: 'warning',
            button: I18n.t('messages.ok')
        });
    });

    $('input#confirm_input_code').on('keyup',function(){
        if($(this).val().length == 4){
            $('#submit_complete_data').attr('disabled' , false);
            $('#submit_complete_data').css({'cursor': 'pointer'});
        }else{
            $('#submit_complete_data').attr('disabled' , true);
            $('#submit_complete_data').css({'cursor': 'not-allowed'});
        }
    });
});