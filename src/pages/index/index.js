import "./index.css";
import NewsApi from '../../js/modules/NewsApi';
import SearchInput from '../../blocks/search-input/SearchInput';
import NewsCardList from '../../blocks/news-card-list/NewsCardList';
import DataStorage from '../../js/modules/DataStorage';
import { NEWS_API_CONFIG } from '../../js/constants/constants';
import HiddenElement from '../../js/components/HiddenElement';
import NewsCard from '../../blocks/news-card/NewsCard';
import NoResultBlock from '../../blocks/no-result/NoResultBlock';

const newsApi = new NewsApi(NEWS_API_CONFIG);

const preloader = new HiddenElement(document.querySelector('.preloader'), 'preloader_hidden');
const noResultBlock = new NoResultBlock(document.querySelector('.no-result'));
const newsCardList = new NewsCardList(document.querySelector('.news-card-list'), addNewsCard);


const dataStorage = new DataStorage();
const searchTextFromDataStorage = dataStorage.getSearchText();
const newsFromDataStorage = dataStorage.getNews();
const totalResultsFromDataStorage = dataStorage.getNewsNumber();

function addNewsCard(card) {
  const newsCard = new NewsCard(card);
  return newsCard.create();
}

function renderNewsFromData(totalResults, news) { //отрисовка новостей из данных
  if (!totalResults) {
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

function handleSearch(searchText) {  
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
      preloader.hide();
      searchInput.unlockForm();
      noResultBlock.showServerErrorMessage();
    });
}

const searchInput = new SearchInput(document.querySelector('.search-input'), handleSearch);

function checkDataStorageData() {  //проверка локального хранилища на наличие данных
  if (searchTextFromDataStorage) {
    searchInput.setSearchText(searchTextFromDataStorage);
    hideBlocksBeforeRender();
    renderNewsFromData(totalResultsFromDataStorage, newsFromDataStorage);
  }
}

checkDataStorageData();