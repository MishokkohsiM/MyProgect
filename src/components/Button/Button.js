import React ,{Component} from 'react';

class Button extends Component {
  render() {
    return (
        <button className={this.props.class}> Button </button>
    )
  }
}

export default Button;
