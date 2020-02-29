// import BaseComponents from '../BaseComponents/BaseComponenst.js';
import React from 'react';

// export class HeaderComponent extends BaseComponents {
//   constructor(context) {
//     super(context);
//     this.template = Handlebars.compile(`
// <Header class="header">
//     <div>
//         <img src="/assets/georgia.png" class="logo"/>
//         <h1>Wine House</h1>
//     </div>
//
//     <nav>
//         <a  href="/">Меню</a>
//         <a  href="/">Контакты</a>
//         <a  href="/">Адрес</a>
//     </nav>
// </Header>
//     `)
//   }
// }

class HeaderComponent extends React.Component {
  render() {
    return (
        <div className="header">
          <div>
            <img src="/assets/georgia.png" className="logo"/>
            <h1>Wine House</h1>
          </div>
          <nav>
            <a  href="/">Меню</a>
            <a  href="/">Контакты</a>
            <a  href="/">Адрес</a>
          </nav>
        </div>
    )
  }
}

export default HeaderComponent;
