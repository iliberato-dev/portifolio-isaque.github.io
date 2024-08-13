const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', () => {
    mobileNavbar.classList.toggle('active');

    if (mobileNavbar.classList.contains('active')) {
        button.src = 'https://cdn-icons-png.flaticon.com/512/1/1766.png'
    } else {
        button.src = '../assets/menu.svg'
    }




});

window.addEventListener('scroll', () => {
    if (this.window.pageYOffset > 0) {
        mobileNavbar.classList.remove('active');
        button.src = '../assets/menu.svg'

    }
})

