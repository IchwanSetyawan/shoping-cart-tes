import { BUY_TSHIRT } from "./TShirtType";
import { ADD_TSHIRT } from "./TShirtType";
import { LESS_TSHIRT } from "./TShirtType";
import {SET_DATA} from '../action.js';

const initialState = {
  stockTShirt: 10,
  count:1,
  data: undefined,
};

const tshirtReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case BUY_TSHIRT:
      return {
        ...state,
        stockTShirt: state.stockTShirt - 1,
    };
    case ADD_TSHIRT:
      return {
        ...state,
        count: state.count + 1,
        stockTShirt: state.stockTShirt - 1,
    };
    case LESS_TSHIRT:
      return {
        ...state,
        count: state.count - 1,
        stockTShirt: state.stockTShirt + 1,
    };
    case SET_DATA:
      console.log('payload', payload)
      return {
        ...state,
        data: payload
      }
    default:
      return state;
  }
};

export default tshirtReducer;
