
const decrementButt = document.querySelector('#counter button[data-action="decrement"]');
const incrementButt = document.querySelector('#counter button[data-action="increment"]');

const counterValue = document.querySelector('#value');
counterValue.textContent = 0;


const handleIncrementBtnClick = () => {
    counterValue.textContent = Number(counterValue.textContent) + 1;
};
const handleDecrementBtnClick = () => {
    counterValue.textContent = Number(counterValue.textContent) - 1;
}


decrementButt.addEventListener("click", handleDecrementBtnClick);
incrementButt.addEventListener("click", handleIncrementBtnClick);







