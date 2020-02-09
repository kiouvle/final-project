export default class NewsApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.apiKey = options.apiKey;
  }

  getNews(searchText) {
    const url = new URL(`${this.baseUrl}/everything`)
    // TODO вычислять даты динамически
    const params = {apiKey: this.apiKey, q: searchText, from: '2020-02-01', to: '2020-02-08', pageSize: 100} 

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