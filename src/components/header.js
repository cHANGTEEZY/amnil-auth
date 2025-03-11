function renderAuthButtons() {
  const authContainer = document.getElementById("auth-buttons");

  if (localStorage.getItem("token")) {
    authContainer.innerHTML = '<button id="logout-button">Logout</button>';
    document.getElementById("logout-button").addEventListener("click", () => {
      localStorage.removeItem("token");
      renderAuthButtons();
      window.location.href = "login.html";
    });
  } else {
    authContainer.innerHTML = `
          <button id="login-button">Login</button>
          <button id="signup-button">Signup</button>
        `;
    document.getElementById("login-button").addEventListener("click", () => {
      window.location.href = "http://localhost:5173/login.html";
    });
    document.getElementById("signup-button").addEventListener("click", () => {
      window.location.href = "http://localhost:5173/signup.html";
    });
  }
}

renderAuthButtons();
