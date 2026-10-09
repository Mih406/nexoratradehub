app.js

function handleAuth(event) {
  event.preventDefault();

  const authMessage = document.querySelector("#authMessage");

  if (authMessage) {
    authMessage.textContent =
      "Account registration is not connected yet. Please try again later.";
  }
}

function toggleAuth() {
  const authMessage = document.querySelector("#authMessage");

  if (authMessage) {
    authMessage.textContent =
      "Sign-in is not connected yet. Please try again later.";
  }
}
