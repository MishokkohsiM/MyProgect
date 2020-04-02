import * as React from 'react';
import {Route, Switch} from 'react-router';

import Main from './Containers/Main/Main.jsx'
import SignIn from './Containers/SignIn/SignIn.jsx'
import SignUp from './Containers/SignUp/SignUp.jsx'

export const PATHS = {
  MENU: '/',
  SIGN_IN: '/login',
  SIGN_UP: '/register',
  ERROR: '/404'
};

export const router = [

  <Route exact path={PATHS.MENU} component={Main} key={PATHS.MENU}/>,
  <Route exact path={PATHS.SIGN_IN} component={SignIn} key={PATHS.SIGN_IN}/>,
  <Route exact path={PATHS.SIGN_UP} component={SignUp} key={PATHS.SIGN_UP}/>

];
