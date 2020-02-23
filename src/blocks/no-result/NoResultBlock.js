import HiddenElement from '../../js/components/HiddenElement';
import {SERVER_ERROR_MESSAGE, NOT_FOUND_MESSAGE} from '../../js/constants/constants';

export default class NoResultBlock extends HiddenElement {
  constructor(container) {
    super(container, 'no-result_hidden');
    this._description = this.findElement('.no-result__message');  //использование метода BaseComponent для поиска
  }

  _setDescriptionText(text) {  //замена текста блока не найдено
    this._description.textContent = text;
  }

  showServerErrorMessage() { //не найдено для случаев ошибки
    this._setDescriptionText(SERVER_ERROR_MESSAGE);
    this.show();
  }

  showNotFoundMessage() { //не найдено для неверного запроса
    this._setDescriptionText(NOT_FOUND_MESSAGE);
    this.show();
  }
}

