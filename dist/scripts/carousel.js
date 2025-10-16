const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;

function updateCarousel(index) {
  // Cambiar el slide visible
  document.querySelector('.carousel-slide.active').classList.remove('active');
  slides[index].classList.add('active');

  // Cambiar el indicador activo
  document.querySelector('.indicator.active').classList.remove('active');
  indicators[index].classList.add('active');

  // Actualizar la posición del carrusel
  const container = document.querySelector('.carousel-container');
  container.style.transform = `translateX(-${index * 100}%)`;
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel(currentIndex);
}

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel(currentIndex);
}

// Eventos de los botones
nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);

// Eventos de los indicadores
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel(currentIndex);
  });
});