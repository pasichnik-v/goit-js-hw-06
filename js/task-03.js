const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const gallery = document.querySelector(".gallery");


// // 1.

const liEl = images
  .map((imageEl) => `<li class="gallery-item"><img class = "image" src = ${imageEl.url} alt = ${imageEl.alt} width = 320 ></li>`)
  .join('');
gallery.insertAdjacentHTML("afterbegin", liEl);

// console.log(gallery);

// 2

// for (const element of images) {
// // const liEl = document.createElement('li');
//   // liEl.classList.add('list');
//   const imageEl = document.createElement('img');
//   imageEl.src = element.url;
//   imageEl.alt = element.alt;
//   imageEl.width = 640;
//   console.log(imageEl);


//   gallery.insertAdjacentHTML("beforeend", `<li><img class = "image" src=" ${imageEl.src}" alt = '${imageEl.alt}' width = '${imageEl.width}'</li>`);
//   // gallery.insertAdjacentHTML('beforeend',`<li><img src=" ${element.url}" </li>`
//   // );
// }
// 2.2
// // gallery.appendChild(liEl);
// // liEl.appendChild(imageEl);
// console.log(gallery);


