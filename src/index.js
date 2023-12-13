import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

window.onload = () => {
  const hiddenDiv = document.getElementById("hidden");
  const myButton = document.getElementById('myButton');
  myButton.addEventListener("click", () => {
    hiddenDiv.style.display = "block";
  });
};