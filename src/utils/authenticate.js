const authenticate = async (formData) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/user?email=${encodeURIComponent(
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
      throw new Error("Something went wrong while checking credentials.");
    }

    const data = await response.json();
    if (data.length === 0) {
      throw new Error("User with given credentials does not exist");
    }
    localStorage.setItem("token", data[0].id);
    window.location.href = "/";
  } catch (error) {
    alert(error.message);
    console.error(error.message || "Something went wrong");
  }
};

export default authenticate;
