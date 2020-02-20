import BaseComponent from '../base/BaseComponent';

export default class Request extends BaseComponent { //информация о запросе на странице аналитики
  constructor(container) {
    super(container);

    this._title = this.findElement('.request__title');
    this._newsNumber = this.findElement('.request__number_news');
    this._titleNumber  = this.findElement('.request__number_titles');
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