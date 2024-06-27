let loginForm = document.getElementById("loginForm");
let signEmail = document.getElementById("signEmail");
let signPassword = document.getElementById("signPassword");
let alertLogin = document.getElementById("alertLogin");
let alertSuccess = document.getElementById("alertSuccess");

let allUsers = [];

if (localStorage.getItem("allUsers") != null) {
  allUsers = JSON.parse(localStorage.getItem("allUsers"));
}

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  login();
});

function login() {
  let newLogin = {
    email: signEmail.value,
    password: signPassword.value,
  };
  if (isLoginValid(newLogin)) {
    alertSuccess.classList.replace("d-none", "d-block");
    alertLogin.classList.replace("d-block", "d-none");
    setTimeout(function () {
      window.location= "./home.html";
    }, 3000);
  } else {
    alertLogin.classList.replace("d-none", "d-block");
    alertSuccess.classList.replace("d-block", "d-none");
  }
}

function isLoginValid(newLogin) {
  for (let i = 0; i < allUsers.length; i++) {
    if (
      allUsers[i].email.toLowerCase() == newLogin.email.toLowerCase() &&
      allUsers[i].password == newLogin.password
    ) {
      localStorage.setItem("userName", allUsers[i].name);
      return true;
    }
  }
}
