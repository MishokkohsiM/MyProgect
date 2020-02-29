export default class BaseView {
  constructor(element) {
    this.el = element;
    this.el.dataset.view = this.constructor.name;
  }

  get active() {
    return !this.el.hidden;
  }
  removeHandlers() {
  }
  hide() {
    this.el.hidden = true;
    this.removeHandlers();
    this.el.remove();
  }

  show() {
    this.el.hidden = false;
    this.render();
  }

  render() {

  }
}
