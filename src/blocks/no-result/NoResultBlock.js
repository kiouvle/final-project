import HiddenElement from '../../js/components/HiddenElement';

export default class NoResultBlock extends HiddenElement {
  constructor(container) {
    super(container, 'no-result_hidden');
    this._description = this.findElement('.no-result__message');  //использование метода BaseComponent для поиска
  }

  _setDescriptionText(text) {  //замена текста блока не найдено
    this._description.textContent = text;
  }

  showServerErrorMessage() { //не найдено для случаев ошибки
    this._setDescriptionText('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.')
    this.show();
  }

  showNotFoundMessage() { //не найдено для неверного запроса
    this._setDescriptionText('К сожалению по вашему запросу ничего не найдено.');
    this.show();
  }
}

