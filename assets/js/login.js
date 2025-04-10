document.addEventListener("DOMContentLoaded", function () {
 
  // Обробка події надсилання форми логіну
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = loginForm.elements["email"].value.trim();
    const password = loginForm.elements["password"].value;
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
    console.log({ email, password });
    alert("Login successful!");
    loginForm.reset();
  });

  // Обробка кліку по кнопці "Login with Google"
  const googleLoginBtn = document.getElementById("googleLoginBtn");
  googleLoginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Login with Google is not implemented in this demo.");
  });

  // Обробка кліку по кнопці "Login with Facebook"
  const facebookLoginBtn = document.getElementById("facebookLoginBtn");
  facebookLoginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Login with Facebook is not implemented in this demo.");
  });
});