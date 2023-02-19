// nav toggle - select button and links
const navToggle = document.querySelector("#navToggle");
const nav = document.querySelector(".nav-links");

// add event listener
navToggle.addEventListener("click", () => {
  nav.classList.toggle("hidden");
  if (nav.classList.contains("fadeIn")) {
    nav.classList.remove("fadeIn");
  } else {
    nav.classList.add("fadeIn");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    nav.classList.remove("fadeIn");
  }
});
