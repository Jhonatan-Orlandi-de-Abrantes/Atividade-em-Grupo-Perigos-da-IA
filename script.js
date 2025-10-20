const menuBtn = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
menuBtn.addEventListener('click', () => {
  const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', String(!expanded));
  if (mobileNav.hasAttribute('hidden')) {
    mobileNav.removeAttribute('hidden');
    mobileNav.setAttribute('aria-hidden', 'false');
  } else {
    mobileNav.setAttribute('hidden', '');
    mobileNav.setAttribute('aria-hidden', 'true');
  }
});

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  const pressed = themeToggle.getAttribute('aria-pressed') === 'true';
  themeToggle.setAttribute('aria-pressed', String(!pressed));
  document.documentElement.toggleAttribute('data-theme-dark');
  themeToggle.textContent = pressed ? '🌗' : '🌙';
});

document.querySelectorAll('.acc-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    const panel = btn.nextElementSibling;
    if (panel.hasAttribute('hidden')) panel.removeAttribute('hidden'); else panel.setAttribute('hidden','');
  });
});

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  status.textContent = 'Enviando...';
  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  setTimeout(() => {
    status.textContent = 'Mensagem enviada. Obrigado.';
    form.reset();
    submitBtn.disabled = false;
    setTimeout(() => status.textContent = '', 4000);
  }, 900);
});
