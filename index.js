const menu = document.querySelector("#menu");
const navIcons = document.querySelector(".nav-iconos");
const listComponent = document.querySelector(".header")



function displayMenu() {
  listComponent.classList.add("display-my-menu");
  listComponent.classList.remove("header");
}


menu.addEventListener("click", displayMenu)

