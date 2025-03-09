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
      const userData = await createUser(formData);
      alert("User created successfully", userData);
    } catch (error) {
      alert(error.message || "Something went wrong");
    }
  }
});
