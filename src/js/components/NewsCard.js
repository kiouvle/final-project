import {getHumanDate} from '../utils/dateHelper';

export default class NewsCard {
  constructor(card) {
    this._card = card;
    
  }

  create() {
  const formatedDate = getHumanDate(this._card.publishedAt);
   return `<a class="result-card" href="${this._card.url}" target="_blank">
          <img class="result-card__photo" src="${this._card.urlToImage}" alt="${this._card.title}">
          <div class="result-card__info">
            <p class="result-card__date">${formatedDate}</p>
            <h4 class="result-card__title">${this._card.title}</h4>
            <p class="result-card__text">${this._card.description}</p>
            <p class="result-card__source">${this._card.source.name}</p>
          </div>
        </a>`
  }
}