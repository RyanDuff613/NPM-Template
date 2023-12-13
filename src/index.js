// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// jQuery
// $(document).ready(function() {
//   $('#myButton').click(function(event) {
//     event.preventDefault();
//     $('#hidden').show();

//   });
// });

window.onload = () => {
  const hiddenDiv = document.getElementById("hidden");
  const myButton = document.getElementById('myButton');
  myButton.addEventListener("click", () => {
    hiddenDiv.style.display = "block";
  });
}