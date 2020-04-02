import React from 'react';

class ProductMapComponent extends React.Component {
  render() {
    return (
        <div className={'product-map'}>
          <h1>
            {this.props.name}
          </h1>
          <div className={'product-description'}>
            <div className={'product-wrapper'}>
                <div className={'product-img'}>
                </div>
            </div>
            <div className={'product-description-wine'}>
              <div>County - Georgia</div>
              <div>Price -  10 $</div>
              <div>Age -    2015</div>
            </div>
          </div>
        </div>

    )
  }
}

export default ProductMapComponent;
