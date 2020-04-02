import React from 'react';
import InputComponents from "../../components/InputComponents/InputComponents.jsx";
import Button from "../../components/Button/Button.jsx";

class Admin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <form className={'box'}>
            <InputComponents id={'wine_name'} placeholder={'Name'}/>
            <InputComponents id={'wine_age'} placeholder={'Age'}/>
            <InputComponents id={'wine_country'} placeholder={'Country'}/>
            <InputComponents id={'wine_price'} placeholder={'Price'}/>
            <Button onclick={this.SubmitWine} name={"Submit"}/>
          </form>
        </div>
    )
  }

  SubmitWine = (el) => {
    el.preventDefault();
    const wine = {
      wine_name: document.getElementById('wine_name').value,
      wine_age: document.getElementById('wine_age').value,
      wine_country: document.getElementById('wine_country').value,
      wine_price: document.getElementById('wine_price').value,
    };
    if (wine.wine_name && wine.wine_age && wine.wine_country && wine.wine_price) {
      const js = JSON.stringify(wine);
      fetch('http://localhost:3000/wine', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          host: 'localhost',
        },
        credentials: 'same-origin',
        body: js,
      })
          .then((res) => {
            const isSuccess = res.status === 200;
            if (isSuccess) {
              return res.json();
            } else {
              return {massage: 'error'};
            }
          })
          .then(data => {
            if (data.massage === 'error') {
              console.log(data.massage);
            } else {
              console.log(data.id);
            }
          })
    } else {
      console.log('error');
    }
  }

}

export default Admin;
