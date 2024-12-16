const loginForm = document.querySelector('.login-form');

const onBtnFormEvent = loginForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = {
        [loginForm.elements.email.name]: loginForm.elements.email.value.trim(),
        [loginForm.elements.password.name]: loginForm.elements.password.value.trim(),
    }
    if (formData[loginForm.elements.email.name] === '' || formData[loginForm.elements.password.name] === '') {
        alert('All form fields must be filled in');
        return;
    }
    console.log(formData);
    loginForm.reset();
});