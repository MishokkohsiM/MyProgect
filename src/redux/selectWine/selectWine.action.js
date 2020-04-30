
import {SelectActionTypes} from "./selectWine.reducer.js";

export function selectWine(countries) {
  return {
    type : SelectActionTypes.SELECT,
    countries
  }
}

export function Reset() {
  return {
    type : SelectActionTypes.RESET,
  }
}
