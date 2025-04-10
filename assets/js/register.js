document.addEventListener("DOMContentLoaded", function () {
    
  // Обробка відправлення форми реєстрації
    const registerForm = document.getElementById("registerForm");
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const firstName = registerForm.elements["first_name"].value.trim();
      const lastName = registerForm.elements["last_name"].value.trim();
      const email = registerForm.elements["email"].value.trim();
      const password = registerForm.elements["password"].value;
      const passwordRepeat = registerForm.elements["password_repeat"].value;
      
      if (password !== passwordRepeat) {
        alert("Passwords do not match!");
        return;
      }
      
      // Логуємо дані в консоль (у реальному додатку тут можна виконати відправку на сервер)
      console.log({ firstName, lastName, email, password });
      alert("Registration successful!");
      registerForm.reset();
    });
    
    // Обробка кліка для реєстрації через Google
    const googleRegisterBtn = document.getElementById("googleRegisterBtn");
    googleRegisterBtn.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Google registration is not implemented in this demo.");
    });
    
    // Обробка кліка для реєстрації через Facebook
    const facebookRegisterBtn = document.getElementById("facebookRegisterBtn");
    facebookRegisterBtn.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Facebook registration is not implemented in this demo.");
    });
  });