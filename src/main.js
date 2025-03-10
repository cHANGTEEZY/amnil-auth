const checkIfUserIsLoggedIn = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "http://localhost:5173/signin.html";
  }
};

checkIfUserIsLoggedIn();

const logout = document.getElementById("logout");

logout.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.reload();
});
