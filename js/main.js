

// const config = require('./config.js');
//Sending form to my gmail


const getSendersEmail = document.getElementById("email").value;
const getSendersName = document.getElementById("name").value;
const getSendersPhone = document.getElementById("phone").value;
const getSendersSubject = document.getElementById("subject").value;
const getSendersMessage = document.getElementById("message").value;

function sendEmail() {
  Email.send({
    // SecureToken: "",
    Host: Host,
    Username: Username,
    Password: Password,
    To: "luka316daniel@gmail.com",
    From: getSendersEmail,
    Subject: "New Contact from My Portfolio Website",
    Body:
      "name: " +
      getSendersName +
      "<br> Email: " +
      getSendersEmail +
      "<br> Phnone Number: " +
      getSendersPhone +
      "<br> Subject: " +
      getSendersSubject +
      "<br> Message: " +
      getSendersMessage,
  }).then(() => alert("Thank you, Message send succefully!"));
}

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // Typing animations scripts
  var typed = new Typed(".typing", {
    strings: [
      "Software Developer",
      "Blogger",
      "Freelancer",
      "Blockchain developer",
      "Youtuber",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Software Developer",
      "Blogger",
      "Freelancer",
      "Blockchain developer",
      "Youtuber",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // carousel script
  $(".carousel").owlCarousel({
    items: 3,
    autoplay: true,
    margin: 20,
    loop: true,
    autoplayTimeOut: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
