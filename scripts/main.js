document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');

  if (btn && menu) {
    btn.addEventListener('click', () => menu.classList.toggle('hidden'));
  }
});

// Hero slider
const slides = document.getElementById('heroSlides');
const totalSlides = slides.children.length;
let index = 0;
function showNextSlide() {
    index = (index + 1) % totalSlides;
    slides.style.transform = `translateX(-${index * 100}%)`;
}
setInterval(showNextSlide, 5000);