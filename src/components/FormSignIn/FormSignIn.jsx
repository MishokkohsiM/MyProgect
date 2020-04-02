import React from 'react';
import InputComponents from "../InputComponents/InputComponents.jsx";
import Button from "../Button/Button.jsx";
import UserService from "../../services/UserService.js";


class FormSignIn extends React.Component {
  constructor(props) {
    super(props);
    this.loginIsValid = true;
    this.passwordIsValid = true;
    this.formIsValid = true;
  }

  render() {
    return (
        <div className='formComponent'>
          <div className='box'>
            <form>
              <div className={'input-container'}>
                <InputComponents
                    type={'text'}
                    id={'signIn__login'}
                    required={''}
                />
                <label>Login</label>
              </div>
              <div className={'input-container'}>
                <div>
                  <InputComponents
                      type={'password'}
                      id={'signIn__password'}
                      required={''}
                  />
                  <span className={'eye-green fa-eye'} onClick={this.ShowPassword}></span>
                </div>
                <label>Password</label>
              </div>
              <Button
                  class={'btn'}
                  name={'Вход'}
                  onclick={this.Submit}
              />
            </form>
          </div>
        </div>
    )
  }

  validateInput(name, value) {
    let isValid = false;
    const property = `${name}IsValid`;
    if (value.length) {
      if (value.length > 3) {
        isValid = true;
      } else {
        alert(`${name} меньше 4 символов`);
      }
    }
    this[property] = isValid;
    this.setFormStatus();
  }

  setFormStatus() {
    const {loginIsValid} = this;
    const {passwordIsValid} = this;
    this.formIsValid = loginIsValid && passwordIsValid;
  }

  validate() {
    const inputNames = ['login', 'password'];
    inputNames.forEach((name) => {
      const input = document.getElementById(`signIn__${name}`);
      this.validateInput(name, input.value);
    })
  };

  ShowPassword = (el) => {
    el.preventDefault();
    const button = el.target;
    button.classList.toggle('eye-green');
    button.classList.toggle('fa-eye');
    button.classList.toggle('eye-red');
    button.classList.toggle('fa-eye-slash');
    const input = document.getElementById('signIn__password');
    if (input.type === 'password') {
      input.type = 'text';
    } else {
      input.type = 'password';
    }
  };

  Submit = (el) => {
    el.preventDefault();
    console.log('Submit');
    this.validate();
    const {formIsValid} = this;
    console.log('Form -', formIsValid);
    const body = {
      login: document.getElementById('signIn__login').value,
      password: document.getElementById('signIn__password').value,
    };
    if (formIsValid) {
      user.login(body)
          .then(data => {
            if (data.massage === 'error') {
              console.log('error');
            } else {
              user.userName = data.login;
            }
          })
          .catch(data => {
                console.log(data.massage);
              }
          )
    }
  }
}

export default FormSignIn;
