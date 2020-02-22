import {getDayOfWeek} from '../../js/utils/dateHelper';
import {getOccurenceNumber} from '../../js/utils/stringHelper';
import BaseComponent from '../../js/components/BaseComponent';

export default class Statistics extends BaseComponent { //класс аналитики
  constructor(container, newsObject, searchString) {
    super(container);

    this._newsObject = newsObject;
    this._searchString = searchString;
    this._statisticsContent = this.findElement('.statistics__content');
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
    const statisticsLine = `<div class="statistics__line">
    <div class="statistics__line_day">${day}, ${getDayOfWeek(dayData.dayOfWeek)}</div>
    <div class="statistics__line_news-count ${dayData.newsCount === 0 ? 'statistics__line_news-count_zero' : ''}" style="width: ${dayData.newsCount}%"><span class="statistics__line_news-count_num">${dayData.newsCount}</span>
    </div>
  </div>`;
  this._statisticsContent.insertAdjacentHTML('beforeend', statisticsLine);

  }

  render() {
    const groupedNews = this._groupNewsByDay();  //рисует таблицу
    Object.keys(groupedNews).sort((a, b) => a<b).forEach((day) => this._renderDay(day, groupedNews[day]));
  }
}