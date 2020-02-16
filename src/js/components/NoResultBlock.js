import HiddenElement from './HiddenElement';

export default class NoResultBlock extends HiddenElement {
  constructor(container) {
    super(container, 'not-found_hidden');
  }
}
