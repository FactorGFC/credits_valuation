import $ from 'jquery';
import I18n from 'i18n-js';
import 'javascripts/i18n/translations';
I18n.locale = I18n.locale;

$(document).on('turbolinks:load', function () {
    function tableCollapse(){
        alert('Hello world');
    }

    /*let tableCollapse = (cell) => {
        console.log('Hola');

        var row         = cell.parentElement;
        var target_row  = row.parentElement.children[row.rowIndex + 1];

        if (target_row.style.display === 'table-row') {
            cell.innerHTML = '+';
            target_row.style.display = 'none';
        } else {
            cell.innerHTML = '-';
            target_row.style.display = 'table-row';
        }
    };*/

    // Collapse nested table
    /*$("#collapseButton").on('click', function(cell){

        var row         = cell.parentElement;
        var target_row  = row.parentElement.children[row.rowIndex + 1];

        if (target_row.style.display === 'table-row') {
            cell.innerHTML = '+';
            target_row.style.display = 'none';
        } else {
            cell.innerHTML = '-';
            target_row.style.display = 'table-row';
        }
    });*/


});