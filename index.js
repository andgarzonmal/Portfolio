const menu = document.querySelector("#menu");
const navIcons = document.querySelector(".nav-iconos");
const listComponent = document.querySelector(".header");
const navElements =document.querySelectorAll(".toggle")

const closeMenu = document.querySelector('.clear')
// const side = document.querySelector('.side')

// closeMenu.addEventListener('click', () => {
//   side.classList.remove('clear');
// });


function displayMenu() {
  listComponent.classList.add("display-my-menu");
  listComponent.classList.remove("header");
  document. getElementById('.menu'). style. display = "none";
  navIcons. style. display = "contents";
}

function addLines() {
  for(let i=0; i<navElements.length; i++) {
    navElements[i].insertAdjacentHTML("afterend", '<hr/>');
    }
}

menu.addEventListener("click", () => {
  displayMenu();
  addLines();
});

function close() {
  listComponent.classList.remove("display-my-menu");
  listComponent.classList.add("header");
}
closeMenu.addEventListener('click', close);