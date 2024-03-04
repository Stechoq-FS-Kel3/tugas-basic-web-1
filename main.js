const menuIcon = document.getElementById("iconNav");
const Hidden = document.getElementById("navigation");

menuIcon.addEventListener("click", () => {
  Hidden.classList.toggle("navigation");
});

function toggleModal1() {
  document.getElementById("modal-1").classList.toggle("active");
}

function toggleModal2() {
  document.getElementById("modal-2").classList.toggle("active");
}
