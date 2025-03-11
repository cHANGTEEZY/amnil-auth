function renderAuthButtons() {
  const buttonContainer = document.getElementById("auth-buttons");

  if (!buttonContainer) {
    console.log("Pareat not found");
    return;
  }

  if (localStorage.getItem("token")) {
    buttonContainer.innerHTML = '<button id="logout-button">Logout</button>';
    document.getElementById("logout-button").addEventListener("click", () => {
      localStorage.removeItem("token");
      renderAuthButtons();
      window.location.href = "/src/html/signin.html";
    });
  } else {
    buttonContainer.innerHTML = `
      <button id="login-button">Login</button>
      <button id="signup-button">Signup</button>
    `;

    document.getElementById("login-button").addEventListener("click", () => {
      window.location.href = "/src/html/signin.html";
    });

    document.getElementById("signup-button").addEventListener("click", () => {
      window.location.href = "/src/html/signup.html";
    });
  }
}

renderAuthButtons();
