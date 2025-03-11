function renderAuthButtons() {
  const authContainer = document.getElementById("auth-buttons");

  // Check if the auth container exists before proceeding
  if (!authContainer) {
    console.warn("Auth container not found in the DOM");
    return;
  }

  if (localStorage.getItem("token")) {
    authContainer.innerHTML = '<button id="logout-button">Logout</button>';
    document.getElementById("logout-button").addEventListener("click", () => {
      localStorage.removeItem("token");
      renderAuthButtons();
      window.location.href = "/src/html/signin.html"; // Updated path
    });
  } else {
    authContainer.innerHTML = `
      <button id="login-button">Login</button>
      <button id="signup-button">Signup</button>
    `;

    document.getElementById("login-button").addEventListener("click", () => {
      window.location.href = "/src/html/signin.html"; // Updated path
    });

    document.getElementById("signup-button").addEventListener("click", () => {
      window.location.href = "/src/html/signup.html"; // Updated path
    });
  }
}

// Only run this if we're in a browser environment
if (typeof window !== "undefined") {
  // Run after DOM is fully loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderAuthButtons);
  } else {
    renderAuthButtons();
  }
}
