const trialButton = document.querySelector('.trial');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('.form');

function showError(event){

event.preventDefault();

const emailCharacters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if(firstName.value.trim() == ''){
    document.querySelector('#firstNameAlert').classList.add('show');
    firstName.classList.add('errorInput');
    firstName.nextElementSibling.style.display = 'block';

}
if(lastName.value.trim() == ''){
    document.querySelector('#lastNameAlert').classList.add('show');
    lastName.classList.add('errorInput');
    lastName.nextElementSibling.style.display = 'block';
}
if(email.value.trim() == ''){
    document.querySelector('#emailAlert').classList.add('show');
    email.classList.add('errorInput');
    email.nextElementSibling.style.display = 'block';
    
}else if(!email.value.match(emailCharacters)){
    document.querySelector('#emailAlert').classList.add('show');
    email.classList.add('errorInput');
    email.nextElementSibling.style.display = 'block';
}

if(password.value.trim() == ''){
    document.querySelector('#passwordAlert').classList.add('show');
    password.classList.add('errorInput');
    password.nextElementSibling.style.display = 'block';
}

}

form.addEventListener('submit', showError);
