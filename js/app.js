const menuListBtn = document.querySelector('.places-menu-btn');
const menuListIcon = document.querySelector('.places-menu-btn-arrow');
const menuList = document.querySelector('.places-list');

menuListBtn.addEventListener('click', () => {
  menuList.classList.toggle('places-list-active');
  menuListIcon.classList.toggle('arrow-active');
});
