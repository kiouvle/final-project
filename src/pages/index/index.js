import "./index.css";
import NewsApi from '../../js/modules/NewsApi';
import SearchInput from '../../js/components/search/SearchInput';
import NewsCardList from '../../js/components/news/NewsCardList';
import DataStorage from '../../js/modules/DataStorage';
import { newsApiConfig } from '../../js/constants/constants';
import HiddenElement from '../../js/components/base/HiddenElement';
import NewsCard from '../../js/components/news/NewsCard';
import NoResultBlock from '../../js/components/base/NoResultBlock';

const newsApi = new NewsApi(newsApiConfig);

const preloader = new HiddenElement(document.querySelector('.preloader'), 'preloader_hidden');
const noResultBlock = new NoResultBlock(document.querySelector('.not-found'));
const newsCardList = new NewsCardList(document.querySelector('.result'), addNewsCard);


const dataStorage = new DataStorage();
const searchTextFromDataStorage = dataStorage.getSearchText();
const newsFromDataStorage = dataStorage.getNews();
const totalResultsFromDataStorage = dataStorage.getNewsNumber();

function addNewsCard(card) {
  const newsCard = new NewsCard(card);
  return newsCard.create();
}

function renderNewsFromData(totalResults, news) { //отрисовка новостей из данных
  if (totalResults === 0) {
    noResultBlock.showNotFoundMessage();
  } else {
    newsCardList.show();
    newsCardList.render(news);
  }
}

function hideBlocksBeforeRender() {
  noResultBlock.hide();
  newsCardList.hide();
}

function handleSearch(event) {
  const searchText = event.detail;

  searchInput.lockForm();
  preloader.show();

  hideBlocksBeforeRender();

  newsApi.getNews(searchText)  //поиск новостей
    .then((result) => { //успех
      preloader.hide();
      searchInput.unlockForm();
      dataStorage.setSearchText(searchText);
      dataStorage.setNews(result.articles);
      dataStorage.setNewsNumber(result.totalResults);

      renderNewsFromData(result.totalResults, result.articles);
    })
    .catch((err) => {  //ошибка
      console.log(err);
      preloader.hide();
      searchInput.unlockForm();
      noResultBlock.showServerErrorMessage();
    });
}

const searchInput = new SearchInput(document.querySelector('.search'), [{ event: 'search', handler: handleSearch }]);

function checkDataStorageData() {  //проверка локального хранилища на наличие данных
  if (searchTextFromDataStorage) {
    searchInput.setSearchText(searchTextFromDataStorage);
    hideBlocksBeforeRender();
    renderNewsFromData(totalResultsFromDataStorage, newsFromDataStorage);
  }
}

checkDataStorageData();