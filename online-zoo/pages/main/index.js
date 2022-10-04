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
menu.addEventListener("click", () => { 
  menu.classList.remove("burger_block_active");
  burgerItem.classList.remove('inactive')
 });


// попап //

// let feedback = document.querySelector('.feedback_card')

// feedback.addEventListener('click', () => {
//   console.log('meow')
//   // for (let i = 0; i < feedback.length; i++) {
//     feedback.classList.add('popup-container');
//   // }
// });
