import validatePassword from "../utils/validate";

const signUpFormData = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  const errors = validatePassword(email, password, confirmPassword);

  if (Array.isArray(errors) && errors.length > 0) {
    alert(errors.join("\n"));
    return;
  }

  return { email, password, confirmPassword };
};

export default signUpFormData;
