import * as actionTypes from '../actionTypes';

export const addToBag = (
  itemId,
  product_name,
  product_price,
  product_photo,
  product_size,
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
      qty: qty,
    },
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
