import {getHumanDate} from '../utils/dateHelper';

export default class NewsCard {
  constructor(card) {
    this._card = card;
    
  }

  create() {
  const formatedDate = getHumanDate(this._card.publishedAt);
  
   return `<a class="result-card" href="${this._card.url}" target="_blank">
          <div class="result-card__photo-wrapper">
            <img class="result-card__photo" src="${this._card.urlToImage}" alt="${this._card.title}">
          </div>
          <div class="result-card__info">
            <p class="result-card__date">${formatedDate}</p>
            <h4 class="result-card__title">${this._card.title.substring(0,25)}...</h4>
            <p class="result-card__text">${this._card.description.substring(0,90)}...</p>
            <p class="result-card__source">${this._card.source.name}</p>
          </div>
        </a>`
  }
}