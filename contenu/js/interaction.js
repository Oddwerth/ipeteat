var toggle = document.querySelector(".nav-toggle");
var menu = document.querySelector(".menu");
var page = document.querySelector('html');

function doToggle() {
    menu.classList.toggle('open');
    toggle.classList.toggle('active');
    page.classList.toggle('noscroll');
}

toggle.addEventListener('click', doToggle);