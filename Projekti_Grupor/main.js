// Toggle dark mode and change icon
const toggleDarkModeBtn = document.getElementById("toggleDarkMode");

toggleDarkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggleDarkModeBtn.textContent = "☀️";
  } else {
    toggleDarkModeBtn.textContent = "🌙";
  }
});

// Scroll smoothly to contact section if any button with id contactBtn is clicked
const contactBtn = document.getElementById("contactBtn");

contactBtn.addEventListener("click", () => {
  // As there's no contact section in home, navigate to contact page
  window.location.href = "contact.html";
});

// Butoni për të shkuar te faqja e shërbimeve
const servicesBtn = document.getElementById("servicesBtn");

servicesBtn.addEventListener("click", () => {
  window.location.href = "services.html";
});

<div style="height: 300px;"></div>

