import React from 'react';

import ProductMapComponent from "../ProductMapComponent/ProductMapComponent.jsx";
import TextComponent from "../TextComponent/TextComponent.jsx";
import fetchProduct from '../../server/controllers/Products'


class RightMiddleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    }
  }

  render() {
    return (
        <div className='right-container'>
          <div className='right-container-menu'>
          <TextComponent
              name={'Catalog'}
              class={'catalog'}
          />
          </div>
          <div className='wine-catalog'>
            {this.state.products && this.state.products.map((product, index) => (
                <ProductMapComponent
                    key={product.wine_name.toString() + index}
                    name={product.wine_name}
                    price={product.wine_price}
                    age={product.wine_age}
                    country={product.wine_country}
                />
            ))}
          </div>
        </div>
    )
  }

  componentDidMount() {
    fetchProduct.getProducts()
        .then(result => {
            this.setState({
                products: result,
            })
        })
        .catch(result => {
            this.setState({
                products: result,
            })
        })
  }
}

export default RightMiddleComponent;
