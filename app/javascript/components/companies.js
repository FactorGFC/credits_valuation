import $ from 'jquery';
import I18n from 'i18n-js';
import swal from 'sweetalert';
import 'javascripts/i18n/translations';
I18n.locale = I18n.locale;
import Rails from '@rails/ujs';

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
        var fileId       = $(this).data('file');

        console.log("file id");
        console.log(fileId);

        if(fileId !== null && fileId !== undefined && fileId !== ''){
            document.getElementById('have_file_id').style.display = 'block';
        }

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

    // Get all elements with the class "format-number"
    var numberInputs = document.querySelectorAll('.format-number');

    if(numberInputs){
        numberInputs.forEach(function(input) {
            input.addEventListener('input', function() {
                if(this.value !== '-'){
                    var numericValue = parseFloat(this.value.replace(/[^\d.-]/g, ''));

                    // Check if the numeric value is valid
                    if (!isNaN(numericValue)) {
                        // Format the numeric value using toLocaleString and update the input value
                        this.value = numericValue.toLocaleString('en-US');
                    }else{
                        this.value = '';
                    }
                }
            });
        });
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
        const ingreso_val   = parseFloat($(`[name="${ingresos}"]`).val().replace(/,/g, ''));
        const costo_val     = parseFloat($(`[name="${costo_ventas}"]`).val().replace(/,/g, ''));
        const gross_profit  = $(`[name="${utilidad_bruta}"]`);
        var formatted_gross_profit;

        var gross_profit_value = ingreso_val - costo_val;
        if (!isNaN(gross_profit_value)) {
            formatted_gross_profit = gross_profit_value.toLocaleString('en-US');
        } else {
            formatted_gross_profit = ''; // or any default value you prefer
        }
        gross_profit.val(formatted_gross_profit).change();
    };

    window.calculateUtilityOperation = function(utilidad_bruta, gastos_op, utilidad_operacion){
        const utilidad_br_val   = parseFloat($(`[name="${utilidad_bruta}"]`).val().replace(/,/g, ''));
        const gastos_val        = parseFloat($(`[name="${gastos_op}"]`).val().replace(/,/g, ''));
        const utilidad_op       = $(`[name="${utilidad_operacion}"]`);
        var formatted_utilidad_op;

        var utilidad_op_value = utilidad_br_val - gastos_val;

        if (!isNaN(utilidad_op_value)) {
            formatted_utilidad_op = utilidad_op_value.toLocaleString('en-US');
        } else {
            formatted_utilidad_op = '';
        }
        utilidad_op.val(formatted_utilidad_op).change();
    };

    window.otherExpIncChange = function(gasto_fin, utilidad_perdida, otros_gastos_ingresos, resultado_fin, utilidad_operacion, utilidad_ai){
        calculateFinancingResult(gasto_fin, utilidad_perdida, otros_gastos_ingresos, resultado_fin, function() {
            calculateIncomeBeforeTaxes(utilidad_operacion, resultado_fin, utilidad_operacion, utilidad_ai);
        });
    };

    window.calculateFinancingResult = function(gasto_fin, utilidad_perdida, otros_gastos_ingresos, resultado_fin){

        const gasto_val                 = parseFloat($(`[name="${gasto_fin}"]`).val().replace(/,/g, ''));
        const utilidad_val              = parseFloat($(`[name="${utilidad_perdida}"]`).val().replace(/,/g, ''));
        //const otros_gastos_ingresos_val = $(`[name="${otros_gastos_ingresos}"]`).val();
        const res_int_fin               = $(`[name="${resultado_fin}"]`);
        var formatted_res_int_fin;

        //res_int_fin.val(parseFloat(gasto_val) + parseFloat(utilidad_val) + parseFloat(otros_gastos_ingresos_val)).change();
        var res_int_fin_value = gasto_val + utilidad_val;

        if (!isNaN(res_int_fin_value)) {
            formatted_res_int_fin = res_int_fin_value.toLocaleString('en-US');
        } else {
            formatted_res_int_fin = '';
        }

        res_int_fin.val(formatted_res_int_fin).change();
        // Invoke the callback function
        if (typeof callback === 'function') {
            callback();
        }
    };

    window.calculateIncomeBeforeTaxes = function(utilidad_operacion, resultado_fin, otros_gtos, utilidad_ai){
        const utilidad_op_val       = parseFloat($(`[name="${utilidad_operacion}"]`).val().replace(/,/g, ''));
        const resultado_fin_val     = parseFloat($(`[name="${resultado_fin}"]`).val().replace(/,/g, ''));
        const otros_gtos_val        = parseFloat($(`[name="${otros_gtos}"]`).val().replace(/,/g, ''));
        const utilidad_antes_imp    = $(`[name="${utilidad_ai}"]`);
        var formatted_utilidad_ai_value;

        var utilidad_ai_value = utilidad_op_val - resultado_fin_val - otros_gtos_val;

        if (!isNaN(utilidad_ai_value)) {
            formatted_utilidad_ai_value = utilidad_ai_value.toLocaleString('en-US');
        } else {
            formatted_utilidad_ai_value = '';
        }

        utilidad_antes_imp.val(formatted_utilidad_ai_value).change();
    };

    window.calculateNetIncome = function(utilidad_ai, isr, ptu, participacion_sub, utilidad_neta){
        const utilidad_ai_val       = parseFloat($(`[name="${utilidad_ai}"]`).val().replace(/,/g, ''));
        const isr_val               = parseFloat($(`[name="${isr}"]`).val().replace(/,/g, ''));
        const ptu_val               = parseFloat($(`[name="${ptu}"]`).val().replace(/,/g, ''));
        const participacion_sub_val = parseFloat($(`[name="${participacion_sub}"]`).val().replace(/,/g, ''));
        const ut_neta               = $(`[name="${utilidad_neta}"]`);
        var formatted_ut_neta_value;

        var ut_neta_value = utilidad_ai_val - isr_val - ptu_val - participacion_sub_val;

        if (!isNaN(ut_neta_value)) {
            formatted_ut_neta_value = ut_neta_value.toLocaleString('en-US');
        } else {
            formatted_ut_neta_value = '';
        }
        ut_neta.val(formatted_ut_neta_value).change();
    };


    window.calculateTotalActivo = function(caja, clientes, inventarios, otros_activos_circ, terrenos, maquinaria, dep_acumulada, otros_act_fijos, cargos_dif, total_act){
        const caja_val                  = $(`[name="${caja}"]`).val();
        const clientes_val              = $(`[name="${clientes}"]`).val();
        const inventarios_val           = $(`[name="${inventarios}"]`).val();
        const otros_activos_circ_val    = $(`[name="${otros_activos_circ}"]`).val();
        const terrenos_val              = $(`[name="${terrenos}"]`).val();
        const maquinaria_val            = $(`[name="${maquinaria}"]`).val();
        const dep_acumulada_val         = $(`[name="${dep_acumulada}"]`).val();
        const otros_act_fijos_val       = $(`[name="${otros_act_fijos}"]`).val();
        const cargos_dif_val            = $(`[name="${cargos_dif}"]`).val();
        const total_act_field           = $(`[name="${total_act}"]`);

        total_act_field.val(parseFloat(caja_val) + parseFloat(clientes_val) + parseFloat(inventarios_val) + parseFloat(otros_activos_circ_val) + parseFloat(terrenos_val) + parseFloat(maquinaria_val) - parseFloat(dep_acumulada_val) + parseFloat(otros_act_fijos_val) + parseFloat(cargos_dif_val)).change();
    };

    window.calculateTotalPasivo = function(proveedores, contribuciones_pp, anticipo, otros_pas, capital_soc, utilidad_pa, utilidad_pe, otras_cuentas, total_pas){
        const proveedores_val       = $(`[name="${proveedores}"]`).val();
        const contribuciones_pp_val = $(`[name="${contribuciones_pp}"]`).val();
        const anticipo_val          = $(`[name="${anticipo}"]`).val();
        const otros_pas_val         = $(`[name="${otros_pas}"]`).val();
        const capital_soc_val       = $(`[name="${capital_soc}"]`).val();
        const utilidad_pa_val       = $(`[name="${utilidad_pa}"]`).val();
        const utilidad_pe_val       = $(`[name="${utilidad_pe}"]`).val();
        const otras_cuentas_val     = $(`[name="${otras_cuentas}"]`).val();
        const total_pas_field       = $(`[name="${total_pas}"]`);

        total_pas_field.val(parseFloat(proveedores_val) + parseFloat(contribuciones_pp_val) + parseFloat(anticipo_val) + parseFloat(otros_pas_val) + parseFloat(capital_soc_val) + parseFloat(utilidad_pa_val) + parseFloat(utilidad_pe_val) + parseFloat(otras_cuentas_val)).change();
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
        var selectValue = document.getElementById("request_factor_credit_id");
        var fileValue = document.getElementById("request_hidden_file_id");
        var typeRoleUser        = document.getElementById('typeRoleUser');
        var selectStatus        = document.getElementById('request_process_status_id');


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
                if((selectValue.value === '' || selectValue.value === null || selectValue.value === undefined) && typeRoleUser.value=== 'analyst'){
                    document.getElementById('idBtnDetail').disabled = true;

                }else{
                    document.getElementById('idBtnDetail').disabled = false;
                }
            }
        }

    };

    window.validate_totals = function(utilidad_ai, isr, ptu, participacion_sub, utilidad_neta){
        const utilidad_ai_val       = $(`[name="${utilidad_ai}"]`).val();
        const isr_val               = $(`[name="${isr}"]`).val();
        const ptu_val               = $(`[name="${ptu}"]`).val();
        const participacion_sub_val = $(`[name="${participacion_sub}"]`).val();
        const ut_neta               = $(`[name="${utilidad_neta}"]`);

        var totalAct = 0;
        var totalPas = 0;
        var rEquals = false;

        ut_neta.val(parseFloat(utilidad_ai_val) - parseFloat(isr_val) - parseFloat(ptu_val) - parseFloat(participacion_sub_val)).change();
    };


    $('#bs_request_submit').click(function(e){
        validateAndSubmitBS(e, 'eraser');
    });

    $('#bs_request_submit_final').click(function(e){
        validateAndSubmitBS(e, 'finalize');
    });

    var validateAndSubmitBS = function(e, submit_type){

        var rEquals = true;

        //  Validate form
        if(!e.detail || e.detail == 1){
            var formBS = $('form#bs-request-form');

            // Bind a function to the submit event
            formBS.submit(function(event) {
                // Prevent the default form submission behavior
                event.preventDefault();

                var formData = new FormData(formBS[0]);

                if(submit_type === 'finalize'){
                    formData.append("button", "finalize");
                }

                var row_ids = formBS.find('input[id="q_periods"]').val();

                JSON.parse(row_ids).forEach(function(value){
                    var total_activos = formBS.find('input[name="pasivos_total['+value+']"]').val();
                    var total_pasivos = formBS.find('input[name="activos_total['+value+']"]').val();
                    if(total_activos !== total_pasivos){
                        rEquals = false;
                    }
                });

                if(rEquals){
                    $.ajax({
                        url: formBS.attr('action'),
                        type: formBS.attr('method'),
                        data: formData,
                        processData: false,
                        contentType: false,
                        beforeSend: function() {
                            // This code will execute before the AJAX request is sent
                            // Show a loading indicator to indicate that the form submission is being processed
                            swal({
                                title: "Guardando...",
                                text: "Espere un momento por favor",
                                icon: 'info',
                                buttons: false,
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                                allowOutsideClick: false,
                                allowEnterKey: false,
                                closeModal: false
                            });
                        },
                        success: function(response) {
                            swal({
                                title: "GUARDADO",
                                icon: 'success',
                                button: I18n.t('messages.ok')
                            });
                        },
                        error: function(xhr, status, error) {
                            var msj_error = '';
                            if(xhr.responseText !== undefined || xhr.responseText !== '')
                            {
                                $.each(xhr.responseJSON, function(index, value) {
                                    msj_error += '' + index + ': ' + value + '\n'
                                });
                            }

                            swal({
                                title: "ERROR AL GUARDAR",
                                text: msj_error,
                                icon: 'success',
                                button: I18n.t('messages.ok')
                            });
                        },
                        complete: function() {
                            // This code will execute after the AJAX request is completed, regardless of success or error
                            // Close the loading indicator
                            swal.close();
                        }
                    });
                }else{
                    swal({
                        title: "No es posible guardar",
                        text: "Los totales entre activos y pasivos de sus respectivos ciclos no coinciden.",
                        icon: 'warning',
                        button: I18n.t('messages.ok')
                    });
                }
            });

            formBS.submit();

        }
    };

    $("input.focusable-input").trigger('change');

});