let registerForm = document.getElementById("registerForm");
let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let passInput = document.getElementById("passInput");
let validName = document.getElementById("validName");
let validEmail = document.getElementById("validEmail");
let validPass = document.getElementById("validPass");
let emailExist = document.getElementById("emailExist");
let successLogin = document.getElementById("successLogin");

let allUsers = [];

if (localStorage.getItem("allUsers") != null) {
  allUsers = JSON.parse(localStorage.getItem("allUsers"));
}

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (chekValidAllInputs()) {
    addUsers();
  }
});

function addUsers() {
  let newUser = {
    name: nameInput.value,
    email: emailInput.value,
    password: passInput.value,
  };
  if (isAlreadyExist(newUser)) {
    emailExist.classList.replace("d-none", "d-block");
  } else {
    emailExist.classList.replace("d-block", "d-none");
    successLogin.classList.replace("d-none", "d-block");
    setTimeout(function () {
      window.location.href = "./index.html";
    }, 3000);
    allUsers.push(newUser);
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
  }
}

function isAlreadyExist(newUser) {
  for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].email.toLowerCase() == newUser.email.toLowerCase()) {
      return true;
    }
  }
}

function validationInputs(regex, element, alert) {
  let pattern = regex;

  if (pattern.test(element.value)) {
    alert.classList.replace("d-block", "d-none");
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    return true;
  } else {
    alert.classList.replace("d-none", "d-block");
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    return false;
  }
}

function chekValidAllInputs() {
  if (
    validationInputs(/^[a-zA-Z0-9$_]{2,}$/, nameInput, validName) == true &&
    validationInputs(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      emailInput,
      validEmail
    ) == true &&
    validationInputs(
      /^(?=.*[A-Z])(?=.*[\W_])(?=.*\d).*$/,
      passInput,
      validPass
    ) == true
  ) {
    return true;
  } else {
    return false;
  }
}
