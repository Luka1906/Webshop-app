import React, { createContext } from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item)=> {},
    removeItem: (id) => {},
    removeAll: (id) => {},
    clearCart: () => {},
    openCartHandler: () => {},
    closeCartHandler: () => {},
    openCart: null,


})

export default CartContext 
