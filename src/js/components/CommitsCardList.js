export default class CommitsCardList {
  constructor(container, commitCardClass) {
    this._container = container;
    this._cardsContainer = this._container.querySelector('.commits__container');
    this._commitCardClass = commitCardClass;
  }

  render(cardsArray) {

    this._cardsContainer.insertAdjacentHTML('afterbegin', cardsArray.map((card) => this.addCard(card)).join(''));

  }

  addCard(card) {
    const commitsCard = new this._commitCardClass(card);
    return commitsCard.create();
  }
}