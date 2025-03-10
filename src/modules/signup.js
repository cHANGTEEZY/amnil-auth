import createUser from "../utils/createUser.js";
import checkUserExist from "../utils/checkUserExist.js";
import signUpFormData from "./getSignupData.js";

const submit = document.getElementById("submit");

const token = localStorage.getItem("token");
if (token) {
  window.location.href = "http://127.0.0.1:5500/";
}

submit.addEventListener("click", async (e) => {
  e.preventDefault();
  submit.disabled = true;
  submit.innerText = "Creating User";
  const formData = signUpFormData();

  if (!formData) {
    alert("Invalid form data. Please fill out all required fields.");
    return;
  }
  try {
    const userExist = await checkUserExist(formData.email);
    if (userExist) {
      alert("User with the given email already exists.");
      return;
    }
    alert(await createUser(formData));
    window.location.href = "http://127.0.0.1:5500/src/pages/signin.html";
  } catch (error) {
    console.error("Error during signup:", error);
    alert(error.message || "Something went wrong. Please try again.");
  } finally {
    submit.disabled = false;
    submit.innerText = "Sign Up";
  }
});
