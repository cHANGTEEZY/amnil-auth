import { BASE_URL } from "../global/baseApi";

// createUser.js
const createUser = async (formData) => {
  try {
    const response = await fetch(
      `https://delightful-persistent-fowl.glitch.me/users`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error("Failed creating user", data);
    }

    return "User Created Successfully";
  } catch (error) {
    throw new Error(error || "Something went wrong");
  }
};

export default createUser;
