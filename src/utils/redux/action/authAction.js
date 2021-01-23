import * as actionTypes from '../actionTypes';

export const login = (token, user_id, level) => {
    return {
      type: actionTypes.LOGIN,
      payload: {
        token: token,
        user_id: user_id,
        level: level,
      },
    };
  };
  
  export const logout = () => {
    return {
      type: actionTypes.LOGOUT,
    };
  };