const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("ul#ingredients")
ingredients.forEach(item => {
  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = item
  // console.log(liEl);
  list.appendChild(liEl);

});

