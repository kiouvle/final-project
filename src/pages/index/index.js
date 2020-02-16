import "./index.css";
import NewsApi from '../../js/modules/NewsApi';
import SearchInput from '../../js/components/SearchInput';
import NewsCardList from '../../js/components/NewsCardList';
import DataStorage from '../../js/modules/DataStorage';
import {newsApiConfig} from '../../js/constants/constants';
import HiddenElement from '../../js/components/HiddenElement';


(function () {
  const newsApi = new NewsApi(newsApiConfig);

  const preloader = new HiddenElement(document.querySelector('.preloader'), 'preloader_hidden');
  const noResultBlock = new HiddenElement(document.querySelector('.not-found'), 'not-found_hidden');
  const newsCardList = new NewsCardList(document.querySelector('.result'));  
  const dataStorage = new DataStorage(); 

  const searchInput = new SearchInput(document.querySelector('.search'), function (searchText) {
    preloader.show();
    noResultBlock.hide();
    newsCardList.hide();
    newsApi.getNews(searchText)
      .then((result) => {
        preloader.hide();
        dataStorage.setSearchText(searchText);
        dataStorage.setNews(result.articles);
        dataStorage.setNewsNumber(result.totalResults);
        if (result.totalResults === 0) {
          noResultBlock.show();
        } else {
          newsCardList.show();
          newsCardList.render(result.articles);
        }
      })
      .catch((err) => { console.log(err); preloader.hide(); });

  })


})();