import React from 'react'
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent.jsx";
import ProductInfoComponent from "../../components/ProductInfoComponent/ProdcuctInfoComponent.jsx";

class Product extends React.Component {
  render() {
    return (
        <div>
          <HeaderComponent/>
          <ProductInfoComponent/>
        </div>
    )
  }
}

export default Product;
