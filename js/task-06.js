// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
//  перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
// якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid,
// які ми вже додали у вихідні файли завдання.


// отримати посилання на інпут +
// викликаю слухача з допомогою blur , подія перевіряє чи
// довжина тексту в інпуті = значення data-length
//  якщо true, то видаляємо invalid, додаємо Valid
// якщо !true, то додаємо invalid
// якщо текстареа пусте, то 




const inputRefs = document.querySelector("#validation-input");

inputRefs.addEventListener("blur", onBlurBorderColor);

function onBlurBorderColor(event) {
  const inputValue = inputRefs.getAttribute("data-length");
  if (inputRefs.value.length === Number(inputValue)) {
    inputRefs.classList.add("valid");
    inputRefs.classList.remove("invalid");
  }
  if (
    inputRefs.value.length !== Number(inputValue) &&
    inputRefs.value.length !== 0
  ) {
    inputRefs.classList.add("invalid");
  }
  // if (inputRefs.value.length === 0) {
  //   inputRefs.classList.remove("valid");
  //   inputRefs.classList.remove("invalid");
  // }

}
