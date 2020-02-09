export default class SearchInput {
  constructor(container, callback) {
    this._container = container;
    this._callback = callback;
    this._input = this._container.querySelector('.search__text');
    this._searchButton = this._container.querySelector('.search__button');
    this._searchButton.addEventListener('click', () => {this.search()});
    this._searchForm = this._container.querySelector('.search__bar');
    this._searchForm.addEventListener('submit', () => {
      event.preventDefault();
    });


    this._input.value = 'apple';
    this.search();
  }

  search() {

const searchText = this._input.value;

    if (searchText.length === 0) {
      console.log('Нужно ввести ключевое слово')
    }
    else {
      this._callback(searchText);
    }
  }

}