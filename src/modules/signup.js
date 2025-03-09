import createUser from "../utils/createUser.js";
import checkUserExist from "../utils/checkUserExist.js";
import signUpFormData from "./getSignupData.js";

const submit = document.getElementById("submit");

submit.addEventListener("click", async (e) => {
  e.preventDefault();

  const formData = signUpFormData();

  if (formData) {
    const userExist = await checkUserExist(formData.email);
    console.log("boolean", userExist);

    if (userExist) {
      alert("User with the given email already exists");
      return;
    }
    try {
      const response = await createUser(formData);
      console.log(response);
      // window.location.href = "http://127.0.0.1:5500/src/pages/signin.html";
    } catch (error) {
      alert(error.message || "Something went wrong");
    }
  }
});
