const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br> Email:${email.value}<br> Phone Number:${phoneNumber.value}<br> Subject: ${subject.value}<br> Message: ${message.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "jinghann26@gmail.com",
    Password: "E147A25804658D1CD8C5C9F07EE44FB2019A",
    To: "jinghann26@gmail.com",
    From: "jinghann26@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  });
}

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }
    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }

      if (item.id === "email") {
        checkEmail();
      }
    });
  }

  checkEmail();
}
function checkEmail() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const errorTxtEmail = document.querySelector(".error-txt.email");

  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != "") {
      errorTxtEmail.innerText = "Enter a valid Email Address";
    } else {
      errorTxtEmail.innerText = "Email Address cannot be blank";
    }
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if (
    !fullName.classList.contains("error") &&
    !email.classList.contains("error") &&
    !phoneNumber.classList.contains("error") &&
    !subject.classList.contains("error") &&
    !message.classList.contains("error")
  ) {
    sendEmail();

    form.reset();
    return false;
  }
});
