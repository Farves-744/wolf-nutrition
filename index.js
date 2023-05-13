const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");
const navBarLinks = document.querySelectorAll(".nav-links ul");
const hamburger = document.getElementById("nav-toggle");

hamburger.onclick = function () {
  navLinks.classList.toggle("active");
};

links.forEach((l) => {
  l.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Disable right-click
// document.addEventListener("contextmenu", (e) => e.preventDefault());

// function ctrlShiftKey(e, keyCode) {
//   return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
// }

// document.onkeydown = (e) => {
//   // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
//   if (event.keyCode === 123 || ctrlShiftKey(e, "I") || ctrlShiftKey(e, "J") || ctrlShiftKey(e, "C") || (e.ctrlKey && e.keyCode === "U".charCodeAt(0))) return false;
// };
