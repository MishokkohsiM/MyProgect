import React from 'react';

class TextComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={this.props.class} onClick={this.props.onclick}>
          {this.props.name}
        </div>
    )
  }
}

export default TextComponent;
