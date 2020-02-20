import {getDayOfWeek} from '../../utils/dateHelper';
import {getOccurenceNumber} from '../../utils/stringHelper';

export default class Statistics {
  constructor(container, newsObj, searchString) {
    this._container = container;
    this._newsObj = newsObj;
    this._searchString = searchString;
    this._chartContent = this._container.querySelector('.chart__content');
  }

  _groupNewsByDay() {
    const groupedNews = this._newsObj.reduce((acc, newsItem) => {
      const date = new Date(newsItem.publishedAt);
      const day = date.getDate();
      const week = date.getDay();
      if (acc[day]) {
        acc[day].newsCount = acc[day].newsCount + getOccurenceNumber(newsItem.title + newsItem.description, this._searchString) ;
      } else {
        acc[day] = {newsCount: getOccurenceNumber(newsItem.title + newsItem.description, this._searchString), dayOfWeek: week};
      }
      return acc;
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
    const groupedNews = this._groupNewsByDay();
    Object.keys(groupedNews).sort((a, b) => a<b).forEach((day) => this._renderDay(day, groupedNews[day]));
  }
}