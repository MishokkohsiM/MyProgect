import React from 'react';

import fetchProduct from '../../server/controllers/Products';

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
    const product =  this.props.name;
    history.pushState(
        {},
        '',
        `http://localhost:8000/product/${product}/`
  );
    history.go();
  }
}

export default ProductMapComponent;
