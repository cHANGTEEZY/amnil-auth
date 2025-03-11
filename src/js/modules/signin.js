import signInFormData from "./getSignInData.js";
import authenticate from "../utils/authenticate.js";

const signIn = document.getElementById("submit");
const errorDiv = document.getElementById("signin-error");
errorDiv.innerHTML = "";
const token = localStorage.getItem("token");
if (token) {
  window.location.href = "/";
}

signIn.addEventListener("click", async (e) => {
  e.preventDefault();
  signIn.disabled = true;
  signIn.innerText = "Logging in...";

  try {
    const formData = signInFormData();
    if (!formData) {
      signIn.disabled = false;
      signIn.innerText = "Log in";
      return;
    }

    const data = await authenticate(formData);
    errorDiv.innerText = data;
  } catch (err) {
    console.error(err.message);
  } finally {
    signIn.disabled = false;
    signIn.innerText = "Log in";
  }
});
