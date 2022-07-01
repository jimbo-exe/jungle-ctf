const popupContainer = document.querySelector(".popup-container");
const para = document.querySelectorAll(".para");
const loginButton = document.querySelector(".btn-login");

const popConvert = function () {
  popupContainer.classList.toggle("background-red");
  para[0].classList.toggle("hidden");
  para[1].classList.toggle("hidden");
  setTimeout(popout, 10000);
};

// popConvert();

const popout = function () {
  popupContainer.classList.toggle("hidden");
};

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id
  document.getElementById("first-placeholder").innerHTML = days + "d ";

  document.getElementById("second-placeholder").innerHTML = hours + "h ";

  document.getElementById("third-placeholder").innerHTML = minutes + "m ";

  document.getElementById("fourth-placeholder").innerHTML = seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
