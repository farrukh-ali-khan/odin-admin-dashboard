const rootEl = document.documentElement;

const themeInvertEl = document.querySelector(".invert__theme");

themeInvertEl.addEventListener("click", (e) => {
  rootEl.classList.toggle("invert");
});
