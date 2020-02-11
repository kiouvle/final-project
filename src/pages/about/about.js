import "./about.css";
import "../../blocks/swiper/swiper.js";
import GithubApi from '../../js/modules/GithubApi';

(function () {
  const serverUrl = NODE_ENV === 'development' ? 'https://api.github.com/repos' : 'https://api.github.com/repos';
const githubApi = new GithubApi({
  baseUrl: serverUrl
})

githubApi.getCommits('kiouvle', 'final-project')
.then((result) => {

  console.log(result);
})
.catch((err) => { console.log(err); });



})();