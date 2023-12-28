function validateForm(event) {
    event.preventDefault();
    let hasError = false;

    const nameInput = document.getElementsByName('name')[0];
    const emailInput = document.getElementsByName('email')[0];
    const checkboxInformation = document.getElementById('checkboxInformation');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');

    if (!checkboxInformation.checked) {
        checkboxInformation.disabled = true;
    } else {
        checkboxInformation.disabled = false;
    }

    // Код валидации name
    if (nameInput.value.length < 2) {
        nameError.textContent = 'Имя должно содержать не менее 2 символов';
    } else {
        nameError.textContent = '';
    }

    // Код валидации email
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (regex.test(emailInput.value)) {
        console.log('Email валиден');
    } else {
        console.log('Невалидный Email');
    }

    //Kод 
    nameError.style.display = 'none';
    emailError.style.display = 'none';

    if (nameInput.value === '') {
        nameError.textContent = 'Введите имя пользователя.';
        nameError.style.display = 'block';
        hasError = true;
    }

    if (!regex.test(emailInput.value)) {
        emailError.textContent = 'Введите корректный email.';
        emailError.style.display = 'block';
        hasError = true;
    }

    if (!hasError) {
        alert('Форма успешно отправлена!');
    }
}
// Код вывода в консоль и очистки формы
if (!hasError) {
    console.log('Имя:', nameInput.value);
    console.log('Email:', emailInput.value);

    // Очистка формы
    form.reset();

    alert('Форма успешно отправлена!');
}


const inputs = document.querySelectorAll('input');

inputs.forEach(function (input) {
    input.addEventListener('focus', function () {
        input.classList.add('focused');
    });

    input.addEventListener('blur', function () {
        input.classList.remove('focused');
    });
});

const form = document.getElementById('formId');
form.addEventListener('submit', validateForm);
