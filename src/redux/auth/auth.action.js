import {AuthActionTypes} from "./auth.reducer.js";

export function Login(login) {
  return {
    type: AuthActionTypes.LOGIN,
    payload: {
      userName: login
    }
  }
}

export function Logout() {
  return {
    type: AuthActionTypes.LOGOUT,
  }
}
