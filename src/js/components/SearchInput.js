export default class SearchInput {
  constructor(container, callback) {
    this._container = container;
    this._callback = callback;
    this._input = this._container.querySelector('.search__text');
    this._input.addEventListener('invalid', () => { this._handleInvalid() });
    this._input.addEventListener('input', () => { this._handleInput() });
    this._searchForm = this._container.querySelector('.search__bar');
    this._searchForm.addEventListener('submit', () => {
      event.preventDefault();
      this.search()
    });
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

}