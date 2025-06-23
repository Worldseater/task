// Карусель для .solutions__carousel

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.solutions__carousel');
  if (!carousel) return;
  const images = [...carousel.querySelectorAll('img[class^="carousel__pic"]')];
  const leftBtn = document.querySelector('.carousel__arrowLeft');
  const rightBtn = document.querySelector('.carousel__arrowRight');
  let currentIndex = 0;
  const total = images.length;

  function updateCarousel() {
    images.forEach((img, i) => {
      const pos = (i - currentIndex + total) % total;
      img.style.display = pos < 4 ? 'block' : 'none';
      img.style.order = pos;
    });
  }

  [leftBtn, rightBtn].forEach((btn, dir) => {
    if (btn) btn.addEventListener('click', () => {
      currentIndex = (currentIndex + (dir ? 1 : -1) + total) % total;
      updateCarousel();
    });
  });

  updateCarousel();
});
