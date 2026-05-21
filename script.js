const burgerButton = document.getElementById('burgerButton');
const mobileMenu = document.getElementById('mobileMenu');
const siteNav = document.getElementById('siteNav');

if (burgerButton && mobileMenu) {
  burgerButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

mobileMenu.addEventListener('click', (event) => {
  if (event.target === mobileMenu) {
    mobileMenu.classList.remove('open');
  }
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
