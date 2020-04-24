import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {router} from './router.jsx';
import {Provider} from 'react-redux';
import {Router} from "react-router";

import App from './Containers/App/App.jsx'
import history from "./middleware/history/history.js";
import UserService from "./services/UserService.js";
import configureStore from "./store/index.js";

const store = configureStore();

window.user = new UserService();
const application = document.getElementById('application');

const render = (component) => {
  ReactDOM.render(
      (
          <Provider store={store}>
            <Router history={history}>
              {component}
            </Router>
          </Provider>
      )
      , document.getElementById('application'));
};

render(<App routes={router}/>);
