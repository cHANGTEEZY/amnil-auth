import createUser from "../utils/createUser.js";
import checkUserExist from "../utils/checkUserExist.js";
import signUpFormData from "./getSignupData.js";

const submit = document.getElementById("submit");

const token = localStorage.getItem("token");
if (token) {
  window.location.href = "http://localhost:5173";
}

submit.addEventListener("click", async (e) => {
  e.preventDefault();
  submit.disabled = true;
  submit.innerText = "Creating User";

  const formData = signUpFormData();
  if (!formData) {
    alert("Invalid form data. Please fill out all required fields.");
    submit.disabled = false;
    submit.innerText = "Sign Up";
    return;
  }

  try {
    const existingUser = await checkUserExist(formData.email);
    if (existingUser) {
      alert("User with the given email already exists.");
      submit.disabled = false;
      submit.innerText = "Sign Up";
      return;
    }

    const createUserResponse = await createUser(formData);
    alert(createUserResponse);
    window.location.href = "http://localhost:5173/signin.html";
  } catch (error) {
    console.error("Error during signup:", error);
    alert(error.message || "Something went wrong. Please try again.");
  } finally {
    submit.disabled = false;
    submit.innerText = "Sign Up";
  }
});
