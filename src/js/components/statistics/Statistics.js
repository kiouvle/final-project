import {getDayOfWeek} from '../../utils/dateHelper';
import {getOccurenceNumber} from '../../utils/stringHelper';
import BaseComponent from '../base/BaseComponent';

export default class Statistics extends BaseComponent { //класс аналитики
  constructor(container, newsObject, searchString) {
    super(container);

    this._newsObject = newsObject;
    this._searchString = searchString;
    this._chartContent = this.findElement('.chart__content');
  }

  _groupNewsByDay() {  //собирает новости по дням недели
    const groupedNews = this._newsObject.reduce((statistics, newsItem) => {
      const date = new Date(newsItem.publishedAt);
      const day = date.getDate();
      const week = date.getDay();

      if (statistics[day]) {
        statistics[day].newsCount = statistics[day].newsCount + getOccurenceNumber(newsItem.title + newsItem.description, this._searchString) ;
      } else {
        statistics[day] = {newsCount: getOccurenceNumber(newsItem.title + newsItem.description, this._searchString), dayOfWeek: week};
      }

      return statistics;
    }, {})

    return groupedNews;
  }

  _renderDay(day, dayData) { 
    const chartLine = `<div class="chart__line">
    <div class="chart__line_day">${day}, ${getDayOfWeek(dayData.dayOfWeek)}</div>
    <div class="chart__line_news-count ${dayData.newsCount === 0 ? 'chart__line_news-count_zero' : ''}" style="width: ${dayData.newsCount}%"><span class="chart__line_news-count_num">${dayData.newsCount}</span>
    </div>
  </div>`;
  this._chartContent.insertAdjacentHTML('beforeend', chartLine);

  }

  render() {
    const groupedNews = this._groupNewsByDay();  //рисует таблицу
    Object.keys(groupedNews).sort((a, b) => a<b).forEach((day) => this._renderDay(day, groupedNews[day]));
  }
}