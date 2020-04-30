import React from 'react';
import ProductMapComponent from "../ProductMapComponent/ProductMapComponent.jsx";
import TextComponent from "../TextComponent/TextComponent.jsx";
import {connect} from 'react-redux';
import Button from "../Button/Button.jsx";


class RightMiddleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
      pages: 0,
    }
  }

  render() {
    const {isSelect, countries } = this.props;
    console.log(countries, isSelect);
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
                isSelect ?
              ( <ProductMapComponent
                    key={el.wine_name.toString()}
                    name={el.wine_name}
                    price={el.wine_price}
                    age={el.wine_age}
                    country={el.wine_country}
                /> )
              :
                    countries.indexOf(el.wine_country)!= -1  ?
                        ( <ProductMapComponent
                            key={el.wine_name.toString()}
                            name={el.wine_name}
                            price={el.wine_price}
                            age={el.wine_age}
                            country={el.wine_country}
                        /> )
                        :
                        console.log(el.wine_country)
            ))}
          </div>
          <div className={'pagination'}>
            {this.state.pages && this.state.pages.map((el) => (
                <Button class={'pagination__index'} name={el} key={el.toString()} onclick={this.pageOnClick}/>))
            }
          </div>
        </div>
    )
  }

  componentDidMount() {
    fetch('http://127.0.0.1:3000/page/1')
        .then(res => {
          console.log(res.json);
          return res.json();
        })
        .then(json => {
          console.log(json);
          console.log(json.pageArr);
          this.setState({products: json.newResult,
            pages: json.pageArr,
          })
        });
  }

  pageOnClick = (el) => {
    el.preventDefault();
    const page = el.target.textContent;
    fetch(`http://127.0.0.1:3000/page/${page}`)
        .then(res => {
          console.log(res.json);
          return res.json();
        })
        .then(json => {
          console.log(json);
          console.log(json.pageArr);
          this.setState({...this.state,
            products: json.newResult,
          })
        });
  }
}

const makeMapStateToProps = () => {
  return (store) => {
    return {
      isSelect: store.select.isSelect,
      countries: store.select.countries,
    }
  }
}


export default connect(makeMapStateToProps())(RightMiddleComponent);
