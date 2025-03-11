const validateSignInData = (email, password) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const errors = [];

  if (!emailRegex.test(email)) {
    errors.push("enter a valid email");
  }

  if (password.trim() === "") {
    errors.push("enter password");
  }

  return errors.length > 0 ? errors : "";
};

export default validateSignInData;
