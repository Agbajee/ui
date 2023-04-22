const nav = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
    nav.classList.remove('scrolled');
  } else {
    nav.classList.add('scrolled');

  }
});
