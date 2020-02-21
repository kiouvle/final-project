import {getHumanDate} from '../../js/utils/dateHelper';
import {sanitizeHTML} from '../../js/utils/htmlHelper';

export default class NewsCard {  // новостные карточки
  constructor(card) {
    this._card = card;
    
  }

  create() {
  const formatedDate = getHumanDate(this._card.publishedAt);
  
   return `<a class="result-card" href="${sanitizeHTML(this._card.url)}" target="_blank">
          <div class="result-card__photo-wrapper">
            <img class="result-card__photo" src="${sanitizeHTML(this._card.urlToImage)}" alt="${sanitizeHTML(this._card.title)}">
          </div>
          <div class="result-card__info">
            <p class="result-card__date">${formatedDate}</p>
            <h4 class="result-card__title">${sanitizeHTML(this._card.title.substring(0,25))}...</h4>
            <p class="result-card__text">${sanitizeHTML(this._card.description.substring(0,90))}...</p>
            <p class="result-card__source">${sanitizeHTML(this._card.source.name)}</p>
          </div>
        </a>`
  }
}