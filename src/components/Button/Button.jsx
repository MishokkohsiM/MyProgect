import React, {Component} from 'react';

class Button extends Component {
  render() {
    return (
        <button
            className={this.props.class}
            onClick={this.props.onclick}
            id={this.props.id}
        >
          {this.props.name}
        </button>
    )
  }
}

export default Button;
