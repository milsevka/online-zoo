let input = document.querySelector(".form-control");
input.addEventListener("input", onInput);
const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
function onInput() {
  if (isEmailValid(input.value)) {
    input.style.borderColor = "green";
  } else {
    input.style.borderColor = "red";
  }
}

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}

const menu = document.querySelector(".burger_block");
const menuClose = document.querySelector(".close_burger");
const menuItem = document.querySelector(".header_list-burger");
const burgerItem = document.querySelector(".header_burger");

burgerItem.addEventListener("click", () => {
  menu.classList.add("burger_block_active");
  burgerItem.classList.add("inactive");
});
menuClose.addEventListener("click", () => {
  menu.classList.remove("burger_block_active");
  burgerItem.classList.remove("inactive");
});
menuItem.addEventListener("click", () => {
  menu.classList.remove("burger_block_active");
  burgerItem.classList.remove("inactive");
});

menu.onclick = function (event) {
  let target = event.target;
  if (target.className == "burger_block burger_block_active") {
    menu.classList.remove("burger_block_active");
    burgerItem.classList.remove("inactive");
  }
};

// попап //

let wrapperPopup = document.querySelector(".wrapper_popup");
let contData = document.querySelectorAll(".contacts_data");
let contDataPop = document.querySelector(".contacts_datapop");
let carousel = document.querySelector(".feedback_wrapper");
let feedback = document.querySelectorAll(".feedback_title_p");
let nameP = document.querySelector(".namepop");
let nameFeed = document.querySelectorAll(".nameFeedback");
let contentPop = document.querySelector(".feedback_title_pop");
let imgFeed = document.querySelectorAll(".img-feedback");
let imgPop = document.querySelector(".img-feedback-popup");
let close = document.querySelector(".close_popup");
let body = document.querySelector("body");

close.addEventListener("click", () => {
  wrapperPopup.classList.remove("open-popup");
  body.classList.remove("scroll");
});

wrapperPopup.onclick = function (event) {
  let target = event.target;
  if (target.className == "wrapper_popup open-popup") {
    wrapperPopup.classList.remove("open-popup");
    body.classList.remove("scroll");
  }
};

let elements = [...document.querySelectorAll(".feedback_card")].forEach(
  (item) => {
    item.addEventListener("click", () => {
      let indexCard = item.id;
      wrapperPopup.classList.toggle("open-popup");
      nameP.innerHTML = nameFeed[indexCard].textContent;
      contentPop.innerHTML = feedback[indexCard].textContent;
      contDataPop.innerHTML = contData[indexCard].textContent;
      imgPop.src = imgFeed[indexCard].src;
      body.classList.add("scroll");
    });
  }
);

// feedback инпут //

let elem = document.querySelector('input[type="range"]');
let offset = 0;
let rangeValue = function () {
  let newValue = elem.value;
  if (window.innerWidth > 1300) {
    offset = newValue * 298 - 298;
    carousel.style.left = -offset + "px";
  } else {
    offset = newValue * 320 - 320;
    carousel.style.left = -offset + "px";
  }
};
elem.addEventListener("input", rangeValue);

// слайдер

const arrowRight = document.querySelector(".section3_animals_arrowright");
const arrowLeft = document.querySelector(".section3_animals_arrow");

const cardSlider = document.querySelectorAll(".card_animals");
const slider = document.querySelector(".slider-pets");

const left = document.querySelector(".section3_wrapper-left");
const center = document.querySelector(".section3_wrapper-center");
const right = document.querySelector(".section3_wrapper-right");

const card1 = document.querySelector("#card1");
const card2 = document.querySelector("#card2");
const card3 = document.querySelector("#card3");
const card4 = document.querySelector("#card4");
const card5 = document.querySelector("#card5");
const card6 = document.querySelector("#card6");
const card7 = document.querySelector("#card7");
const card8 = document.querySelector("#card8");

let cardsArray = [card1, card2, card3, card4, card5, card6, card7, card8];

const moveLeft = () => {
  if (window.innerWidth > 1100) slider.classList.add("left-transition");
  if (window.innerWidth < 1100 && window.innerWidth > 800)
    slider.classList.add("left-transition-tablet");
  if (window.innerWidth < 799) slider.classList.add("left-transition-small");

  slider.classList.remove("right-transition");
  slider.classList.remove("right-transition-tablet");
  slider.classList.remove("right-transition-small");

  arrowLeft.setAttribute("disabled", true);
  arrowRight.setAttribute("disabled", true);
};

const moveRight = () => {
  if (window.innerWidth > 1100) slider.classList.add("right-transition");
  if (window.innerWidth < 1100 && window.innerWidth > 800)
    slider.classList.add("right-transition-tablet");
  if (window.innerWidth < 799) slider.classList.add("right-transition-small");
  slider.classList.remove("left-transition");
  slider.classList.remove("left-transition-tablet");
  slider.classList.remove("left-transition-small");

  arrowLeft.setAttribute("disabled", true);
  arrowRight.setAttribute("disabled", true);
};

const generateLeft = () => {
  let randomCards = [];
  while (randomCards.length < 6) {
    let num = Math.floor(Math.random() * 8);
    randomCards.push(cardsArray[num]);
    randomCards = [...new Set(randomCards)];
  }
  // left.innerHTML = '';
  if (window.innerWidth > 800) {
    left.innerHTML = "";
    left.appendChild(randomCards[0]);
    left.appendChild(randomCards[1]);
    left.appendChild(randomCards[2]);
    left.appendChild(randomCards[3]);
    left.appendChild(randomCards[4]);
    left.appendChild(randomCards[5]);
  } else {
    left.innerHTML = "";
    left.appendChild(randomCards[0]);
    left.appendChild(randomCards[1]);
    left.appendChild(randomCards[2]);
    left.appendChild(randomCards[3]);
  }
};
const generateRight = () => {
  let randomCards = [];
  while (randomCards.length < 6) {
    let num = Math.floor(Math.random() * 8);
    randomCards.push(cardsArray[num]);
    randomCards = [...new Set(randomCards)];
  }
  if (window.innerWidth > 800) {
    right.innerHTML = "";
    right.appendChild(randomCards[0]);
    right.appendChild(randomCards[1]);
    right.appendChild(randomCards[2]);
    right.appendChild(randomCards[3]);
    right.appendChild(randomCards[4]);
    right.appendChild(randomCards[5]);
  } else {
    right.innerHTML = "";
    right.appendChild(randomCards[0]);
    right.appendChild(randomCards[1]);
    right.appendChild(randomCards[2]);
    right.appendChild(randomCards[3]);
  }
};

arrowRight.addEventListener("click", () => {
  moveRight();
  generateRight();
});

arrowLeft.addEventListener("click", () => {
  moveLeft();
  generateLeft();
});

slider.addEventListener("animationend", (ev) => {
  if (
    ev.animationName === "move-left" ||
    ev.animationName === "move-left-tablet"
  ) {
    slider.classList.remove("left-transition");
    slider.classList.remove("left-transition-tablet");
    slider.classList.remove("left-transition-small");
    right.innerHTML = left.innerHTML;
    center.innerHTML = left.innerHTML;
  } else if (
    ev.animationName === "move-right" ||
    ev.animationName === "move-right-tablet"
  ) {
    slider.classList.remove("right-transition");
    slider.classList.remove("right-transition-tablet");
    slider.classList.remove("right-transition-small");
    left.innerHTML = right.innerHTML;
    center.innerHTML = right.innerHTML;
  }
  arrowLeft.removeAttribute("disabled");
  arrowRight.removeAttribute("disabled");
  console.log("meow");
});
