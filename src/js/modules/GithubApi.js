export default class GithubApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
  }
  
  getCommits(name, repository) {
    const url = new URL(`${this.baseUrl}/${name}/${repository}/commits`)

    return fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

}