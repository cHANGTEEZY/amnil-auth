const validatePassword = (email, password, confirmPassword) => {
  const minLength = 5;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.{5,}$)(?=.*[A-Z]).*$/;

  const errors = [];

  if (!emailRegex.test(email)) {
    errors.push("Enter valid email");
  }
  if (password.length < minLength) {
    errors.push("Password must be at least 5 characters long.");
  }
  if (!passwordRegex.test(password)) {
    errors.push(
      "Password must contain at least one uppercase letter and minimum length of 5."
    );
  }

  if (password !== confirmPassword) {
    errors.push("Passwords do not match.");
  }

  return errors.length > 0 ? errors : "valid data";
};

export default validatePassword;
