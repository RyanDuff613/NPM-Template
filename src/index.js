import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#myButton').click(function(event) {
    event.preventDefault();
    $('#hidden').show();
  
  });
});