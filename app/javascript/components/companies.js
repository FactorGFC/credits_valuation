import $ from 'jquery';
import I18n from 'i18n-js';
import 'javascripts/i18n/translations';
I18n.locale = I18n.locale;

const emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

$(document).on('turbolinks:load', function () {

    $(document).on("click", ".open-modal-request", function () {
        var requestId       = $(this).data('id');
        var companyId       = $(this).data('companyid');
        var processStatus   = $(this).data('process-status');
        var analystId       = $(this).data('analyst-id');
        var factorCreditId  = $(this).data('factorcredit-id');
        var requestFile  = $(this).data('request-file');


        var viewName        = document.getElementById('viewName');
        var typeRoleUser        = document.getElementById('typeRoleUser');
        if(viewName ){
            if(viewName.value === 'company_details' && typeRoleUser.value=== 'analyst' && requestFile === ''){

                document.getElementById('idBtnDetail').disabled = true;
            }else{
                $(".modal-body #file_null_id").hide();
                $(".modal-body #idBtnDetail").prop('disabled', false);
            }
        };


        if(document.getElementById('input_credit_type')){
            if(requestId){
                document.getElementById('input_credit_type').style.display = 'grid';
            }else{
                document.getElementById('input_credit_type').style.display = 'none';
            }
        }

        //Evalua si fue rechazado
        if(processStatus['key'] == 'denied_validated_period'){
            if(document.getElementById('input_status_process')){

                document.getElementById('input_status_process').style.display = 'none';
            }
        }else{
            if(document.getElementById('input_status_process')){
                document.getElementById('input_status_process').style.display = 'grid';
            }
        }

        $(".modal-body #requestId").val(requestId);
        $(".modal-body #companyId").val(companyId);
        $(".modal-body #request_analyst_id").val(analystId).trigger('change');
        $(".modal-body #request_factor_credit_id").val(factorCreditId).trigger('change');
        $(".modal-body #request_hidden_factor_credit_id").val(factorCreditId);
        $(".modal-body #request_hidden_file_id").val(requestFile);
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

    window.showMoreInfo = function() {
        var moreInfo = document.getElementById("moreInfo");
        var btnShow = document.getElementById("btn-show-info");
        var btnHide = document.getElementById("btn-hide-info");

        moreInfo.style.display = "inline";
        btnHide.style.display = "block";
        btnShow.style.display = "none";
    };

    window.showLessInfo = function() {
        var moreInfo = document.getElementById("moreInfo");
        var btnHide = document.getElementById("btn-hide-info");
        var btnShow = document.getElementById("btn-show-info");
        moreInfo.style.display = "none";
        btnShow.style.display = "block";
        btnHide.style.display = "none";
    };

    /*window.showMorePFInfo = function() {
        var moreInfo = document.getElementById("moreInfoPF");
        moreInfo.style.display = "inline";
    };

    window.showLessPFInfo = function() {
        var moreInfo = document.getElementById("moreInfoPF");
        moreInfo.style.display = "none";
    };*/


    var moreInfo = document.getElementById("moreInfo");
    if (moreInfo) {
        moreInfo.style.display = "none";
    }
    var moreInfoPF = document.getElementById("moreInfoPF");
    if (moreInfoPF) {
        moreInfoPF.style.display = "none";
    }

    window.showMoreInfo = function () {
        var moreInfo = document.getElementById("moreInfo");
        var btnShow = document.getElementById("btn-show-info");
        var btnHide = document.getElementById("btn-hide-info");
        moreInfo.style.display = "inline";
        btnHide.style.display = "block";
        btnShow.style.display = "none";
    };

    window.showLessInfo = function () {
        var moreInfo = document.getElementById("moreInfo");
        var btnHide = document.getElementById("btn-hide-info");
        var btnShow = document.getElementById("btn-show-info");
        moreInfo.style.display = "none";
        btnShow.style.display = "block";
        btnHide.style.display = "none";
    };

    window.showMorePFInfo = function () {
        var moreInfo = document.getElementById("moreInfoPF");
        var btnShow = document.getElementById("btn-show-info-pf");
        var btnHide = document.getElementById("btn-hide-info-pf");
        moreInfo.style.display = "inline";
        btnHide.style.display = "block";
        btnShow.style.display = "none";
    };

    window.showLessPFInfo = function() {
        var moreInfo = document.getElementById("moreInfoPF");
        var btnShow = document.getElementById("btn-show-info-pf");
        var btnHide = document.getElementById("btn-hide-info-pf");
        moreInfo.style.display = "none";
        btnShow.style.display = "block";
        btnHide.style.display = "none";
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

    window.calculateGrossProfit = function(ingresos, costo_ventas, utilidad_bruta){
        const ingreso_val   = $(`[name="${ingresos}"]`).val();
        const costo_val     = $(`[name="${costo_ventas}"]`).val();
        const gross_profit  = $(`[name="${utilidad_bruta}"]`);

        gross_profit.val(parseFloat(ingreso_val) - parseFloat(costo_val)).change();
    };

    window.calculateUtilityOperation = function(utilidad_bruta, gastos_op, utilidad_operacion){
        const utilidad_br_val   = $(`[name="${utilidad_bruta}"]`).val();
        const gastos_val        = $(`[name="${gastos_op}"]`).val();
        const utilidad_op       = $(`[name="${utilidad_operacion}"]`);

        utilidad_op.val(parseFloat(utilidad_br_val) - parseFloat(gastos_val)).change();
    };

    window.calculateFinancingResult = function(gasto_fin, utilidad_perdida, resultado_fin){
        const gasto_val     = $(`[name="${gasto_fin}"]`).val();
        const utilidad_val  = $(`[name="${utilidad_perdida}"]`).val();
        const res_int_fin   = $(`[name="${resultado_fin}"]`);

        res_int_fin.val(parseFloat(gasto_val) + parseFloat(utilidad_val)).change();
    };

    window.calculateIncomeBeforeTaxes = function(utilidad_operacion, resultado_fin, otros_gastos_ing, utilidad_ai){
        const utilidad_op_val       = $(`[name="${utilidad_operacion}"]`).val();
        const resultado_fin_val     = $(`[name="${resultado_fin}"]`).val();
        const otros_gastos_ing_val  = $(`[name="${otros_gastos_ing}"]`).val();
        const utilidad_antes_imp    = $(`[name="${utilidad_ai}"]`);

        utilidad_antes_imp.val(parseFloat(utilidad_op_val) - parseFloat(resultado_fin_val) - parseFloat(otros_gastos_ing_val)).change();
    };

    window.calculateNetIncome = function(utilidad_ai, isr, ptu, participacion_sub, utilidad_neta){
        const utilidad_ai_val       = $(`[name="${utilidad_ai}"]`).val();
        const isr_val               = $(`[name="${isr}"]`).val();
        const ptu_val               = $(`[name="${ptu}"]`).val();
        const participacion_sub_val = $(`[name="${participacion_sub}"]`).val();
        const ut_neta               = $(`[name="${utilidad_neta}"]`);

        ut_neta.val(parseFloat(utilidad_ai_val) - parseFloat(isr_val) - parseFloat(ptu_val) - parseFloat(participacion_sub_val)).change();
    };
    

    window.validateDataCompany = function(){
        var name_id = document.getElementById('name_id');
        var last_name_id = document.getElementById('last_name_id');
        var phone_input = document.getElementById('phone_input');
        var email_input = document.getElementById('email_input');
        var company_name_id = document.getElementById('company_name_id');
        var rfc_input = document.getElementById('rfc_input');
        var address_id = document.getElementById('address_id');
        var status_id = document.getElementById('status_id');

        if(name_id.value !== '' && name_id.value !== undefined && name_id.value !== null && last_name_id.value !== ''
            && last_name_id.value !== undefined && last_name_id.value !== null && phone_input.value !== ''
            && phone_input.value !== undefined && phone_input.value !== null && email_input.value !== ''
            && email_input.value !== undefined && email_input.value !== null && company_name_id.value !== ''
            && company_name_id.value !== undefined && company_name_id.value !== null && rfc_input.value !== ''
            && rfc_input.value !== undefined && rfc_input.value !== null && address_id.value !== ''
            && address_id.value !== undefined && address_id.value !== null && status_id.value !== ''
            && status_id.value !== undefined && status_id.value !== null){
            var companyBtn = document.getElementById("companyBtn");
            companyBtn.classList.remove("btn-section-disabled");

        }
    };



    window.validate_type_credit = function(){
        var selectValue = document.getElementById("request_factor_credit_id").value;
        var fileValue = document.getElementById("request_hidden_file_id");
        var typeRoleUser        = document.getElementById('typeRoleUser');
        var selectStatus        = document.getElementById('request_process_status_id');

        console.log("fileValue");
        console.log(fileValue.value);

        if(typeRoleUser.value === 'credit_area'){
            document.getElementById('idBtnDetail').disabled = false;
        }else{
            if(fileValue.value === ''){
                if(selectStatus.value === '10'){
                    $('#file_null_id').show();
                    document.getElementById('idBtnDetail').disabled = true;
                }else{
                    $('#file_null_id').hide();
                    document.getElementById('idBtnDetail').disabled = false;
                }
            }else{
                $('#file_null_id').hide();
                if((selectValue === '' || selectValue === null || selectValue === undefined) && typeRoleUser.value=== 'analyst'){
                    document.getElementById('idBtnDetail').disabled = true;

                }else{
                    document.getElementById('idBtnDetail').disabled = false;
                }
            }
        }

    }
});