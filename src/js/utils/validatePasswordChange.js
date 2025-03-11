const validatePasswordChange = (
  email,
  oldPassword,
  newPassword,
  confirmPassword
) => {
  const minLength = 5;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.{5,}$)(?=.*[A-Z]).*$/;

  const errors = [];

  if (!emailRegex.test(email)) {
    errors.push("Enter valid email");
  }

  if (oldPassword.length < minLength) {
    errors.push("Old password must be at least 5 characters long.");
  }

  if (newPassword.length < minLength) {
    errors.push("New password must be at least 5 characters long.");
  }

  if (!passwordRegex.test(newPassword)) {
    errors.push(
      "New password must contain at least one uppercase letter and minimum length of 5."
    );
  }

  if (newPassword !== confirmPassword) {
    errors.push("New passwords do not match.");
  }

  if (oldPassword === newPassword) {
    errors.push("New password cannot be the same as the old password.");
  }

  return errors.length > 0 ? errors : "valid data";
};

export default validatePasswordChange;
