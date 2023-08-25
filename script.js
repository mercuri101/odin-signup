const pswCheck = document.querySelector(".psw-check");
const pswField = document.querySelector("#password");
const pswConfirm = document.querySelector("#password_confirm");

pswConfirm.addEventListener("input", () => {
  let password1 = pswField.value;
  let password2 = pswConfirm.value;

  if (password1 == password2) {
    pswField.classList.remove("error");
    pswConfirm.classList.remove("error");
    pswCheck.textContent = "";
  } else {
    pswField.classList.add("error");
    pswConfirm.classList.add("error");
    pswCheck.textContent = "*Passwords do not match";
  }
})