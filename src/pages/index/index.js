import "./index.css";
import NewsApi from '../../js/modules/NewsApi';
import SearchInput from '../../js/components/SearchInput';
import Preloader from '../../js/components/Preloader';
import NotFound from '../../js/components/NotFound';
import NewsCardList from '../../js/components/NewsCardList';

(function () {
  const serverUrl = NODE_ENV === 'development' ? 'https://newsapi.org/v2' : 'https://newsapi.org/v2';
  const newsApi = new NewsApi({
    baseUrl: serverUrl,
    apiKey: 'e2b345173b0a4b8b8c6d88b387688e25'
  })

  const preloader = new Preloader(document.querySelector('.preloader'));
  const notFound = new NotFound(document.querySelector('.not-found'));
  const newsCardList = new NewsCardList(document.querySelector('.result'));

  const searchInput = new SearchInput(document.querySelector('.search'), function (searchText) {
    preloader.show();
    notFound.hide();
    newsApi.getNews(searchText)
      .then((result) => {
        console.log(result);
        preloader.hide();
        newsCardList.render(result.articles);
        if (result.totalResults === 0) {
          notFound.show()
        } 
      })
      .catch((err) => { console.log(err); preloader.hide(); });

  })


})();