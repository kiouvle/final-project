export const NEWS_API_CONFIG = {
  baseUrl: 'https://newsapi.org/v2',
  apiKey: 'e2b345173b0a4b8b8c6d88b387688e25'
}

export const GITHUB_API_CONFIG = {
  baseUrl: 'https://api.github.com/repos'
}

export const SWIPER_CONFIG = {
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

//магические значения
export const GITHUB_ID = 'kiouvle';

export const COMMITS_NUMBER = 20;

export const NEWS_LANGUAGE = 'ru';

export const NEWS_NUMBER = 100;

export const SERVER_ERROR_MESSAGE = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.';

export const NOT_FOUND_MESSAGE = 'К сожалению по вашему запросу ничего не найдено.';
