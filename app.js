
const SUPABASE_URL = "https://ebmzrawwfaahjwdvpjtz.supabase.co";
const SUPABASE_KEY = "sb_publishable_8Wrm7mypNFLwjWzH6BsAaw_00eeqM9w";


const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

async function handleAuth(event) {
  event.preventDefault();

  const authMessage = document.querySelector("#authMessage");
  const email = document.querySelector("#email")?.value.trim();
  const password = document.querySelector("#password")?.value;
  const name = document.querySelector("#name")?.value.trim();

  const isSignUp =
    document.querySelector("#authSubmit")?.textContent
      .toLowerCase().includes("create");

  if (!authMessage || !email || !password) return;

  authMessage.textContent = "Please wait…";

  try {
    const result = isSignUp
      ? await supabaseClient.auth.signUp({
          email,
          password,
          options: { data: { full_name: name || "" } }
        })
      : await supabaseClient.auth.signInWithPassword({
          email,
          password
        });

    if (result.error) throw result.error;

    authMessage.textContent = isSignUp
      ? "Registration submitted. Check your email if verification is required."
      : "Sign-in successful.";

  } catch (error) {
    authMessage.textContent =
      error.message || "Authentication failed. Please try again.";
  }
}

function toggleAuth() {
  const authMessage = document.querySelector("#authMessage");
  const nameField = document.querySelector("#nameField");
  const authSubmit = document.querySelector("#authSubmit");
  const authToggle = document.querySelector("#authToggle");

  if (!authMessage || !authSubmit || !authToggle) return;

  const isSignIn = authSubmit.textContent.toLowerCase().includes("sign in");

  authSubmit.innerHTML = isSignIn
    ? 'Create account <span>→</span>'
    : 'Sign in <span>→</span>';

  if (nameField) nameField.style.display = isSignIn ? "" : "none";

  authMessage.textContent = "";

  authToggle.textContent = isSignIn
    ? "Already have an account? Sign in"
    : "Need an account? Create one";
}
