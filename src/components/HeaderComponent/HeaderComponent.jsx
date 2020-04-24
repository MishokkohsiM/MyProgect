import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from "react-router-dom";
import {Logout} from '../../redux/auth/auth.action.js';
import Button from "../Button/Button.jsx";

class HeaderComponent extends React.Component {

  render() {
    const {userName, isAuthorized, logout} = this.props;

    const Authorized = isAuthorized ? (

            <div>
              <NavLink to='/'>{userName}</NavLink>
              <NavLink to="/">Menu</NavLink>
              <NavLink to="/">Contacts</NavLink>
              <NavLink to="/">Users</NavLink>
              <Button name={'logout'} onclick={logout}/>
            </div>

        ) :
        (
            <div>
              <NavLink to="/">Menu</NavLink>
              <NavLink to="/">Contacts</NavLink>
              <NavLink to="/">Users</NavLink>
              <NavLink to="/register">Sign Up</NavLink>
              <NavLink to="/login">Sign In</NavLink>
            </div>
        );

    return (
        <div className="header">
          <div>
            <img src="/assets/georgia.png" className="logo"/>
            <h1>Wine House</h1>
          </div>
          <nav>
            {Authorized}
          </nav>
        </div>
    )
  }
}

const makeMapStateToProps = () => {
  return (store) => {
    return {
      isAuthorized: store.auth.isAuthorized,
      userName: store.auth.userName,
    }
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(Logout()),

  }
};

export default connect(makeMapStateToProps(), mapDispatchToProps)(HeaderComponent);
