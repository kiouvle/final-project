import BaseComponent from './BaseComponent';

export default class HiddenElement extends BaseComponent {  
  constructor(container, hiddenClass) {
    super(container);  //вызов конструктора класса BaseComponent

    this._hiddenClass = hiddenClass;
  }
  hide() {  //метод скрытия ненужных элементов
    this._container.classList.add(this._hiddenClass);
  }
  
  show() { //метод показа элементов
    this._container.classList.remove(this._hiddenClass);
  }
}