const menu = document.querySelector("#menu");
const navIcons = document.querySelector(".nav-iconos");
const listComponent = document.querySelector(".header");
const navElements =document.querySelectorAll(".toggle")
const closeMenu = document.querySelector('.clear');

navElements[0].insertAdjacentHTML("afterend", '<div class="pop-menu-line"></div>');
navElements[1].insertAdjacentHTML("afterend", '<div class="pop-menu-line"></div>');
navElements[2].insertAdjacentHTML("afterend", '<div class="pop-menu-line"></div>');

function displayMenu() {
  listComponent.classList.add("display-my-menu");
  listComponent.classList.remove("header");
  document. getElementById('.menu'). style. display = "none";
  navIcons. style. display = "contents";
}

function hideMenu() {
  listComponent.classList.remove("display-my-menu");
  listComponent.classList.add("header");
}


navElements[0].addEventListener("click", hideMenu)
navElements[1].addEventListener("click", hideMenu)
navElements[2].addEventListener("click", hideMenu)


menu.addEventListener("click", displayMenu);


closeMenu.addEventListener('click', hideMenu);