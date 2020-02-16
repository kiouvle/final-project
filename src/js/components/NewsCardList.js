import NewsCard from './NewsCard';
import HiddenElement from './HiddenElement';

export default class NewsCardList extends HiddenElement {
  constructor(container) {
    super(container, 'result_hidden');
    
    this._container = container;
    this._cardsContainer = this._container.querySelector('.result__card-container');
    this._newsButton = this._container.querySelector('.result__button');
    this._newsButton.addEventListener('click', () => {
      this.showMore();
    })
  }

  showMore() {
    this._cardsContainer.insertAdjacentHTML('beforeend', this._cardsArray.splice(0, 3).map((card) => this.addCard(card)).join(''));
    if (this._cardsArray.length === 0) {
      this._newsButton.classList.add('result__button_hidden');
    } else {
      this._newsButton.classList.remove('result__button_hidden');
    }
  }

  render(cardsArray) {
    this._cardsArray = cardsArray;
    this._cardsContainer.innerHTML = '';
    this.showMore();

  }

  addCard(card) {
    const newsCard = new NewsCard(card);
    return newsCard.create();
  }
}