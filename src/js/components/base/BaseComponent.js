export default class BaseComponent {  //базовый компонент от которого наследуют остальные компоненты
  constructor(container) {
    this._container = container;
  }

  _setHandlers(handlers) {   //метод установки обработчиков событий
    handlers.forEach(({ element, event, handler }) => {
      element.addEventListener(event, handler);
    });
  }

  findElement(className) {  //метод поиска элементов
    return this._container.querySelector(className);
  }
}