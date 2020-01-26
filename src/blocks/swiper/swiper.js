import Swiper from 'swiper';

var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 8,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    
  },
})