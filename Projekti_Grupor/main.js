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

// Dark mode toggle
const toggleDarkModeBtn = document.getElementById('toggleDarkMode');
toggleDarkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  // Ndrysho ikonën sipas gjendjes
  if (document.body.classList.contains('dark-mode')) {
    toggleDarkModeBtn.textContent = '☀️';
  } else {
    toggleDarkModeBtn.textContent = '🌙';
  }
});

// Smooth scroll për butonin “Na Kontaktoni”
const contactBtn = document.getElementById('contactBtn');
contactBtn.addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// Formulari me validim dhe feedback
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Merr vlerat e inputeve
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validim i thjeshtë
  if (name === '' || email === '' || message === '') {
    formMessage.textContent = 'Ju lutemi plotësoni të gjitha fushat.';
    formMessage.style.color = 'red';
    return;
  }

  if (!validateEmail(email)) {
    formMessage.textContent = 'Email-i nuk është i saktë.';
    formMessage.style.color = 'red';
    return;
  }

  // Simulo dërgimin (mund të zëvendësohet me dërgim real me fetch/ajax)
  formMessage.textContent = 'Dërgimi në proces...';
  formMessage.style.color = 'black';

  setTimeout(() => {
    formMessage.textContent = 'Faleminderit për mesazhin! Do t’ju kontaktojmë së shpejti.';
    formMessage.style.color = 'green';
    contactForm.reset();
  }, 1500);
});

function validateEmail(email) {
  // Pattern i thjeshtë për email
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}

