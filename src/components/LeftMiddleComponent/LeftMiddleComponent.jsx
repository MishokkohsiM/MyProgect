import React from 'react';
import Button from "../Button/Button.jsx";
import TextComponent from "../TextComponent/TextComponent.jsx";
import {selectWine, Reset} from "../../redux/selectWine/selectWine.action.js";
import {connect} from 'react-redux';

class LeftMiddleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.countries = [];
    this.state = {
      countries: null,
    };
  }

  render() {
    const {selected} = this.props;
    return (
        <div className="left-container">
          <div className="country">
            <TextComponent class={'country-text-choose'} name={"Choose county"}/>
            <div className='scroll'>
              {this.state.countries && this.state.countries.map((name, index) =>
                  <TextComponent class={'country-text'}
                                 name={name}
                                 onclick={this.CountryClick}
                                 key={index}
                  />
              )}
            </div>
            <Button class={'button-country'}
                    name={'Select'}
                    onclick={this.Onclick}
            />
          </div>
        </div>
    )
  }

  CountryClick = (el) => {
    const country = el.target.textContent;
    el.target.classList.toggle('black');
    el.target.classList.toggle('red');
    const index = this.countries.indexOf(country);
    if (index > -1) {
      this.countries.splice(index, 1);
    } else {
      this.countries.push(country);
    }
  };

  Onclick = (el) => {
    el.preventDefault();
    console.log(this.countries.length);
    // const js = {
    //   countries: this.countries
    // };
    // const Product = {};
    // const urlPost = 'http://127.0.0.1:3000/select';
    // fetch(urlPost, {
    //   method: 'POST',
    //   mode: 'cors',
    //   headers: {
    //     'Content-Type': 'application/json; charset=utf-8',
    //   },
    //   body: JSON.stringify(js),
    // })
    //     .then(res => {
    //       const isSuccess = res.status === 200;
    //       if (isSuccess) {
    //         return (res.json());
    //       } else {
    //         return {massage: 'error'};
    //       }
    //     })
    //     .then(data => {
    //       if (data.massage === 'error') {
    //         console.log('error');
    //       } else {
    //         console.log(data.result);
    //       }
    //     });
    console.log(this.countries);

    if (this.countries.length > 0) {
      console.log('TUT');
      const {selected, reset} = this.props;
      reset();
      selected(this.countries);
    } else {
      const {reset} = this.props;
      reset();
    }
  };

  componentDidMount() {
    fetch('http://127.0.0.1:3000/countries')
        .then(res => {
          console.log(res.json);
          return res.json();
        })
        .then(json => {
          console.log(json.Countries);
          this.setState({countries: json.Countries})
        })
  }
}

const makeMapStateToProps = () => {
  return (store) => {
    return {
      isSelect: store.select.isSelect,
      countries: store.select.countries,
    }
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    selected: (data) => dispatch(selectWine(data)),
    reset : () => dispatch(Reset()),
  }
}

export default connect(makeMapStateToProps(),mapDispatchToProps)(LeftMiddleComponent);
