const authenticate = async (formData) => {
  const URL = "http://localhost:3000/user";

  try {
    const response = await fetch(
      `${URL}?email=${encodeURIComponent(
        formData.email
      )}&password=${encodeURIComponent(formData.password)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("User with given credentials does not exist");
    }

    const data = await response.json();
    alert("Logging in");
    localStorage.setItem("userId", data.id);
  } catch (error) {
    alert(error.message);
    console.error(error.message || "Something went wrong");
  }
};

export default authenticate;
