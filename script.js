document.querySelectorAll(".hero-photo img.profile-img, .about-photo img.profile-img").forEach((img) => {
  const figure = img.closest(".hero-photo, .about-photo");
  const fallback = figure?.querySelector(".photo-fallback");
  if (!figure || !fallback) return;
  img.addEventListener("error", () => {
    img.style.display = "none";
    fallback.classList.add("is-visible");
  });
});

const menuBtn = document.getElementById("menuBtn");
const siteNav = document.getElementById("siteNav");
const navLinks = document.querySelectorAll(".site-nav a");
const sections = document.querySelectorAll("main section[id]");
const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (menuBtn && siteNav) {
  menuBtn.addEventListener("click", () => {
    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("open");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

const setActiveLink = () => {
  let currentSection = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 90;
    if (window.scrollY >= top) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${currentSection}`;
    link.classList.toggle("active", isActive);
  });
};

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);

const scrollTopBtn = document.getElementById("scrollTop");
if (scrollTopBtn) {
  const toggleScrollTop = () => {
    scrollTopBtn.classList.toggle("visible", window.scrollY > 420);
  };
  window.addEventListener("scroll", toggleScrollTop);
  window.addEventListener("load", toggleScrollTop);
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
