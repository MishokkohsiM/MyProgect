import React from 'react';
import ProductMapComponent from "../ProductMapComponent/ProductMapComponent.jsx";
import TextComponent from "../TextComponent/TextComponent.jsx";


class RightMiddleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
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
            {this.state.products && this.state.products.map((el) => (
                <ProductMapComponent
                    name={el.wine_name}
                    price={el.wine_price}
                    age={el.wine_age}
                    country={el.wine_country}
                    key={el.name}
                />
            ))}
          </div>
        </div>
    )
  }

  componentDidMount() {
    fetch('http://127.0.0.1:3000/products')
        .then(res => {
          console.log(res.json);
          return res.json();
        })
        .then(json => {
          console.log(json.results);
          this.setState({products: json.results,
          })
        });
  }
}

export default RightMiddleComponent;
