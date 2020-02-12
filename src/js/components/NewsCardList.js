import NewsCard from './NewsCard';

export default class NewsCardList {
  constructor(container) {
    this._container = container;
    this._cardsContainer = this._container.querySelector('.result__card-container');
    this._newsButton = this._container.querySelector('.result__button');
    this._newsButton.addEventListener('click', () => {
      this.showMore();
    })
  }

  showMore() {
    this._cardsContainer.insertAdjacentHTML('beforeend', this._cardsArray.splice(0,3).map((card) => this.addCard(card)).join(''));

  }

  render(cardsArray) {
this._cardsArray = cardsArray;
  this.showMore();

  }

  addCard(card) {
    const newsCard = new NewsCard(card);
    return newsCard.create();
  }
}