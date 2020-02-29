import BaseView from '../Base/Base.js';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent.jsx';
import MiddleComponent from '../../components/MiddleComponent/MiddleComponent.jsx';
import ProductMapComponent from "../../components/ProductMapComponent/ProductMapComponent.jsx";
import React from "react";
import ReactDOM from 'react-dom';

export class StartScreen extends BaseView {
  constructor(element) {
    super(element);
  }

  render() {
    this.el.innerHTML = '';
    /*
    * Header
    * */
    const header = <HeaderComponent/>;
    /*
    * Middle
    * */
    const middle = <MiddleComponent/>;
    const product = <ProductMapComponent name={"Киндзмараули"}/>
    const product_2 = <ProductMapComponent name={'Рквацители'}/>
    ReactDOM.render(
        [
          header,
          middle
        ],
        this.el
    )
    ReactDOM.render(
        [
          product,
          product_2,
          product_2
        ],
        document.getElementById('Products')
    )
  }
}
