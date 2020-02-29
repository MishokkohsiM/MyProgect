// import BaseComponents from "../BaseComponents/BaseComponenst.js";
import React from 'react';

// export class ProductMapComponent extends BaseComponents{
//   constructor(context) {
//     super(context);
//     this.template = Handlebars.compile(`
//     <div class="product-map">
//         {{ProductName}}
//     </div>
//     `);
//   }
// }

class ProductMapComponent extends React.Component {
  render() {
    return (
        <div className={"product-map"}>
          {this.props.name}
        </div>
    )
  }
}

export default ProductMapComponent;
