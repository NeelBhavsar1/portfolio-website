const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});


const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 600) {
      navMenu.classList.remove('show');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.zoomin');

  images.forEach(image => {
    image.addEventListener('click', () => {
      const modal = document.createElement('div');
      modal.style.position = 'fixed';
      modal.style.top = 0;
      modal.style.left = 0;
      modal.style.width = '100%';
      modal.style.height = '100%';
      modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
      modal.style.display = 'flex';
      modal.style.justifyContent = 'center';
      modal.style.alignItems = 'center';
      modal.style.zIndex = '9999';
      modal.innerHTML = `<img src="${image.src}" style="max-width: 90%; max-height: 90%; border-radius: 10px;" />`;


      modal.addEventListener('click', () => document.body.removeChild(modal));

      document.body.appendChild(modal);
    });
  });
});