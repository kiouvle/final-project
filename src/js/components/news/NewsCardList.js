import HiddenElement from '../base/HiddenElement';

export default class NewsCardList extends HiddenElement { // список новостей
  constructor(container, renderNewsCardFunction) {
    super(container, 'result_hidden');

    this._renderNewsCardFunction = renderNewsCardFunction;  // функция для отрисовки карточек

    this._cardsContainer = this.findElement('.result__card-container');
    this._newsButton = this.findElement('.result__button');

    this._setHandlers([ //установка обработчиков событий
      { element: this._newsButton, event: 'click', handler: this._handleClick.bind(this) }
    ]);
  }

  _handleClick() {    // обработчик кнопки показать еще
    this._showMore();
  }

  _showMore() { //метод дорисовки новостей
    const numberOfNewsPerPage = 3;

    this._cardsContainer.insertAdjacentHTML('beforeend', this._cardsArray.splice(0, numberOfNewsPerPage).map((card) => this._renderNewsCardFunction(card)).join(''));

    if (this._cardsArray.length === 0) {
      this._newsButton.classList.add('result__button_hidden');
    } else {
      this._newsButton.classList.remove('result__button_hidden');
    }
  }

  render(cardsArray) {
    this._cardsArray = cardsArray;
    this._cardsContainer.innerHTML = '';

    this._showMore();
  }
}