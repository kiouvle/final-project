import "./about.css";
import GithubApi from '../../js/modules/GithubApi';
import CommitsCardList from '../../blocks/commits-card-list/CommitsCardList';
import Swiper from 'swiper';
import { GITHUB_API_CONFIG, SWIPER_CONFIG, GITHUB_ID, COMMITS_NUMBER } from '../../js/constants/constants'
import CommitsCard from '../../blocks/commits-card/CommitsCard';


const githubApi = new GithubApi(GITHUB_API_CONFIG);
const commitsCardList = new CommitsCardList(document.querySelector('.commits-card-list'), addCommitsCard);

githubApi.getCommits(GITHUB_ID, 'final-project')
  .then((result) => {
    commitsCardList.render(result.slice(0, COMMITS_NUMBER));
    const mySwiper = new Swiper('.swiper__container', SWIPER_CONFIG);
  })
  .catch((err) => { console.log(err); });

  function addCommitsCard(card) {
    const commitsCard = new CommitsCard(card);
    return commitsCard.create();
  }