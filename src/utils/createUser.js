const createUser = async (formData) => {
  try {
    const response = await fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error("Failed creating user", data);
    }

    return data;
  } catch (error) {
    throw new Error(error || "Something went wrong");
  }
};

export default createUser;
