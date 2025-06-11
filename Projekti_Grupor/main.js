// Scroll to section smoothly
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Dark mode toggle
document.getElementById("toggleDarkMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    document.getElementById("formMessage").textContent = "Ju lutem plotësoni të gjitha fushat.";
    return;
  }

  document.getElementById("formMessage").textContent = "Faleminderit! Do ju kontaktojmë së shpejti.";
  this.reset();
});
