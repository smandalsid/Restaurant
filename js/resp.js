burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navbarleft = document.querySelector('.navbar-left')
navbarright = document.querySelector('.navbar-right')

burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav-resp');
    navbarleft.classList.toggle('v-class-resp');
    navbarright.classList.toggle('v-class-resp');
})