import * as actionTypes from '../actionTypes';

const INITIAL_STATE = {
  cart: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_BAG:
        const item = action.payload;
      console.log(action.payload.id);
      return {
        ...state,
        cart: [...state.cart, item],
      };
    default:
      return state;
  }
};

export default cartReducer;