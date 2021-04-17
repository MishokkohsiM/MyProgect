import React from 'react';

import Button from "../Button/Button.jsx";
import TextComponent from "../TextComponent/TextComponent.jsx";
import fetchCountries from '../../server/controllers/Countries';

class LeftMiddleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.countries = [];
    this.state = {
      countries: null,
    };
  }

  render() {
    return (
        <div className="left-container">
          <div className="country">
            <TextComponent class={'country-text-choose'} name={"Choose county"}/>
            <div className='scroll'>
              {this.state.countries && this.state.countries.map((name, index) =>
                  <TextComponent
                    class={'country-text'}
                    name={name}
                    onclick={this.CountryClick}
                    key={index}
                  />
              )}
            </div>
            <Button
              class={'button-country'}
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
    const js = {
      countries: this.countries
    };
    const urlPost = 'http://127.0.0.1:3000/select';
    fetch(urlPost, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(js),
    })
        .then(res => {
          const isSuccess = res.status === 200;
          if (isSuccess) {
            return (res.json());
          } else {
            return {massage: 'error'};
          }
        })
        .then(data => {
          if (data.massage === 'error') {
            console.log('error');
          } else {
            console.log(data.result);
          }
        });
    console.log(this.countries);
  };

  componentDidMount() {
    fetchCountries.getCountries()
        .then(result => {
          this.setState({
            countries: result,
          })
        })
        .catch(result => {
          this.setState({
            countries: result,
          })
        })
  }
}

export default LeftMiddleComponent;
