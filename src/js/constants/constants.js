export const newsApiConfig = {
  baseUrl: 'https://newsapi.org/v2',
  apiKey: 'e2b345173b0a4b8b8c6d88b387688e25'
}

export const githubApiConfig = {
  baseUrl: 'https://api.github.com/repos'
}

export const swiperConfig = {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 8,

  // If we need pagination
  pagination: {
    el: '.swiper__pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper__button_next',
    prevEl: '.swiper__button_prev',
  },
}

