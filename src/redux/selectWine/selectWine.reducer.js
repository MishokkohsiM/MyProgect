const initialState = {
  isSelect: true,
  countries: [],
}

export const SelectActionTypes = {
  SELECT: 'SELECT',
  RESET: 'RESET',
};

export function select(state = initialState, action) {
  switch (action.type) {
    case SelectActionTypes.SELECT : {
      return {
        ...state,
        isSelect: false,
        countries: action.countries,
      }
    }
    case SelectActionTypes.RESET : {
      return {
        ...state,
        isSelect: true,
        countries: [],
      }
    }
    default:
      return {
        ...state
      };
  }
}
