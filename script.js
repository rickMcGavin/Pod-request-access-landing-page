const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const emailInput = document.querySelector(".email");
const button = document.querySelector(".button");
const errorMessage = document.querySelector(".error-message");

button.addEventListener("click", () => {
  const isEmailEmpty = emailInput.value.trim() === "";
  const isEmailValid = EMAIL_REGEX.test(emailInput.value);
  const isValid = !isEmailEmpty && isEmailValid;
  const errorClassName = "email--error";
  if (!isValid) {
    emailInput.classList.add(errorClassName);
    if (isEmailEmpty) {
      errorMessage.textContent = "Oops! Please add your email";
    } else {
      errorMessage.textContent = "Oops! Please check your email";
    }
    errorMessage.classList.remove("hidden");
  } else {
    emailInput.classList.remove(errorClassName);
    errorMessage.classList.add("hidden");
  }
});
