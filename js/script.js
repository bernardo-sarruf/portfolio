const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

document.querySelectorAll(".scroll-image").forEach((el, index) => {
  el.style.transitionDelay = `${index * 90}ms`;
});

const scrollObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.18, rootMargin: "0px 0px -40px 0px" });

document.querySelectorAll(".scroll-image").forEach(el => scrollObserver.observe(el));


document.getElementById("year").textContent = new Date().getFullYear();

/*
  EDIT THESE LINKS before publishing.
  Replace the placeholder URLs with Bernardo's real profiles.
*/
const links = {
  scholar: "https://scholar.google.com/",
  orcid: "https://orcid.org/",
  linkedin: "https://www.linkedin.com/"
};

const scholarLink = document.getElementById("scholarLink");
const orcidLink = document.getElementById("orcidLink");
const linkedinLink = document.getElementById("linkedinLink");
if (scholarLink) scholarLink.href = links.scholar;
if (orcidLink) orcidLink.href = links.orcid;
if (linkedinLink) linkedinLink.href = links.linkedin;
