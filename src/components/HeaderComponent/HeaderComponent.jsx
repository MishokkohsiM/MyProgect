import React from 'react';
import {NavLink} from "react-router-dom";

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {userName} = this.props;
    const {isAuthorized} = this.props;

    const Authorized = isAuthorized ? (
            <div>
              <NavLink to="/">Menu</NavLink>
              <NavLink to="/">Contacts</NavLink>
              <NavLink to="/">Users</NavLink>
              <NavLink to='/'>Profile</NavLink>
            </div>
        ) :
        (
            <div>
              <p>{userName}</p>
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

export default HeaderComponent;
