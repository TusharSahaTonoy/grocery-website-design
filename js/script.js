let menu = document.querySelector('#menu-bar');
let navabar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navabar.classList.toggle('active');
});

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navabar.classList.remove('active');
};