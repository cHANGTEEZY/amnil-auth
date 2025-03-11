// Check if user is logged in
const checkIfUserIsLoggedIn = () => {
  const token = localStorage.getItem("token");
  const currentPath = window.location.pathname;
  if (
    !token &&
    !currentPath.includes("/signin.html") &&
    !currentPath.includes("/signup.html")
  ) {
    window.location.href = "/src/html/signin.html";
    return false;
  }
  return true;
};

if (checkIfUserIsLoggedIn()) {
  const logout = document.getElementById("logout");

  if (logout) {
    logout.addEventListener("click", () => {
      localStorage.removeItem("token");
      window.location.href = "/src/html/signin.html";
    });
  }
}
