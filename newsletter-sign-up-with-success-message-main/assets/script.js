const emailInput = document.querySelector('#email')
const submitbutton = document.querySelector('.submitbutton')
const valid = document.querySelector('.valid')
const form = document.querySelector('form')
const main = document.querySelector('main')
const success = document.querySelector('.success')
const confirmation = document.querySelector('.confirmation')
const dismiss = document.querySelector('.dismiss')


function showError(event) {

    event.preventDefault();

    const emailCharacters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailInput.value.trim() == '' || !emailInput.value.match(emailCharacters)) {
        emailInput.classList.add('invalid');
        valid.style.display = 'block';
    } else {
        emailInput.classList.remove('invalid');
        valid.style.display = 'none';
        main.style.display = 'none'
        success.style.display = 'flex'
        confirmation.innerHTML = `A confirmation email has been sent to <strong> ${emailInput.value} </strong>.
      Please open it and click the button inside to confirm your subscription.`

    }
}


function resetForm() {
    emailInput.classList.remove('invalid');
    valid.style.display = 'none';
    emailInput.value = '';
    main.style.display = 'flex';
    success.style.display = 'none';
    confirmation.innerHTML = '';
}



form.addEventListener('submit', showError);
dismiss.addEventListener('click', () =>{
resetForm()
})