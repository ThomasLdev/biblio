/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

// start the Stimulus application
import './bootstrap';

// MOBILE NAVBAR SLIDE
const navSlide = () => {
    const burger = document.querySelector('.navbar_burger');
    const nav = document.querySelector('.navbar_nav');
    const link = document.querySelector('.navbar_nav-link')
// TOGGLE NAV
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        // BURGER ANIMATION
        burger.classList.toggle('toggle');
    });
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        // BURGER ANIMATION
        burger.classList.remove('toggle');
    });


}
navSlide();
