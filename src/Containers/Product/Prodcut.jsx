import React from 'react'
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent.jsx";
import ProductInfoComponent from "../../components/ProductInfoComponent/ProductInfoComponent.jsx";

class Product extends React.Component {
  render() {
    return (
        <div>
          <HeaderComponent/>
          <ProductInfoComponent name={this.props.match.params.product}/>
        </div>
    )
  }
}

export default Product;
