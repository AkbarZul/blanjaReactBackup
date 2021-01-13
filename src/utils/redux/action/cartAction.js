import * as actionTypes from '../actionTypes';

export const addToBag = (itemId, product_name, product_price, product_photo) => {
    return {
        type: actionTypes.ADD_TO_BAG,
        payload: {
            id: itemId,
            name: product_name,
            price: product_price,
            photo: product_photo,
        },
    };
};