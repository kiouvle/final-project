import "./analytics.css";
import "../../blocks/chart/chart";
import DataStorage from '../../js/modules/DataStorage';
import Request from '../../js/components/request/Request';
import Statistics from '../../js/components/statistics/Statistics';
import { getOccurenceNumber } from '../../js/utils/stringHelper';

const dataStorage = new DataStorage();
const searchText = dataStorage.getSearchText();
const statistics = new Statistics(document.querySelector('.chart'), dataStorage.getNews(), searchText);
const newsNumber = dataStorage.getNewsNumber();
const titleNumber = dataStorage.getNews().reduce((acc, newsItem) => {
  return acc + getOccurenceNumber(newsItem.title, searchText);
}, 0);
const request = new Request(document.querySelector('.request'));

request.changeTitle(searchText);
request.changeNewsNumber(newsNumber);
request.changeTitleNumber(titleNumber);
statistics.render();



