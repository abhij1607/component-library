const menuIcon = document.querySelector(".menu-icon");
const componentsBtn = document.querySelector("#components-btn");

if (menuIcon) {
  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("cross");
    const mainMenu = document.querySelector("#main-menu");
    if (mainMenu) {
      mainMenu.classList.toggle("show");
    }
  });
}

if (componentsBtn) {
  componentsBtn.addEventListener("click", () => {
    const arrowEl = document.querySelector(".arrow");
    if (arrowEl) {
      arrowEl.classList.toggle("down");
      arrowEl.classList.toggle("right");
    }
    const asideNav = document.querySelector(".aside-nav");
    if (asideNav) {
      asideNav.classList.toggle("show");
    }
  });
}
