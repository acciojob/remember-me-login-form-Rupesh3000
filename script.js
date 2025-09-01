//your JS code here. If required.
const submitBtn = document.getElementById("submit");

const checkBox = document.getElementById("checkbox");

const userName = document.getElementById("username");
const Password = document.getElementById("password");

const existingBtn = document.getElementById("existing");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let trimUserName = userName.value.trim("");
  let trimPassword = Password.value.trim("");

  if (!trimPassword.length > 0 && !trimUserName.length > 0) {
    alert("required all feild");
  } else {
    if (!checkBox.checked) {
      window.localStorage.clear();
      alert(`Logged in as ${userName.value}`);
    }

    if (checkBox.checked) {
      window.localStorage.setItem("username", `${userName.value}`);
      window.localStorage.setItem("password", `${Password.value}`);
      alert(`Logged in as ${userName.value}`);
    }
  }
});

existingBtn.addEventListener("click", () => {
  alert(`Logged in as ${window.localStorage.getItem("username")}`);
});

window.addEventListener("load", () => {
  if (window.localStorage.getItem("username")) {
    existingBtn.style.display = "block";
  }
});
