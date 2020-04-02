import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {router} from './router.jsx';
import App from './Containers/App/App.jsx'
import {Router} from "react-router";
import history from "./middleware/history/history.js";
import UserService from "./services/UserService.js";

window.user = new UserService();
const application = document.getElementById('application');

const render = (component) => {
  ReactDOM.render(
      (
          <Router history={history}>
            {component}
          </Router>
      )
      , document.getElementById('application'));
};

render(<App routes={router}/>);
