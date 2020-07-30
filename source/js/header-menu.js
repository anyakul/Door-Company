'use strict';

var navToggle = document.querySelector('.header__toggle');
var navMain = document.querySelector('.header__menu');

navToggle.classList.remove('header__menu--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('header__menu--opened')) {
    navMain.classList.remove('header__menu--opened');
    navMain.classList.add('header__menu--closed');
  } else {
    navMain.classList.add('header__menu--opened');
    navMain.classList.remove('header__menu--closed');
  }
});
