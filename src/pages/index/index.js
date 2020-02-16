import "./index.css";
import NewsApi from '../../js/modules/NewsApi';
import SearchInput from '../../js/components/SearchInput';
import NewsCardList from '../../js/components/NewsCardList';
import DataStorage from '../../js/modules/DataStorage';
import { newsApiConfig } from '../../js/constants/constants';
import HiddenElement from '../../js/components/HiddenElement';
import NewsCard from '../../js/components/NewsCard';

const newsApi = new NewsApi(newsApiConfig);

const preloader = new HiddenElement(document.querySelector('.preloader'), 'preloader_hidden');
const noResultBlock = new HiddenElement(document.querySelector('.not-found'), 'not-found_hidden');
const newsCardList = new NewsCardList(document.querySelector('.result'), NewsCard);
const dataStorage = new DataStorage();

function handleSearch(searchText) {
  preloader.show();
  searchInput.lockForm();
  noResultBlock.hide();
  newsCardList.hide();
  newsApi.getNews(searchText)
    .then((result) => {
      preloader.hide();
      searchInput.unlockForm();
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
    .catch((err) => {
      console.log(err);
      preloader.hide();
      searchInput.unlockForm();
    });
}

const searchInput = new SearchInput(document.querySelector('.search'), handleSearch);


