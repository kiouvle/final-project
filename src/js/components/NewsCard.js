export default class NewsCard {
  constructor(card) {
    this._card = card;
    
  }

  create() {
   return `<div class="result-card">
          <img class="result-card__photo" src="${this._card.urlToImage}" alt="${this._card.title}">
          <div class="result-card__info">
            <p class="result-card__date">${this._card.publishedAt}</p>
            <h4 class="result-card__title">${this._card.title}</h4>
            <p class="result-card__text">${this._card.description}</p>
            <a class="result-card__source">${this._card.source.name}</a>
          </div>
        </div>`
  }
}