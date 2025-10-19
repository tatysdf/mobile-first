const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("main-nav");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");

  // Bloquer le scroll quand le menu est ouvert
  document.body.style.overflow = nav.classList.contains("active")
    ? "hidden"
    : "auto";
});
