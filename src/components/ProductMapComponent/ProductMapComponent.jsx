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
              <div>County - {this.props.country}</div>
              <div>Price -  {this.props.price}</div>
              <div>Age -    {this.props.age}</div>
            </div>
          </div>
        </div>

    )
  }
}

export default ProductMapComponent;
