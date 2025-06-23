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

const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    modalImage.src = item.src;
    modalImage.alt = item.alt;
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    closeModal.focus();
  });

  // Hap modalin edhe me tastet Enter ose Space për aksesueshmëri
  item.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      item.click();
    }
  });
});

// Mbyll modalin me klik në buton
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
});

// Mbyll modalin me tastin Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.style.display === 'flex') {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
  }
});




