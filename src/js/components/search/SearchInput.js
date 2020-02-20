import BaseComponent from '../base/BaseComponent';

export default class SearchInput extends BaseComponent { //класс поисковой формы
  constructor(container, handlers) { 
    super(container);
    this.setHandlers(handlers);  //установка обработчиков событий

    this._input = this.findElement('.search__text');
    this._input.addEventListener('invalid', this._handleInvalid.bind(this));
    this._input.addEventListener('input', this._handleInput.bind(this));
    
    this._searchButton  = this.findElement('.search__button');
    
    this._searchForm = this.findElement('.search__bar');
    this._searchForm.addEventListener('submit', this._handleSubmit.bind(this));
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
    const event = new CustomEvent('search', { 'detail': searchText });  //создание события

    this._container.dispatchEvent(event);  // запуск события
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