/* ═══════════════════ TYPING EFFECT ═══════════════════ */
const phrases = [
  "Python Developer",
  "Django Specialist",
  "ML Enthusiast",
  "Backend Engineer",
  "Problem Solver"
];
let phraseIdx = 0, charIdx = 0, deleting = false;
const typedEl = document.getElementById("typed-text");

function type() {
  const current = phrases[phraseIdx];
  typedEl.textContent = current.substring(0, charIdx);

  if (!deleting) {
    charIdx++;
    if (charIdx > current.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
    setTimeout(type, 80);
  } else {
    charIdx--;
    if (charIdx < 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      charIdx = 0;
      setTimeout(type, 400);
      return;
    }
    setTimeout(type, 40);
  }
}
type();

/* ═══════════════════ NAVBAR SCROLL ═══════════════════ */
const navbar = document.getElementById("navbar");
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  navbar.classList.toggle("scrolled", y > 50);
  backToTop.classList.toggle("visible", y > 400);
});

/* ═══════════════════ ACTIVE NAV LINK ═══════════════════ */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function setActiveLink() {
  const scrollY = window.scrollY + 120;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(l => l.classList.remove("active"));
      const active = document.querySelector(`.nav-link[href="#${id}"]`);
      if (active) active.classList.add("active");
    }
  });
}
window.addEventListener("scroll", setActiveLink);

/* ═══════════════════ MOBILE MENU ═══════════════════ */
const toggle = document.getElementById("nav-toggle");
const menu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  menu.classList.toggle("open");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    toggle.classList.remove("active");
    menu.classList.remove("open");
  });
});

/* ═══════════════════ REVEAL ON SCROLL ═══════════════════ */
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

revealEls.forEach(el => observer.observe(el));

/* ═══════════════════ CONTACT FORM ═══════════════════ */
const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("form-name").value;
  const email = document.getElementById("form-email").value;
  const message = document.getElementById("form-message").value;
  const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:mittalhardik2007@gmail.com?subject=${subject}&body=${body}`;
  form.reset();
});

/* ═══════════════════ SMOOTH SCROLL FOR ALL ANCHORS ═══════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});
