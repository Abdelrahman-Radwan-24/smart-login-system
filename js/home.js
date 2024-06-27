let userName = localStorage.getItem("userName");
let userNameWrapper = document.getElementById("userNameWrapper");
let logBtn = document.getElementById("logBtn");

userNameWrapper.innerHTML = userName;

logBtn.addEventListener("click", function () {
  localStorage.removeItem("userName");
});
