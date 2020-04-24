import {applyMiddleware, createStore, Store} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../redux/index.js';

const configureStore = () => {
  let middleware = applyMiddleware(thunk);
  return createStore(rootReducer,middleware);
};

export default configureStore;
