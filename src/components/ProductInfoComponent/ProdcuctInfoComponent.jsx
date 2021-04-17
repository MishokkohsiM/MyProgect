import React from 'react'

import fetchProduct from '../../server/controllers/Products';

class ProductInfoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        info: '',
    }
  }

  render() {
    return (
        <div>
          name = {this.state.name}
          <br />
          info = {this.state.info}
        </div>
    )
  }

  componentDidMount() {
      const productName =  location.pathname.split('/');
      fetchProduct.getProduct(productName[2])
          .then(product => {
              this.setState({
                  name: product.name,
                  info: product.productInfo,
              })
          });
  }
}

export default ProductInfoComponent;
