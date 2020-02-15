import "./analytics.css";
import "../../blocks/chart/chart";
import DataStorage from '../../js/modules/DataStorage';
import Request from '../../js/components/Request';
import Statistics from '../../js/components/Statistics';
import {getOccurenceNumber} from '../../js/utils/stringHelper';

(function () {

  const dataStorage = new DataStorage();
  const searchText = dataStorage.getSearchText();
  const statistics = new Statistics(document.querySelector('.chart'), dataStorage.getNews(), searchText);
  statistics.render();
  const newsNumber = dataStorage.getNewsNumber();
  const titleNumber = dataStorage.getNews().reduce((acc, newsItem)  => {
    return acc + getOccurenceNumber(newsItem.title, searchText);
  }, 0);
  //TODO make shorter
  const request = new Request(document.querySelector('.request'));
  request.changeTitle(searchText);
  request.changeNewsNumber(newsNumber);
  request.changeTitleNumber(titleNumber);



})();