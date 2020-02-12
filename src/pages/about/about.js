import "./about.css";
import GithubApi from '../../js/modules/GithubApi';
import CommitsCardList from '../../js/components/CommitsCardList';
import Swiper from 'swiper';

(function () {
  const serverUrl = NODE_ENV === 'development' ? 'https://api.github.com/repos' : 'https://api.github.com/repos';
  const githubApi = new GithubApi({
    baseUrl: serverUrl
  })
  const commitsCardList = new CommitsCardList(document.querySelector('.commits'));

  githubApi.getCommits('kiouvle', 'final-project')
    .then((result) => {
      commitsCardList.render(result.slice(0, 20));
      const mySwiper = new Swiper('.swiper__container', {
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
      })
    })
    .catch((err) => { console.log(err); });





})();