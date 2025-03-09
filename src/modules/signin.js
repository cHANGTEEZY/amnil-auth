import signInFormData from "./getSignInData.js";
import authenticate from "../utils/authenticate.js";

const signIn = document.getElementById("submit");

signIn.addEventListener("click", async (e) => {
  e.preventDefault();
  const formData = signInFormData();
  if (formData) {
    authenticate(formData);
  }
});
