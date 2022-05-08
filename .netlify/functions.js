// const config = require('./config.js');
//Sending form to my gmail


import config from "./config";

// const Host = config.Host;
// const Username = config.Username;
// const Password = config.Password;


const getSendersEmail = document.getElementById("email").value;
const getSendersName = document.getElementById("name").value;
const getSendersPhone = document.getElementById("phone").value;
const getSendersSubject = document.getElementById("subject").value;
const getSendersMessage = document.getElementById("message").value;

function sendEmail() {
  Email.send({
    // SecureToken: "",
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