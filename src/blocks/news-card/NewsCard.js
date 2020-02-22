import {getHumanDate} from '../../js/utils/dateHelper';
import {sanitizeHTML} from '../../js/utils/htmlHelper';

export default class NewsCard {  // новостные карточки
  constructor(card) {
    this._card = card;
    
  }

  create() {
  const formatedDate = getHumanDate(this._card.publishedAt);
  
   return `<a class="news-card" href="${sanitizeHTML(this._card.url)}" target="_blank">
          <div class="news-card__photo-wrapper">
            <img class="news-card__photo" src="${sanitizeHTML(this._card.urlToImage)}" alt="${sanitizeHTML(this._card.title)}">
          </div>
          <div class="news-card__info">
            <p class="news-card__date">${formatedDate}</p>
            <h4 class="news-card__title">${sanitizeHTML(this._card.title.substring(0,25))}...</h4>
            <p class="news-card__text">${sanitizeHTML(this._card.description.substring(0,90))}...</p>
            <p class="news-card__source">${sanitizeHTML(this._card.source.name)}</p>
          </div>
        </a>`
  }
}