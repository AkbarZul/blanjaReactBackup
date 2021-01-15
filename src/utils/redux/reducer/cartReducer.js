import * as actionTypes from '../actionTypes';

const INITIAL_STATE = {
  cart: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_BAG:
        const item = action.payload;
      console.log(action.payload.id);
      const inCart = state.cart.find((item) => 
        item.id === action.payload.id ? true : false,
      );
      return {
        ...state,
        cart: inCart ? state.cart.map((item) => 
        item.id === action.payload.id ? {...item, qty: item.qty + 1}
        : item,
        )
        : [...state.cart, {...item, qty: 1}],
      };
      // return {
      //   ...state,
      //   cart: [...state.cart, action.payload],
      // };
      case actionTypes.REMOVE_FROM_BAG:
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        }
    default:
      return state;
  }; 
};

export default cartReducer;