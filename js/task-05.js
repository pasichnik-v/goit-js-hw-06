// Задача ввести ім'я в інпут, нажати ентер і повинно вивестися првіт "ім'я"
// Якщо інпут порожній, то виводиться привіт анонімус
//1. викликаю інпут, беру name output
// 2. присвоюю ім'я в інпут
// 
// 
// 

const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
});
// console.log(output.textContent);