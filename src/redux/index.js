import {combineReducers} from 'redux';
import {auth} from "./auth/auth.reducer.js";
import {select} from "./selectWine/selectWine.reducer.js";

export default combineReducers({
  auth,
  select,
})
