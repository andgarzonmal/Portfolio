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

const multyPostSection = {
    title: "Multy-Post Stories",
    tech: ["Css", "html", "bootstrap", "Ruby"],
    image: "./images/Stories.png",
    descriptionWhenOpen: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    descriptionWhenClose: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    seeLive: "#",
    seeSource: "#",
    seeProject: "#"  
}

const card1 = {
  id: "card2",
    title: 'titulo',
    tech: ['html', 'bootstrap', 'ruby on rails'],
    image: '',
    descriptionOpen: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    descriptionClose: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    seeLive: '#',
    seeSource: '#',
}

const myProjects = [
  {
    id: "card2",
    title: 'titulo',
    tech: ['html', 'bootstrap', 'ruby on rails'],
    image: '',
    descriptionOpen: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    descriptionClose: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    seeLive: '#',
    seeSource: '#',
  },
  {
    id: "card3",
    title: 'tories',
    tech: ['html', 'bootstrap', 'ruby on rails'],
    image: '',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    descriptionClose:"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    seeLive: '#',
    seeSource: '#',
  },
  {
    id: "card4",
    title: 'Post Stories',
    tech: ['html', 'bootstrap', 'ruby on rails'],
    image: '',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    descriptionClose:"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    seeLive: '#',
    seeSource: '#',
  },
  {
    id: "card5",
    title: 'Multi Post',
    tech: ['html', 'bootstrap', 'ruby on rails'],
    image: '',
    descriptionClose:"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    seeLive: '#',
    seeSource: '#',
  },
  {
    id: "card6",
    title: 'Multi Post Stories',
    tech: ['html', 'bootstrap', 'ruby on rails'],
    image: '',
    descriptionClose:"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    seeLive: '#',
    seeSource: '#',
  },

]

const storiesSection = document.querySelector("#post-Stories");

storiesSection.innerHTML = `
    <div class="img">
      <img
        class="post-img"
        src="${multyPostSection.image}"
        id="Stories-image"
        alt="Stories image"
      />
    </div>
    <div class="Stories-section">
      <h3 class="Stories-title">${multyPostSection.title}</h3>
      <p>
      ${multyPostSection.descriptionWhenClose}
      </p>
      <div class="post-Stories-caregories">
        <ul class="categories">
          <li class="list">
            <a class="Categorie-button" href="#">Css</a>
          </li>
          <li class="list">
            <a class="Categorie-button" href="#">html</a>
          </li>
          <li class="list">
            <a class="Categorie-button" href="#">bootstrap</a>
          </li>
          <li class="list">
            <a class="Categorie-button" href="#">Ruby</a>
          </li>
        </ul>
        <button class="button-Stories" id="button-stories" type="button">
          <span>See project</span>
        </button>
      </div>
    </div> 
 `
   let postStorySection = document.getElementById("post-Stories")

   postStorySection.insertAdjacentHTML('afterend', `  
  <div class="card-photo-container cards" id="card1" tabindex="0">
    <h3 class="card-title">Profesional Art Printing Data</h3>
    <p class="card-description">
      A daily selection of privately personalized reads; no accounts or
      sign-ups required. has been the industry's standard</p>
    <ul class="card-list">
      <li class="list-item"
        ><a class="list-button" href="#">html</a>
      </li>
      <li class="list-item"
        ><a class="list-button" href="#">bootstrap</a>
      </li>
      <li class="list-item">
        <a class="list-button" href="#">Ruby</a>
      </li>
    </ul>
    <button class="button-Stories b1 but" type="button">
      <span>See project</span>
    </button>
  </div>`);

 let Card = ({id, title, descriptionClose}) => `
  <div class="card-photo-container cards animate" id=${id} tabindex="0">
    <h3 class="card-title  d1">${title}</h3>
    <p class="card-description">${descriptionClose}</p>
    <ul class="card-list">
      <li class="list-item">
        <a class="list-button" href="#">html</a>
      </li>
      <li class="list-item">
        <a class="list-button" href="#">bootstrap</a>
      </li>
      <li class="list-item"
        ><a class="list-button" href="#">Ruby</a>
      </li>
    </ul>
    <button class="button-Stories b2"  type="button">
      <span>See project</span>
    </button>
  </div>`

const presentation = document.querySelector(".presentation") 


let PopUp = ({title})=>`
  <section class="popup-container" id="popup-container">
    <div class="background-popup">
      <header class=header-pop-container>
        <h2>${title}</h2>
        <button class="btn-clear" id="btn-clear">
          <i class="material-icons clear-pop">clear</i>
        </button>
      </header>
      <ul class="card-list-pop">
        <li class="list-pup-item"
          ><a class="list-pop-button" href="#">html</a>
        </li>
        <li class="list-pup-item"
          ><a class="list-pop-button" href="#">bootstrap</a>
        </li>
        <li class="list-pup-item">
          <a class="list-pop-button" href="#">Ruby</a>
        </li>
      </ul>
      <div class="cards-info">
        <img class="pop-image" src="/Portfolio/images/SnapshootPortfolio.png" alt="project image">
        <div class="details">
          <p class="text-pop">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.
          </p> 
          <ul class="see-more">
            <li class="see-more-section">
              <button class = "see-live">
                <a class = "pop-a-tag" href="#">See Live</a>
                <img class="pop-image-li" src="./images/Icon-Export.png" alt="Export icon">
              </button>
            </li>
            <li class="see-more-section">
              <button class = "see-source">
                <a class = "pop-a-tag" href="#">See Source</a>
                <img class="pop-image-li" src="./images/github-popup.png" alt="github popup icon">
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div> 
  </section>`




const closePop = () => {
  const popUpContainer = document.getElementById("popup-container");
  popUpContainer.remove();
}

let displayPopUp = object => () => {
  presentation.insertAdjacentHTML('afterend', PopUp(object));
  const clearPop = document.getElementById("btn-clear") 
  
  clearPop.addEventListener("click", closePop)
}

myProjects.forEach(object => {
  const card1 = document.querySelector("#card1"); 
  card1.insertAdjacentHTML('afterend', Card(object));
  let currentCard = document.querySelector(`#${object.id}`);
  currentCard.addEventListener("click", displayPopUp(object));
})


const multyPCard = document.getElementById("button-stories")
multyPCard.addEventListener("click", displayPopUp(multyPostSection))










