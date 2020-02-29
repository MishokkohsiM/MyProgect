import BaseView from "../Base/Base.js";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent.js";
import Button from "../../components/Button/Button";
import ReactDOM from 'react-dom';
import React from "react";

export class SignInScreen extends BaseView {
  constructor(element) {
    super(element);
  }

  render() {
    this.el.innerHTML = '';

    const header = <HeaderComponent/>;
    const button = <Button class={'myButton'}/>;
    ReactDOM.render(
        [
          header,
          button
        ],
        this.el
    )
  }
}
