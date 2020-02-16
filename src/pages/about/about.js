import "./about.css";
import GithubApi from '../../js/modules/GithubApi';
import CommitsCardList from '../../js/components/CommitsCardList';
import Swiper from 'swiper';
import { githubApiConfig, swiperConfig } from '../../js/constants/constants'
import CommitsCard from '../../js/components/CommitsCard';


(function () {
  const githubApi = new GithubApi(githubApiConfig);
  const commitsCardList = new CommitsCardList(document.querySelector('.commits'), CommitsCard);

  githubApi.getCommits('kiouvle', 'final-project')
    .then((result) => {
      commitsCardList.render(result.slice(0, 20));
      const mySwiper = new Swiper('.swiper__container', swiperConfig);
    })
    .catch((err) => { console.log(err); });
})();