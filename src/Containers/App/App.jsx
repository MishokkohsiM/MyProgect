import React from 'react';
import {Switch, withRouter} from "react-router";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {routes} = this.props;
    return (
        <Switch>
          {routes}
        </Switch>
    )
  }
}

export default withRouter(App);
