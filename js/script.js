const emailBtn = document.getElementById("email-btn");
const themeBtn = document.getElementById("theme-btn");

function changeTheme() {
  document.documentElement.classList.toggle("dark");
}
function TestEmail() {
  const email = document.getElementById("email-input").value;
  if (email.endsWith("@gmail.com" || "@yahoo.com") === true) {
    alert("valid");
  } else {
    alert("invalid");
  }
}

themeBtn.addEventListener("click", changeTheme);
emailBtn.addEventListener("click", TestEmail);
