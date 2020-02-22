import BaseComponent from '../../js/components/BaseComponent';

export default class CommitsCardList extends BaseComponent { // список коммитов
  constructor(container, renderItemFunction) {
 super(container);
    this._cardsContainer = this.findElement('.commits-card-list__container');
    this._renderItemFunction = renderItemFunction;
  }

  render(cardsArray) {

    this._cardsContainer.insertAdjacentHTML('afterbegin', cardsArray.map((card) => this._renderItemFunction(card)).join(''));

  }
}