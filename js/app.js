/* ****************** */
/* Menu show and hide */
/* ****************** */

const menuListBtn = document.querySelector('.places-menu-btn');
const menuListIcon = document.querySelector('.places-menu-btn-arrow');
const menuList = document.querySelector('.places-list');

menuListBtn.addEventListener('click', () => {
  menuList.classList.toggle('places-list-active');
  menuListIcon.classList.toggle('arrow-active');
});

/* ****************** */
/* Animations products containers */
/* ****************** */

const products = document.querySelectorAll('.wrapper-2-product-container');
const productsMenu = document.querySelector('.wrapper-2-menu');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle(
        'product-container-active',
        entry.isIntersecting
      );
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  { threshold: 0.25 }
);

products.forEach((product) => {
  observer.observe(product);
});

/* ****************** */
/* Animation products menu */
/* ****************** */

const productsMenuTrigger = document.querySelector('.wrapper-1');

const observer2 = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting === false)
    productsMenu.classList.add('wrapper-2-menu-active');
  else {
    productsMenu.classList.remove('wrapper-2-menu-active');
  }
});

observer2.observe(productsMenuTrigger);

/* ****************** */
/* Products menu items color on sections */
/* ****************** */

const productsMenuItems = document.querySelectorAll('.wrapper-2-menu-item');

const observer3 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      let menuOrder = entry.target.id - 1;
      if (entry.isIntersecting === true) {
        productsMenuItems.forEach((item) => {
          item.classList.remove('wrapper-2-menu-item-active');
        });
        productsMenuItems[menuOrder].classList.add(
          'wrapper-2-menu-item-active'
        );
      }
    });
  },
  { threshold: 0.5 }
);

products.forEach((product) => {
  observer3.observe(product);
});
