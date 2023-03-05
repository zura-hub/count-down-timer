
const countDownDate = new Date("Mar 11, 2023 00:00:00").getTime();


const x = setInterval(function() {

  let now = new Date().getTime();


  let distance = countDownDate - now;


  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

 
  document.querySelector(".one").innerHTML = days;
  document.querySelector(".two").innerHTML = hours;
  document.querySelector(".three").innerHTML = minutes;
  document.querySelector(".four").innerHTML = seconds;

 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);


