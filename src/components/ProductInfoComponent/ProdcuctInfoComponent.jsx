import React from 'react'

class ProductInfoComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          name = {this.props.name}
        </div>
    )
  }
}

export default ProductInfoComponent;
