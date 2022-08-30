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

        if(document.getElementById('input_credit_type')){
            if(requestId){
                document.getElementById('input_credit_type').style.display = 'grid';
            }else{
                document.getElementById('input_credit_type').style.display = 'none';
            }
        }

        console.log(processStatus['key']);
        //Evalua si fue rechazado
        if(processStatus['key'] == 'denied_validated_period'){
            document.getElementById('input_status_process').style.display = 'none';
        }else{
            document.getElementById('input_status_process').style.display = 'grid';
        }

        $(".modal-body #requestId").val(requestId);
        $(".modal-body #companyId").val(companyId);
        $(".modal-body #request_analyst_id").val(analystId).trigger('change');
        $(".modal-body #request_factor_credit_id").val(factorCreditId).trigger('change');
        $(".modal-body #request_process_status_id").val(processStatus['id']).trigger('change');

    });

    $(document).on("click", ".open-modal-file-request", function () {
        var requestId       = $(this).data('id');

        console.log("requestId -----------");
        console.log(requestId);

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
});