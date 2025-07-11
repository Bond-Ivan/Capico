const burger = document.querySelector('.burger');
const navMobile = document.querySelector('.header__nav-mobile');
const navMobileWrapper = document.querySelector('.header__nav-mobile__wrapper');
const menuButtonContainer = document.querySelector('.menu-button-container');
const navLinks = document.querySelectorAll('.header__nav-item__btn');
const menuToggle = document.getElementById('menu-toggle');

menuButtonContainer.addEventListener('click', (event) => {
  event.stopPropagation();
});

burger.addEventListener('click', () => {
  navMobileWrapper.classList.toggle('header__nav-mobile__wrapper--active');
  navMobile.classList.toggle('header__nav-mobile--active');

  if (navMobileWrapper.classList.contains('header__nav-mobile__wrapper--active')) {
    burger.style.position = 'fixed';
  } else {
    burger.style.position = '';
  }
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.checked = false;

    burger.style.position = '';
    navMobileWrapper.classList.remove('header__nav-mobile__wrapper--active');
    navMobile.classList.remove('header__nav-mobile--active');
  });
});