// Напиши скрипт, який змінює кольори фону елемента <body> 
// через інлайн - стиль по кліку на button.change - color 
// і виводить значення кольору в span.color.
// 
// 
// викликати button
// викликати  background color
//  викликати слухача click який викликає подію зміни кольору в бекграунд
// 
// 



const valueColor = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");

//console.log(valueColor);
//console.log(changeColorButton);

const bodyBg = document.body;

const changeColor = () => {
  valueColor.textContent = getRandomHexColor();
  bodyBg.style.backgroundColor = valueColor.textContent;
};
changeColorButton.addEventListener("click", changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}




















































// const buttonEl = document.querySelector('.change-color');
// const backgColor = document.querySelector('.color')






// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }


// const handleClick = () => {
//   backgColor.style.backgroundColor = getRandomHexColor();
//   backgColor.textContent = getRandomHexColor();
   
// }

// buttonEl.addEventListener('click', handleClick);

