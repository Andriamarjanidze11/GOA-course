let div = document.querySelector('div');

function increaseDivSize() {
    div.classList.add('bigDiv');
    div.classList.remove('smallDiv')
}

function decreaseDivSize() {
    div.classList.add('smallDiv');
    div.classList.remove('bigDiv')
}