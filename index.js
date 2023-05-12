const navLinks = document.querySelector(".nav-links");
function onToggleMenu() {
  //   e.name = e.name === "menu" ? "close" : "menu";
  navLinks.classList.toggle("top-[3rem]");
}

const nav = document.getElementById("nav-toggle");

nav.click(function () {
  navLinks.classList.toggle("top-[100%]");
});

nav.click(function () {
  this.getElementById("menu").classList.toggle("active");
});
