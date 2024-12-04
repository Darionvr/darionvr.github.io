const questions = document.querySelectorAll('.question')

questions.forEach(question => {
    question.addEventListener('click', () => {

        const answer = question.nextElementSibling;
        const iconPlus = question.querySelector('#icon-plus'); 
        const iconMinus = question.querySelector('#icon-minus');

        answer.classList.toggle('active');
        if (answer.classList.contains('active')) {
            iconPlus.style.display = 'none';
            iconMinus.style.display = 'block';
        } else {
            iconPlus.style.display = 'block';
            iconMinus.style.display = 'none';
        }

    })

});