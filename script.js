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

const mailtoLinks = document.querySelectorAll('a.mailto-link');
const isDesktop = !/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

mailtoLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    if (isDesktop) {
      event.preventDefault();
      const email = link.href.replace(/mailto:/i, '');
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`, '_blank');
    }
  });
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
