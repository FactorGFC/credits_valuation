import $ from 'jquery';
import I18n from 'i18n-js';
import 'javascripts/i18n/translations';
I18n.locale = window.I18n.locale;


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
});