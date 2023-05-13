const navLinks = document.querySelector(".nav-links");
function onToggleMenu() {
  //   e.name = e.name === "menu" ? "close" : "menu";
  // navLinks.classList.toggle("top-[100%]");
  navLinks.classList.toggle("top-[30rem]");
}

const hamburger = document.getElementById("nav-toggle");

hamburger.onclick = function () {
  navLinks.classList.toggle("active");
};

// nav.click(function () {
//   this.getElementById("menu").classList.toggle("active");
// });

const links = document.querySelectorAll(".nav-links a");
const navBarLinks = document.querySelectorAll(".nav-links ul");

links.forEach((l) => {
  l.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
