import React from 'react';
import InputComponents from "../InputComponents/InputComponents.jsx";
import Button from "../Button/Button.jsx";

class FormSignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={'formComponent'}>
          <div className={'box'}>
            <form>
              <div className={'input-container'}>
                <InputComponents
                    type={'text'}
                />
                <label>Login</label>
              </div>
              <div className={'input-container'}>
                <InputComponents
                    type={'text'}
                />
                <label>Mail</label>
              </div>
              <div className={'input-container'}>
                <div>
                  <InputComponents
                      id={'signUp__Password__1'}
                      type={'password'}
                  />
                  <span className={'eye-green fa-eye'} onClick={this.ShowPassword}></span>
                </div>
                <label>Password</label>
              </div>
              <div className={'input-container'} id='signUp__Password__2'>
                <InputComponents
                    type={'password'}
                />
                <label>Repeat the password</label>
              </div>
            </form>
            <div>
              <Button
                  class={'btn'}
                  name={'registration'}
                  onclick={this.Click}
              />
            </div>
          </div>
        </div>
    )
  }

  ShowPassword = (el) => {
    el.preventDefault();
    const button = el.target;
    button.classList.toggle('eye-green');
    button.classList.toggle('fa-eye');
    button.classList.toggle('eye-red' );
    button.classList.toggle('fa-eye-slash');
    let input = document.getElementById('signUp__Password__1');
    let hidden = document.getElementById('signUp__Password__2');
    if (input.type === 'password') {
      input.type = 'text';
      hidden.hidden = true;
    } else {
      input.type = 'password';
      hidden.children[0].value = input.value;
      hidden.hidden = false;
    }
  };

  Click = () => {
    console.log('registr');
  };
}

export default FormSignUp;
