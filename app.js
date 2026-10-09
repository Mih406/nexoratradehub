app.js 
const authForm = document.querySelector("#authForm");
const authMessage = document.querySelector("#authMessage");

if (authForm) {
  authForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (authMessage) {
      authMessage.textContent =
        "Account registration is not connected yet. Please try again later.";
    }
  });
}
