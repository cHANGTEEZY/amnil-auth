const checkIfUserIsLoggedIn = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "http://127.0.0.1:5500/src/pages/signin.html";
  }
};

checkIfUserIsLoggedIn();

const logout = document.getElementById("logout");

logout.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.reload();
});
