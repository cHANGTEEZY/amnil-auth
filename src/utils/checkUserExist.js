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

    if (!response.ok) {
      throw new Error(`Failed to check user existence: ${response.statusText}`);
    }
    const data = await response.json();
    return data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Error checking user existence. Please try again.");
  }
};

export default checkUserExist;
