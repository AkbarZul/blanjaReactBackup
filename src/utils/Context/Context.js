import React, {useState} from 'react';

export const ContextCart = React.createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    return (
        <ContextCart.Provider value={[cart, setCart]}>
            {props.children}
        </ContextCart.Provider>
    )
}