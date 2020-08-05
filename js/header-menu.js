'use strict';

var navToggle = document.querySelector('.header__toggle');
var navMain = document.querySelector('.header__nav');

navToggle.classList.remove('header__menu--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('header__nav--opened')) {
    navMain.classList.remove('header__nav--opened');
    navMain.classList.add('header__nav--closed');
  } else {
    navMain.classList.add('header__nav--opened');
    navMain.classList.remove('header__nav--closed');
  }
});
