import {getHumanDate} from '../utils/dateHelper';

export default class CommitsCard {
  constructor(card) {
    this._card = card;
    
  }

  create() {
    const formatedDate = getHumanDate(this._card.commit.committer.date);

   return `<div class="swiper-slide commits-card">
   <p class="commits-card__date">${formatedDate}</p>
   <div class="commits-card__personal">
     <img class="commits-card__pic" src="${this._card.author.avatar_url}" alt="git-avatar">
     <div>
       <h3 class="commits-card__name">${this._card.commit.committer.name}</h3>
       <p class="commits-card__mail">${this._card.commit.committer.email}</p>
     </div>
   </div>
   <p class="commits-card__description">${this._card.commit.message}</p>
 </div>`
   

  }
}