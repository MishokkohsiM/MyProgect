// import BaseComponents from '../BaseComponents/BaseComponenst.js';
import React from 'react';

// export class MiddleComponent extends BaseComponents {
//   constructor(context) {
//     super(context);
//     this.template = Handlebars.compile(`
// <div class="middle">
//     <div class="container">
//         <div class="container-left">
//             <h3> Выберите страну</h3>
//             <div class="container-left-country">
//                 <p> Россия </p>
//                 <p> Китай </p>
//                 <p> Грузия </p>
//             </div>
//         </div>
//         <div class="container-right">
//             <div class="container-right-menu">
//                 <h3>
//                     В этом списке есть <br>
//                     алкогольные товары
//                 </h3>
//                 <p> Чрезмерное употребление алкоголя вредит вашему здоровью.
//                     Приобретение алкогольной продукции осуществляется только в торговом зале магазина.
//                     Время продажи алкоголя в магазине ограничено и устанавливается магазином согласно требованиям законодательства.
//                 </p>
//
//             </div>
//             <div  class="container-right-menu-product" id="Products">
//
//             </div>
//         </div>
//     </div>
// </div>
//     `)
//   }
// }

class MiddleComponent extends React.Component {
  render() {
    return (
        <div className="middle">
          <div className="container-left">
            <div className="container">
              <h3> Выберите страну</h3>
              <div className="container-left-country">
                <p> Россия </p>
                <p> Китай </p>
                <p> Грузия </p>
              </div>
            </div>
          </div>
          <div className="container-right">
            <div className="container-right-menu">
              <h3>
                В этом списке есть
              </h3>
              <p> Чрезмерное употребление алкоголя вредит вашему здоровью.
                Приобретение алкогольной продукции осуществляется только в торговом зале магазина.
                Время продажи алкоголя в магазине ограничено и устанавливается магазином согласно требованиям
                законодательства.
              </p>
            </div>
            <div id="Products">
            </div>
          </div>
        </div>
    )
  }
}

export default MiddleComponent;

