import {getCurrentDate, getDateWeekAgo} from '../utils/dateHelper';
import {NEWS_NUMBER, NEWS_LANGUAGE} from '../constants/constants';

export default class NewsApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.apiKey = options.apiKey;
  }

  getNews(searchText) {
    const url = new URL(`${this.baseUrl}/everything`)
    const params = {apiKey: this.apiKey, q: searchText, from: getDateWeekAgo(), to: getCurrentDate(), pageSize: NEWS_NUMBER, language: NEWS_LANGUAGE} 

    url.search = new URLSearchParams(params).toString();

    return fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

}