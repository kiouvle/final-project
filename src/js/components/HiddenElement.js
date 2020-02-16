export default class HiddenElement {
  constructor(container, hiddenClass) {
    this._container = container;
    this._hiddenClass = hiddenClass;
  }
  hide() {
    this._container.classList.add(this._hiddenClass);
  }
  
  show() {
    this._container.classList.remove(this._hiddenClass);
  }
}