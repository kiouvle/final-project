import NewsCard from './NewsCard';

export default class NewsCardList {
  constructor(container) {
    this._container = container;
    this._cardsContainer = this._container.querySelector('.result__card-container');
  }

  render(cardsArray) {

    this._cardsContainer.insertAdjacentHTML('afterbegin', cardsArray.map((card) => this.addCard(card)).join(''));

  }

  addCard(card) {
    const newsCard = new NewsCard(card);
    return newsCard.create();
  }
}