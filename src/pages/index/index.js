import "./index.css";
import NewsApi from '../../js/modules/NewsApi';
import SearchInput from '../../js/components/SearchInput';
import Preloader from '../../js/components/Preloader';
import NotFound from '../../js/components/NotFound';
import NewsCardList from '../../js/components/NewsCardList';
import DataStorage from '../../js/modules/DataStorage';
import {newsApiConfig} from '../../js/constants/constants';


(function () {
  const newsApi = new NewsApi(newsApiConfig);

  const preloader = new Preloader(document.querySelector('.preloader'));
  const notFound = new NotFound(document.querySelector('.not-found'));
  const newsCardList = new NewsCardList(document.querySelector('.result'));  
  const dataStorage = new DataStorage(); 

  const searchInput = new SearchInput(document.querySelector('.search'), function (searchText) {
    preloader.show();
    notFound.hide();
    newsApi.getNews(searchText)
      .then((result) => {
        preloader.hide();
        newsCardList.show();
        newsCardList.render(result.articles);
        dataStorage.setSearchText(searchText);
        dataStorage.setNews(result.articles);
        dataStorage.setNewsNumber(result.totalResults);
        if (result.totalResults === 0) {
          notFound.show()
        } 
      })
      .catch((err) => { console.log(err); preloader.hide(); });

  })


})();