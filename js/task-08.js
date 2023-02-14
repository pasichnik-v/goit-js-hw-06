
// Отримати посилання на .login-form +
// створити слухача submit, function +
// створити функція, яка не буде перезавантажувати сторінку event.preventDefault() +
// Додати умову якщо незаповнені поля виводить alert, що всі поля треба заповнити +
// Submit коректно внесених даних повертає об'єкт {login: email, password: pasword} Використовувати властивість elements
// зробити consol.log об'єкту
// Очистити значення полів за допомогою методу reset

const form = document.querySelector('.login-form');
// console.log(form);



const onFormSubmit = (event) => {
    event.preventDefault();
    const {elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        // return console.log("Чувак, не гарячкуй. Введи пошту і пароль");
        return alert("Чувак, не гарячкуй. Введи пошту і пароль");
    }
    const mailValue = event.currentTarget.elements.email.value;
    const passwordValue = event.currentTarget.elements.password.value;
    
    console.log('mail: ', mailValue, 'password: ', passwordValue);

    // console.log(event.currentTarget.elements.email.value);
    // console.log(event.currentTarget.elements.password.value);

    event.currentTarget.reset();
}

form.addEventListener('submit', onFormSubmit);

// 
// 
