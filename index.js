const menu = document.querySelector('#menu');
const navIcons = document.querySelector('.nav-iconos');
const listComponent = document.querySelector('.header');
const navElements = document.querySelectorAll('.toggle');
const closeMenu = document.querySelector('.clear');

navElements[0].insertAdjacentHTML('afterend', '<div class="pop-menu-line"></div>');
navElements[1].insertAdjacentHTML('afterend', '<div class="pop-menu-line"></div>');
navElements[2].insertAdjacentHTML('afterend', '<div class="pop-menu-line"></div>');

function displayMenu() {
  listComponent.classList.add('display-my-menu');
  listComponent.classList.remove('header');
  document.getElementById('.menu').style.display = 'none';
  navIcons.style.display = 'contents';
}

function hideMenu() {
  listComponent.classList.remove('display-my-menu');
  listComponent.classList.add('header');
}

navElements[0].addEventListener('click', hideMenu);
navElements[1].addEventListener('click', hideMenu);
navElements[2].addEventListener('click', hideMenu);

menu.addEventListener('click', displayMenu);

closeMenu.addEventListener('click', hideMenu);

// cards objects

const myProjects = [{
  tittle: "Multi-Post Stories",
  tech: ["Css", "html", "bootstrap", "Ruby"],
  image: "./images/Stories.png",
  descriptionWhenOpen: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  descriptionWhenClose: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  seeLive: "#",
  seeSource: "#",
  seeProject: "#"
},

{
  tittle: 'Multi Post Stories',
  tech: ['html', 'bootstrap', 'ruby on rails'],
  image: '',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  seeLive: '#',
  seeSource: '#',
},
{
  tittle: 'Multi Post Stories',
  tech: ['html', 'bootstrap', 'ruby on rails'],
  image: '',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  seeLive: '#',
  seeSource: '#',
},
{
  tittle: 'Multi Post Stories',
  tech: ['html', 'bootstrap', 'ruby on rails'],
  image: '',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  seeLive: '#',
  seeSource: '#',
},
{
  tittle: 'Multi Post Stories',
  tech: ['html', 'bootstrap', 'ruby on rails'],
  image: '',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  seeLive: '#',
  seeSource: '#',
},
{
  tittle: 'Multi Post Stories',
  tech: ['html', 'bootstrap', 'ruby on rails'],
  image: '',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  seeLive: '#',
  seeSource: '#',
},]


