import createUser from "../utils/createUser.js";
import checkUserExist from "../utils/checkUserExist.js";
import signUpFormData from "./getSignupData.js";

const submit = document.getElementById("submit");
const signupError = document.getElementById("signup-error");
signupError.innerHTML = "";

const token = localStorage.getItem("token");
if (token) {
  window.location.href = "/";
}

submit.addEventListener("click", async (e) => {
  e.preventDefault();
  submit.disabled = true;
  submit.innerText = "Creating User...";

  const formData = signUpFormData();
  if (!formData) {
    submit.disabled = false;
    submit.innerText = "Sign Up";
    return;
  }

  try {
    const existingUser = await checkUserExist(formData.email);
    if (existingUser) {
      document.getElementById("email-error").innerText = "User already exists.";
      submit.disabled = false;
      submit.innerText = "Sign Up";
      return;
    }

    const data = await createUser(formData);
    signupError.innerHTML = data;
    window.location.href = "/src/html/signin.html";
  } catch (error) {
    console.error("Error during signup:", error);
    document.getElementById("email-error").innerText =
      error.message || "Something went wrong.";
  } finally {
    submit.disabled = false;
    submit.innerText = "Sign Up";
  }
});
