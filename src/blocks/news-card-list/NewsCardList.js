import HiddenElement from '../../js/components/HiddenElement';

export default class NewsCardList extends HiddenElement { // список новостей
  constructor(container, renderNewsCardFunction) {
    super(container, 'news-card-list_hidden');

    this._renderNewsCardFunction = renderNewsCardFunction;  // функция для отрисовки карточек

    this._cardsContainer = this.findElement('.news-card-list__card-container');
    this._newsButton = this.findElement('.news-card-list__button');

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

    if (!this._cardsArray.length) {
      this._newsButton.classList.add('news-card-list__button_hidden');
    } else {
      this._newsButton.classList.remove('news-card-list__button_hidden');
    }
  }

  render(cardsArray) {
    this._cardsArray = cardsArray;
    this._cardsContainer.innerHTML = '';

    this._showMore();
  }
}