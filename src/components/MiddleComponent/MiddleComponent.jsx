import React from 'react';
import LeftMiddleComponent from "../LeftMiddleComponent/LeftMiddleComponent.jsx";
import RightMiddleComponent from "../RightMiddleComponent/RightMiddleComponent.jsx";

class MiddleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
      countries: null,
    };
  }

  render() {
    return (
        <div className="middle">
          <LeftMiddleComponent/>
          <RightMiddleComponent/>
        </div>
    )
  }
}

export default MiddleComponent;

