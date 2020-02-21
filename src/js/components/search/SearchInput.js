import BaseComponent from '../base/BaseComponent';

export default class SearchInput extends BaseComponent { //класс поисковой формы
  constructor(container, searchCallback) { 
    super(container);

    this._searchCallback = searchCallback;

    this._input = this.findElement('.search__text');    
    this._searchButton  = this.findElement('.search__button');
    this._searchForm = this.findElement('.search__bar');

    this._setHandlers([ //установка обработчиков событий
      { element: this._searchForm, event: 'submit', handler: this._handleSubmit.bind(this) },
      { element: this._input, event: 'invalid', handler: this._handleInvalid.bind(this) },
      { element: this._input, event: 'input', handler: this._handleInput.bind(this) }
    ]);  
  }

  _handleSubmit(event) {
    event.preventDefault(); //предотвращает действие браузера по умолчанию при загрузке формы - переход на другую страницу
    this.search()
  }

  _handleInvalid() {  //обработчик события невалидности формы
    this._input.setCustomValidity('Необходимо ввести ключевое слово');
  }

  _handleInput() { //сбрасывание ошибки о валидации
    this._input.setCustomValidity('');
  }

  search() {
    const searchText = this._input.value;  
    
    this._searchCallback(searchText);
  }

  lockForm() {
    this._input.setAttribute('disabled', 1);
    this._searchButton.setAttribute('disabled', 1);
  }

  unlockForm() {
    this._input.removeAttribute('disabled');
    this._searchButton.removeAttribute('disabled');
  }

  setSearchText(searchText) {
    this._input.value = searchText;
  }

}