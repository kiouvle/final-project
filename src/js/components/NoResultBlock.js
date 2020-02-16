export default class NoResultBlock {
  constructor(container) {
    this._container = container;
  }

  hide() {
    this._container.classList.add('not-found_hidden');
  }
  
  show() {
    this._container.classList.remove('not-found_hidden');
  }
}
