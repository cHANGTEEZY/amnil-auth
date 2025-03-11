import validatePassword from "../utils/validateSignUpData.js";

const signUpFormData = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  const errorsDiv = document.getElementById("errors");
  errorsDiv.innerHTML = "";

  const errors = validatePassword(email, password, confirmPassword);
  const span = document.createElement("span");
  span.innerHTML = errors;

  if (errors.length > 0) {
    errorsDiv.appendChild(span);
    return;
  }

  return { email, password, confirmPassword };
};

export default signUpFormData;
