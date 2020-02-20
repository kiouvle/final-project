export default class DataStorage {

  setSearchText(searchText) {
    localStorage.setItem('textStorage', searchText);
  }

  getSearchText() {
    return localStorage.getItem('textStorage');
  }

  setNewsNumber(newsNumber) {
    localStorage.setItem('newsNumberStorage', newsNumber);
  }

  getNewsNumber() {
    return parseInt(localStorage.getItem('newsNumberStorage'));
  }

  setNews(news) {
    localStorage.setItem('newsStorage', JSON.stringify(news));
  }

  getNews() {
    return JSON.parse(localStorage.getItem('newsStorage'));
  }

}