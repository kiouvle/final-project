export default class SearchInput {
  constructor(container, callback) {
    this._container = container;
    this._callback = callback;
    this._input = this._container.querySelector('.search__text');
    this._input.addEventListener('invalid', this._handleInvalid.bind(this));
    this._input.addEventListener('input', this._handleInput.bind(this));
    this._searchButton  = this._container.querySelector('.search__button');
    this._searchForm = this._container.querySelector('.search__bar');
    this._searchForm.addEventListener('submit', this._handleSubmit.bind(this));
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.search()
  }

  _handleInvalid() {
    this._input.setCustomValidity('Необходимо ввести ключевое слово');
  }

  _handleInput() {
    this._input.setCustomValidity('');
  }

  search() {
    const searchText = this._input.value;
    this._callback(searchText);
  }

  lockForm() {
    this._input.setAttribute('disabled', 1);
    this._searchButton.setAttribute('disabled', 1);
  }

  unlockForm() {
    this._input.removeAttribute('disabled');
    this._searchButton.removeAttribute('disabled');
  }

}