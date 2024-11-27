const toggleButton = document.getElementById("darkModeToggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
  const isDarkMode = body.classList.toggle("bg-dark-mode");

  document.querySelectorAll(".navbar, .footer").forEach(element => {
    element.classList.toggle("navbar-dark-mode", isDarkMode);
    element.classList.toggle("footer-dark-mode", isDarkMode);
  });

  toggleButton.classList.toggle("btn-dark-mode", isDarkMode);
  toggleButton.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
});
