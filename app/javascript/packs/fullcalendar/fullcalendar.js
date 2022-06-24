import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import esLocale      from '@fullcalendar/core/locales/es';
import swal from "sweetalert";
import I18n from "i18n-js";


document.addEventListener('turbolinks:load', function() {

    var calendarEl  = document.getElementById('calendar');
    $(document).ready(function() {
        var calendar = new Calendar(calendarEl, {
            plugins: [ dayGridPlugin ],
            initialView: 'dayGridMonth',
            initialDate: Date.now(),
            editable: true,
            droppable: false,
            locale: esLocale,
            eventSources: '/get_events',
            eventClick: function(info) {

                let authenticityToken = $('[name="csrf-token"]')[0] && $('[name="csrf-token"]')[0].content;

                $.ajax({
                    url: 'get_event_info/'+info.event.id,
                    data: {authenticity_token: authenticityToken},
                    type: 'GET',
                    dataType: 'json',
                    success: function (data) {
                        let event = data;
                        $("#titleModalLabel").text('EDITAR EVENTO');
                        fillEventForm(event.id, event.title, event.description, event.start, event.event_type, event.location, event.url, event.user_ids)
                    },
                    error: function (error) {
                        let message = I18n.t('messages.try_again');
                        if (error.responseJSON && error.responseJSON.message) {
                            message = error.responseJSON.message;
                        }
                        swal(I18n.t('messages.error'), message, 'error');
                    }
                });
                info.el.style.borderColor = 'red';

                $('#m_modal_event').modal();
            }
        });

        calendar.render();
    });

    $(document).on("click", ".open-modal-event", function () {
        var eventId            = $(this).data('id');
        var eventTitle         = $(this).data('title');
        var eventDesc          = $(this).data('desc');
        var eventDatetime      = $(this).data('datetime');
        var eventType          = $(this).data('type');
        var eventLocation      = $(this).data('location');
        var eventUrl           = $(this).data('url');
        var eventUsers         = $(this).data('users');
        if(eventId){
            $("#titleModalLabel").text('EDITAR EVENTO');
            document.getElementById('btn-event-delete').style.display = 'block';
        }else{
            $("#titleModalLabel").text('NUEVO EVENTO');
            document.getElementById('btn-event-delete').style.display = 'none';
        }

        fillEventForm(eventId, eventTitle, eventDesc, eventDatetime, eventType, eventLocation, eventUrl, eventUsers);
        console.log(eventId);

    });

    $(document).on("click", ".open-modal-agreement", function (){
        var eventId            = $(this).data('id');
        var eventAgreements    = $(this).data('agreements');
        $("#titleModalLabel").text('ACUERDOS');

        $(".modal-body #event_id").val(eventId);
        $(".modal-body #event_agreements").val(eventAgreements);
    });

    function fillEventForm(eventId, eventTitle, eventDesc, eventDatetime, eventType, eventLocation, eventUrl, eventUsers){
        $(".modal-body #event_id").val(eventId);
        $(".modal-body #event_title").val(eventTitle);
        $(".modal-body #event_description").val(eventDesc);
        $(".modal-body #event_date_time").val(eventDatetime);
        $(".modal-body #event_type_select").val(eventType);
        $(".modal-body #event_location").val(eventLocation);
        $(".modal-body #event_url").val(eventUrl);
        $("#eventUsers").val(eventUsers);

        $('#event_type_select').trigger('change');
        $('#eventUsers').trigger('change');
    }

    window.displayFieldByType = function(id_p, id_v, elementValue) {
        if(elementValue.value === 'PRESENCIAL'){
            document.getElementById(id_p).style.display = 'block';
            document.getElementById(id_v).style.display = 'none';
        }else if(elementValue.value === 'VIRTUAL'){
            document.getElementById(id_v).style.display = 'block';
            document.getElementById(id_p).style.display = 'none';
        }else{
            document.getElementById(id_v).style.display = 'none';
            document.getElementById(id_p).style.display = 'none';
        }
    };

    window.deleteEvent = function(event) {
        let authenticityToken = $('[name="csrf-token"]')[0] && $('[name="csrf-token"]')[0].content;
        swal({
            title: '¿Desea eliminar este evento?',
            buttons: {
                cancel: I18n.t('messages.cancel'),
                confirm: I18n.t('messages.delete')
            }
        }).then((isConfirmed) => {
            if (isConfirmed) {
                $.ajax({
                    url: 'delete_event/'+event.value,
                    data: {authenticity_token: authenticityToken},
                    type: 'DELETE',
                    dataType: 'json',
                    success: function (data) {
                        swal({
                            title: I18n.t('messages.done'),
                            text: I18n.t('messages.deleted'),
                            type: 'success'
                        });
                        window.location.href = 'events';

                    },
                    error: function (error) {
                        let message = I18n.t('messages.try_again');
                        if (error.responseJSON && error.responseJSON.message) {
                            message = error.responseJSON.message;
                        }
                        swal(I18n.t('messages.error'), message, 'error');
                    }
                });
            }
        });
    }

    window.finishEvent = function(event) {
        let authenticityToken = $('[name="csrf-token"]')[0] && $('[name="csrf-token"]')[0].content;
        swal({
            title: '¿Desea FINALIZAR este evento?',
            buttons: {
                cancel: I18n.t('messages.cancel'),
                confirm: I18n.t('messages.confirm')
            }
        }).then((isConfirmed) => {
            if (isConfirmed) {
                $.ajax({
                    url: 'finish_event/'+event.value,
                    data: {authenticity_token: authenticityToken},
                    type: 'PUT',
                    dataType: 'json',
                    success: function (data) {
                        swal({
                            title: I18n.t('messages.done'),
                            text: I18n.t('messages.deleted'),
                            type: 'success'
                        });
                        window.location.href = 'events';
                    },
                    error: function (error) {
                        let message = I18n.t('messages.try_again');
                        if (error.responseJSON && error.responseJSON.message) {
                            message = error.responseJSON.message;
                        }
                        swal(I18n.t('messages.error'), message, 'error');
                    }
                });
            }
        });
    }
});