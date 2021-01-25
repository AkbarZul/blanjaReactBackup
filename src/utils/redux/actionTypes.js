import { ActionType } from 'redux-promise-middleware';

export const ADD_TO_BAG = 'ADD_TO_BAG';

export const REMOVE_FROM_BAG = 'REMOVE_FROM_BAG';

export const QUANTITY_INCREASED = 'QUANTITY_INCREASED';

export const QUANTITY_DECREASED = 'QUANTITY_DECREASED';

export const ADD_TO_CHECKOUT = 'addToCheckout';

export const PICK_CART = 'PICK_CART';

export const CLEAR_CART = 'clear_cart';

export const CLEAR_CHECKOUT = 'clear_checkout';


//Auth
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';


export const pending = `_${ActionType.Pending}`;
export const rejected = `_${ActionType.Rejected}`;
export const fulfilled = `_${ActionType.Fulfilled}`;


