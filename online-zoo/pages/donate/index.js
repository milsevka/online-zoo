let input = document.querySelector('.form-control-footer');
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

// const meow = document.querySelector(".burger_container")

burgerItem.addEventListener("click", () => {
  menu.classList.toggle("burger_block_active");
  burgerItem.classList.add('inactive')
  // meow.classList.add('hidden-bur')
  // wrapper.classList.add("wrapper_mob_click_active");
});
menuClose.addEventListener("click", () => {
  menu.classList.remove("burger_block_active");
  burgerItem.classList.remove('inactive')
  // wrapper.classList.remove("wrapper_mob_click_active");
});
menuItem.addEventListener("click", () => {
  menu.classList.remove("burger_block_active");
  burgerItem.classList.remove('inactive')
  // wrapper.classList.remove("wrapper_mob_click_active");
});
const amount = document.querySelectorAll('.slider-radio')
 function changeInput () {
  
  for (let i = 0; i < amount.length; i++) {
   if (window.innerWidth < 830) {
     amount[i].checked = false;
     amount[5].checked = true;
   } else {
    amount[i].checked = false;
    amount[2].checked = true;

   }
    
  }
 }

document.querySelector('.progress-bar').addEventListener('click', () => {
  for (let i = 0; i < amount.length; i++) {
    if (amount[i].checked) {
      dataInput = amount[i].id.slice(7);
      break
    } 
  }
  document.querySelector('.form-control').value = dataInput
})
// dataInput = amount[2].id.slice(7);

 

 window.addEventListener('resize', changeInput);