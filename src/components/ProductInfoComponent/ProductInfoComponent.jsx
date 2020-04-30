import React from 'react'
import TextComponent from "../TextComponent/TextComponent.jsx";

class ProductInfoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
        <div>
          {this.state && this.state.info ?
              (<div>
                <TextComponent name = {`Wine - ${this.state.info.name}`}/>
                <TextComponent name = {`Info - ${this.state.info.productInfo}`} />
              </div>) :
              (<div>name = {this.props.name}  </div>)
          }
        </div>
    )
  }

  componentDidMount() {
    const urGet = `http://localhost:3000/product/`;
    const urlGet = urGet + this.props.name;
    const info = {};
    fetch(urlGet)
        .then(res => {
          return res.json();
        })
        .then(json => {
          // console.log(json.name);
          info.name = json.name;
          info.productInfo = json.info;
          this.setState({info})
          console.log(this.state);
        });
  }
}

export default ProductInfoComponent;
