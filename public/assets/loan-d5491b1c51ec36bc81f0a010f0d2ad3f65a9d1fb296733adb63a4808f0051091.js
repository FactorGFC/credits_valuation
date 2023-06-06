var emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

function emailValidate() {
    var isValid = emailRegex.test($('#email_input').val());

    if (isValid) {
        $('#validEmail').hide();
        validateData();
    } else {
        $('#validEmail').show();
        $('#request_btn').attr('class', 'btn-section-disabled');
    }
}

function phoneValidate() {
    var isValid = phoneRegex.test($('#phone_input').val());

    if (isValid) {
        $('#validPhone').hide();
        validateData();
    } else {
        $('#validPhone').show();
        $('#request_btn').attr('class', 'btn-section-disabled');
    }
}

function rfcValidate() {
    var rfc_value = $('#rfc_input').val();

    if (rfc_value.length === 13 || rfc_value.length === 12) {
        $('#validRfc').hide();
        validateData();
    } else {
        $('#validRfc').show();
        $('#request_btn').attr('class', 'btn-section-disabled');
    }
}

function validateData() {
    var email_input = $('#email_input').val();
    var phone_input = $('#phone_input').val();
    var rfc_input = $('#rfc_input').val();

    if (email_input !== '' && phone_input !== '' && rfc_input !== '') {
        $('#request_btn').attr('class', '');
    }
}

function validateEmailExists(){
    var email = $('#email_input').val();
    
    $.ajax({
        url: "get_user_by_email.json",
        type: "get", //send it through get method
        data: {
            emailAddress: email
        },
        success: function(response) {

            if(response){
                $('#emailExist').show();
                $('#request_btn').attr('class', 'btn-section-disabled');
            }else{
                $('#emailExist').hide();
            }
        },
        error: function(xhr) {
            //Do Something to handle error
        }
    });
};
