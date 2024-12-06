const arrow = document.querySelector('.arrow');
const blogger = document.querySelector('.blogger');
const share = document.querySelector('.share');
const arrowdos = document.querySelector('.arrowdos')
const triangle = document.querySelector('.triangle')


if (blogger.style.display === '') {
    blogger.style.display = 'flex';
}
if (share.style.display === '') {
    share.style.display = 'none';
}

function showNhide() {
    if (window.innerWidth < 768) {
        if (blogger.style.display === 'flex') {
            blogger.style.display = 'none';
        } else {
            blogger.style.display = 'flex';
        }
        if (share.style.display === 'none') {
            share.style.display = 'flex';
        } else {
            share.style.display = 'none';

        }
    } else {
        
        if (share.style.display === 'none') {
            share.style.display = 'flex';
            triangle.style.display = 'block';

        } else {
            share.style.display = 'none';
            triangle.style.display = 'none';

        }

    }
};

arrow.addEventListener('click', () => {
    showNhide()
});

arrowdos.addEventListener('click', () => {
    showNhide()
});
