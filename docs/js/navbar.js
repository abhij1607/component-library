const menuIcon = document.querySelector(".menu-icon");
const componentsBtn = document.querySelector("#components-btn");

menuIcon.addEventListener("click", () => {
  document.querySelector(".menu-icon").classList.toggle("cross");
  document.querySelector("#main-menu").classList.toggle("show");
});

componentsBtn.addEventListener("click", () => {
  document.querySelector(".arrow").classList.toggle("down");
  document.querySelector(".arrow").classList.toggle("right");
  document.querySelector(".aside-nav").classList.toggle("show");
});
