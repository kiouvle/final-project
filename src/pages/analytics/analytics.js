import "./analytics.css";
import "../../blocks/chart/chart";
import DataStorage from '../../js/modules/DataStorage';
import Request from '../../js/components/Request';

(function () {

  const dataStorage = new DataStorage();
  const searchText = dataStorage.getSearchText();
  const newsNumber = dataStorage.getNewsNumber();
  const titleNumber = dataStorage.getNews().filter((newsItem)  => {
    return newsItem.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
  }).length;
  //TODO make shorter
  const request = new Request(document.querySelector('.request'));
  request.changeTitle(searchText);
  request.changeNewsNumber(newsNumber);
  request.changeTitleNumber(titleNumber);



})();