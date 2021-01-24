import * as actionTypes from '../actionTypes';

export const addToBag = (
  itemId,
  product_name,
  product_price,
  product_photo,
  product_size,
  product_color,
  qty,
) => {
  return {
    type: actionTypes.ADD_TO_BAG,
    payload: {
      id: itemId,
      name: product_name,
      price: product_price,
      photo: product_photo,
      size: product_size,
      color: product_color,
      qty: qty,
    },
  };
};

export const addToCheckout = (data) => {
  return {
    type: actionTypes.ADD_TO_CHECKOUT,
    payload: data.kirim,
  };
};

export const clearCart = () => {
  return {
    type: actionTypes.CLEAR_CART,
  };
};

export const clearCheckout = () => {
  return {
    type: actionTypes.CLEAR_CHECKOUT,
  };
};

export const deleteBag = (itemId) => {
  return {
    type: actionTypes.REMOVE_FROM_BAG,
    payload: {
      id: itemId,
    },
  };
};

export const pickCart = (id) => {
  return {
    type: actionTypes.PICK_CART,
    payload: {
      id,
    },
  };
};

export const increaseQuantity = (itemId) => {
  return {
    type: actionTypes.QUANTITY_INCREASED,
    payload: {
      id: itemId,
    },
  };
};

export const decreaseQuantity = (itemId) => {
  return {
    type: actionTypes.QUANTITY_DECREASED,
    payload: {
      id: itemId,
    },
  };
};
