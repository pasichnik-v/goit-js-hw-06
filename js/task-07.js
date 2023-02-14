// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
// і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
//
//Отримати id="font-size-control" , отримати <span id="text">Abracadabra!</span>
// Створити слухача input , для font-size-control з функцією event при якому id ="text" = event.currentTarget.value
//
//

const slider = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
slider.addEventListener("input", handleInputRange);

textEl.style.fontSize = slider.value + "px";
function handleInputRange(event) {
   textEl.style.fontSize = event.currentTarget.value + "px";
}