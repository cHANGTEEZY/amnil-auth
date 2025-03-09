import signInFormData from "./getSignInData.js";
import authenticate from "../utils/authenticate.js";

const signIn = document.getElementById("submit");

signIn.addEventListener("click", async () => {
  const formData = signInFormData();
  console.log(await authenticate(formData));
});
