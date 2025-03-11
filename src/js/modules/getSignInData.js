import validateSignInData from "../utils/validateSigninData";

const signInFormData = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorsDiv = document.getElementById("errors");
  errorsDiv.innerHTML = "";

  const errors = validateSignInData(email, password);

  const span = document.createElement("span");
  span.innerHTML = errors;

  if (errors.length > 0) {
    errorsDiv.appendChild(span);
    return "Invalid input";
  }

  return { email, password };
};

export default signInFormData;
