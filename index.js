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
document.addEventListener("contextmenu", (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (event.keyCode === 123 || ctrlShiftKey(e, "I") || ctrlShiftKey(e, "J") || ctrlShiftKey(e, "C") || (e.ctrlKey && e.keyCode === "U".charCodeAt(0))) return false;
};



function redirectToStore() {
  const userAgent = navigator.userAgent.toLowerCase();
  if (/iphone|ipad|ipod/.test(userAgent)) {
    window.location.href = 'https://apps.apple.com/in/app/wolf-nutrition/id6448917849';
  } else if (/android/.test(userAgent)) {
    window.location.href = 'https://play.google.com/store/apps/details?id=com.wolfnutri.app&pli=1';
  } else if (/windows/.test(userAgent)) {
    window.open('https://play.google.com/store/apps/details?id=com.wolfnutri.app&pli=1', '_blank');
  } else if (/mac/.test(userAgent)) {
    window.open('https://apps.apple.com/in/app/wolf-nutrition/id6448917849', '_blank');
  } else {
    console.error('Unsupported platform.');
  }
}

window.onload = function () {
  window.scrollTo(0, 0);
};