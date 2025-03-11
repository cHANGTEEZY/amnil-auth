import validateSignInData from "../utils/validateSigninData";

const signInFormData = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const errors = validateSignInData(email, password);
  console.log(errors);
  if (Array.isArray(errors) && errors.length > 0) {
    alert(errors.join("\n"));
    return "invalid data";
  }

  return { email, password };
};

export default signInFormData;
