import HiddenElement from './HiddenElement';

export default class NoResultBlock extends HiddenElement {
  constructor(container) {
    super(container, 'not-found_hidden');
    this._description = this._container.querySelector('.not-found__message');

  }

  _setDescriptionText(text) {
    this._description.textContent = text;
  }

  showServerErrorMessage() {
    this._setDescriptionText('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.')
    this.show();
  }

  showNotFoundMessage() {
    this._setDescriptionText('К сожалению по вашему запросу ничего не найдено.');
    this.show();
  }
}

