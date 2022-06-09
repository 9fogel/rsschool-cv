const navigation = document.querySelector('.navigation');
const burgerMenu = document.querySelector('.burger');
const closeMenu = document.querySelector('.nav-close')

burgerMenu.onclick = function () {
  navigation.classList.add('navigation-active');
}

closeMenu.onclick = function () {
  navigation.classList.remove('navigation-active');
}