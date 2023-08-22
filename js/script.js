const slider = document.querySelector('.slider');
const images = Array.from(slider.children);
let currentIndex = 0;

// Set the initial position
let offset = -currentIndex * slider.clientWidth;
slider.style.transform = `translateX(${offset}px)`;

function slideImages() {
  currentIndex = (currentIndex + 1) % images.length;
  offset = -currentIndex * slider.clientWidth;
  slider.style.transform = `translateX(${offset}px)`;
}

// Slide images every 3 seconds
setInterval(slideImages, 3000);