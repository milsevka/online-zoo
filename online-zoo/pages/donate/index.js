// форма валидность email //
let input = document.querySelector(".form-control-footer");
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

// бургер меню //

const menu = document.querySelector(".burger_block");
const menuClose = document.querySelector(".close_burger");
const menuItem = document.querySelector(".header_list-burger");
const burgerItem = document.querySelector(".header_burger");
const main = document.querySelector("body");

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
// количество донатов //

const amount = document.querySelectorAll(".slider-radio");
const dataInput = document.querySelector(".form-control");

function changeInput() {
  dataInput.value = amount[5].id.slice(7);
}

document.querySelector(".progress-bar").addEventListener("click", () => {
  for (let i = 0; i < amount.length; i++) {
    if (amount[i].checked) {
      dataInput.value = amount[i].id.slice(7);
      break;
    }
  }
});

dataInput.addEventListener(
  "input",
  () => {
    setTimeout(() => {
      if (dataInput.value.length > 4) {
        dataInput.value = dataInput.value.substr(0, 4);
      }
    });
  },
  500
);

dataInput.addEventListener("input", () => {
  for (let i = 0; i < amount.length; i++) {
    if (dataInput.value === amount[i].id.slice(7)) {
      amount[i].checked = true;
    } else {
      amount[i].checked = false;
    }
  }
});

window.addEventListener("load", changeInput); // при открытии
