let input = document.querySelector('.form-control');
input.addEventListener('input', onInput);
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
function onInput() {
  if (isEmailValid(input.value)) {
    input.style.borderColor = 'green';
  } else {
    input.style.borderColor = 'red';
  }
}



function isEmailValid(value) {
return EMAIL_REGEXP.test(value)};


const menu = document.querySelector(".burger_block");
const menuClose = document.querySelector(".close_burger");
const menuItem = document.querySelector(".header_list-burger");
const burgerItem = document.querySelector(".header_burger");


burgerItem.addEventListener("click", () => {
  
  menu.classList.add("burger_block_active");
  burgerItem.classList.add('inactive')
 
});
menuClose.addEventListener("click", () => {
  menu.classList.remove("burger_block_active");
  burgerItem.classList.remove('inactive')
 
});
menuItem.addEventListener("click", () => {
  menu.classList.remove("burger_block_active");
  burgerItem.classList.remove('inactive')

});


menu.onclick = function(event) {
  let target = event.target; 
  if (target.className == 'burger_block burger_block_active') {
    menu.classList.remove("burger_block_active");
    burgerItem.classList.remove('inactive')
  } 
};



// попап //



let wrapperPopup = document.querySelector('.wrapper_popup');
let contData = document.querySelectorAll('.contacts_data'); 
let contDataPop = document.querySelector('.contacts_datapop');
let carousel = document.querySelector('.feedback_wrapper')
let feedback = document.querySelectorAll('.feedback_title_p');
let nameP = document.querySelector('.namepop'); 
let nameFeed = document.querySelectorAll('.nameFeedback');
let contentPop = document.querySelector('.feedback_title_pop')
let imgFeed = document.querySelectorAll('.img-feedback')
let imgPop = document.querySelector('.img-feedback-popup')
let close = document.querySelector('.close_popup')
let body = document.querySelector('body')



close.addEventListener('click', () => {
wrapperPopup.classList.remove('open-popup') 
body.classList.remove('scroll')
})


wrapperPopup.onclick = function(event) {
  let target = event.target; 
  if (target.className == 'wrapper_popup open-popup') {
    wrapperPopup.classList.remove('open-popup') 
    body.classList.remove('scroll')
  } 
};



let elements = [...document.querySelectorAll('.feedback_card')].forEach(item => { 
  item.addEventListener('click', ()=>{
  let indexCard = item.id
  wrapperPopup.classList.toggle('open-popup')
nameP.innerHTML = nameFeed[indexCard].textContent;
contentPop.innerHTML = feedback[indexCard].textContent;
contDataPop.innerHTML = contData[indexCard].textContent;
imgPop.src = imgFeed[indexCard].src;
body.classList.add('scroll')
});
});



// feedback инпут //

let elem = document.querySelector('input[type="range"]');
let offset = 0;
let rangeValue = function(){
let newValue = elem.value;
if (window.innerWidth > 1300) {
  offset = (newValue * 298) - 298
  carousel.style.left = -offset + "px";
} else {
  offset = (newValue * 320) - 320
  carousel.style.left = -offset + "px";
}
}
elem.addEventListener("input", rangeValue);