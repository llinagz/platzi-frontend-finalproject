//Desktop
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

//Mobile
const mobileHamburguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenu.classList.remove('activo');
mobileHamburguer.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    mobileMenu.classList.toggle('activo');
}