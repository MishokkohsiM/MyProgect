import React from 'react';
import history from "../../middleware/history/history.js";
import {PATHS} from "../../router.jsx";

class ProductMapComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={'product-map'} onClick={this.ShowProduct}>
          <h1>
            {this.props.name}
          </h1>
          <div className={'product-description'}>
            <div className={'product-wrapper'}>
              <div className={'product-img'}>
              </div>
            </div>
            <div className={'product-description-wine'}>
              <div>County - {this.props.country}</div>
              <div>Price - {this.props.price}</div>
              <div>Age - {this.props.age}</div>
            </div>
          </div>
        </div>
    )
  }

  ShowProduct = (productCard) => {
    productCard.preventDefault();
    // const urGet = `http://localhost:3000/product/`;
    const product =  this.props.name;
    // const info = {};
    // const urlGet = urGet + product;
    // console.log(urlGet);
    // fetch(urlGet)
    //     .then(res => {
    //       return res.json();
    //     })
    //     .then(json => {
    //       // console.log(json.name);
    //       info.name = json.name;
    //       info.productInfo = json.info;
    //       console.log(info);
    //     });
    history.push(`/product/${product}`);
  }
}

export default ProductMapComponent;
