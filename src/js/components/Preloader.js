export default class Preloader {
  constructor(container) {
    this._container = container;
  }

  hide() {
    this._container.classList.add('preloader_hidden');
  }
  
  show() {
    this._container.classList.remove('preloader_hidden');
  }
}
