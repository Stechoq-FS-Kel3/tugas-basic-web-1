const menuIcon = document.getElementById("iconNav");
const Hidden = document.getElementById("navigation");

menuIcon.addEventListener("click", () => {
  Hidden.classList.toggle("navigation");
});
