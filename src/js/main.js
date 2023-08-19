

const slider = document.querySelector('.slider');
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;

slider.addEventListener('mousedown', (e) => {
  isDragging = true;
  startPosition = e.clientX - slider.offsetLeft;
  prevTranslate = currentTranslate;

  slider.style.transition = 'none';
});

slider.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const currentPosition = e.clientX - slider.offsetLeft;
  currentTranslate = prevTranslate + currentPosition - startPosition;
});

slider.addEventListener('mouseup', () => {
  isDragging = false;
  slider.style.transition = 'transform 0.3s ease-in-out';
  prevTranslate = currentTranslate;

  // Snap to the nearest product
  const snapToProduct = Math.round(currentTranslate / slider.offsetWidth) * slider.offsetWidth;
  currentTranslate = snapToProduct;

  slider.style.transform = `translateX(${currentTranslate}px)`;
});

slider.addEventListener('mouseleave', () => {
  isDragging = false;
  slider.style.transition = 'transform 0.3s ease-in-out';
  currentTranslate = prevTranslate;

  slider.style.transform = `translateX(${currentTranslate}px)`;
});
