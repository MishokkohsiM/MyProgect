const initialState = {
  isAuthorized: false,
  userName: '',
};

export const AuthActionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
};

export function auth(state = initialState, action) {
  switch (action.type) {
    case AuthActionTypes.LOGIN : {
      return {
        ...state,
        isAuthorized: true,
        userName: action.payload.userName,
      }
    }
    case AuthActionTypes.LOGOUT : {
      return {
        ...state,
        isAuthorized: false,
        userName: '',
      }
    }
    default:
      return {
        ...state
      };
  }
}
