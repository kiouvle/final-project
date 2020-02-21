import BaseComponent from '../base-component/BaseComponent';

export default class CommitsCardList extends BaseComponent { // список коммитов
  constructor(container, renderItemFunction) {
 super(container);
    this._cardsContainer = this.findElement('.commits__container');
    this._renderItemFunction = renderItemFunction;
  }

  render(cardsArray) {

    this._cardsContainer.insertAdjacentHTML('afterbegin', cardsArray.map((card) => this._renderItemFunction(card)).join(''));

  }
}