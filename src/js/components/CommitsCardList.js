import CommitsCard from './CommitsCard';

export default class CommitsCardList {
  constructor(container) {
    this._container = container;
    this._cardsContainer = this._container.querySelector('.commits__container');
  }

  render(cardsArray) {

    this._cardsContainer.insertAdjacentHTML('afterbegin', cardsArray.map((card) => this.addCard(card)).join(''));

  }

  addCard(card) {
    const commitsCard = new CommitsCard(card);
    return commitsCard.create();
  }
}