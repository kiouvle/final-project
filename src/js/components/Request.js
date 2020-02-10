export default class Request {
  constructor(container) {
    this._container = container;
    this._title = this._container.querySelector('.request__title');
    this._newsNumber = this._container.querySelector('.request__number_news');
    this._titleNumber  = this._container.querySelector('.request__number_titles');
  }

  changeTitle(titleText) {
    this._title.textContent = `Вы спросили: «${titleText}»`;
  }

  changeNewsNumber(newsNumber) {
    this._newsNumber.textContent = `${newsNumber}`;
  }

  changeTitleNumber(titleNumber) {
    this._titleNumber.textContent = `${titleNumber}`;
  }
}