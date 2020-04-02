import React from 'react';

class HeaderComponent extends React.Component {
  render() {
    return (
        <div className="header">
          <div>
            <img src="/assets/georgia.png" className="logo"/>
            <h1>Wine House</h1>
          </div>
          <nav>
            <a  href="/">Menu</a>
            <a  href="/">Contacts</a>
            <a  href="/">Users</a>
            <a  href="/register">Sign Up</a>
            <a  href="/login">Sign In</a>
          </nav>
        </div>
    )
  }
}

export default HeaderComponent;
