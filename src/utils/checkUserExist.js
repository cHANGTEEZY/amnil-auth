const checkUserExist = async (email) => {
  try {
    const response = await fetch(
      `http://localhost:3000/user?email=${encodeURIComponent(email)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      if (data.length > 0) {
        console.log("User exists:", data);
        return true;
      } else {
        console.log("User does not exist");
        return false;
      }
    } else {
      console.error("Failed to check user existence:", response.statusText);
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};

export default checkUserExist;
