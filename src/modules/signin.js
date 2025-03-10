import signInFormData from "./getSignInData.js";
import authenticate from "../utils/authenticate.js";

const signIn = document.getElementById("submit");

const token = localStorage.getItem("token");
if (token) {
  window.location.href = "http://127.0.0.1:5500/";
}

signIn.addEventListener("click", async (e) => {
  e.preventDefault();
  signIn.disabled = true;
  signIn.innerText = "Logging in...";
  try {
    const formData = signInFormData();
    if (formData) {
      await authenticate(formData);
    }
  } catch (err) {
    console.error(err.message);
  } finally {
    signIn.disabled = false;
    signIn.innerText = "Log in";
  }
});
