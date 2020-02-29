
export default class BaseComponents {
  constructor (context = null){
    this.context = context;
    this.element = null;
    this.template = null;
  }

  render () {
    if (!this.element) {
      this.element = this.template(this.context)
    }
    return this.element
  }



  remove () {
    this.element.parentElement.removeChild(this.element)
  }
}
