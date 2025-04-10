document.addEventListener("DOMContentLoaded", function () {
  
  // Обробка відправлення форми User Settings
  const userSettingsForm = document.getElementById("userSettingsForm");
  userSettingsForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const firstName = document.getElementById("first_name").value;
    const lastName = document.getElementById("last_name").value;
    alert("User Settings saved!");
    console.log({ username, email, firstName, lastName });
  });

  // Обробка відправки форми Contact Settings
  const contactSettingsForm = document.getElementById("contactSettingsForm");
  contactSettingsForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const country = document.getElementById("country").value;
    alert("Contact Settings saved!");
    console.log({ address, city, country });
  });

  // Логіка для зміни фотографії профілю
  const changePhotoBtn = document.getElementById("changePhotoBtn");
  const photoInput = document.getElementById("photoInput");
  const profileImageDisplay = document.getElementById("profileImageDisplay");

  changePhotoBtn.addEventListener("click", function () {
    photoInput.click();
  });

  photoInput.addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        profileImageDisplay.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
});