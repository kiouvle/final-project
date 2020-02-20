export default class CommitsCardList {
  constructor(container, renderItemFunction) {
    this._container = container;
    this._cardsContainer = this._container.querySelector('.commits__container');
    this._renderItemFunction = renderItemFunction;
  }

  render(cardsArray) {

    this._cardsContainer.insertAdjacentHTML('afterbegin', cardsArray.map((card) => this._renderItemFunction(card)).join(''));

  }
}