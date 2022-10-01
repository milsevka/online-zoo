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
  menu.classList.toggle("burger_block_active");
  burgerItem.classList.add('inactive')
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
// wrapperClick.addEventListener("click", () => {
//   menu.classList.remove("burger_block_active");
//   wrapper.classList.remove("wrapper_mob_click_active");
// });