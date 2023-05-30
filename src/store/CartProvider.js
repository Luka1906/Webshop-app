import React,{useReducer, useState,useEffect} from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: JSON.parse(localStorage.getItem("item")) || [],
    totalAmount: JSON.parse(localStorage.getItem("totalAmount")) || 0,


}
const cartReducer = (state,action) => {
    if(action.type === "ADD") { 
        const updatedTotalAmount =   state.totalAmount +  (action.item.discountPrice? action.item.discountPrice : action.item.price) * action.item.amount
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItemElement = state.items[existingCartItemIndex];
        let updatedItems;
        if(existingCartItemElement) {
            const updatedItem = {
                ...existingCartItemElement,
                amount: existingCartItemElement.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem

        } else {
            updatedItems = state.items.concat(action.item);
        }
    
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
       
    }
    if(action.type==="REMOVE") {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
        const existingCartItemElement = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - (existingCartItemElement.discountPrice? existingCartItemElement.discountPrice : existingCartItemElement.price);
        let updatedItems;

        if(existingCartItemElement.amount > 1) {
            const updatedItem= {
                ...existingCartItemElement, 
                amount: existingCartItemElement.amount - 1
            }
            updatedItems=[...state.items];
            updatedItems[existingCartItemIndex] = updatedItem 
        } else {
          
               updatedItems = state.items.filter(item=>item.id !==action.id)
        }
       
        return {
            items: updatedItems,
            totalAmount: Math.abs(updatedTotalAmount)
        }
        

    }

    if(action.type === "REMOVEALL") {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
        const existingCartItemElement = state.items[existingCartItemIndex];
        let updatedItem = state.items.filter(item=>item.id !==action.id);
        const updatedTotalAmount = state.totalAmount - (existingCartItemElement.discountPrice? existingCartItemElement.discountPrice * existingCartItemElement.amount : existingCartItemElement.price * existingCartItemElement.amount )                        

      return {
        items: updatedItem,
        totalAmount:Math.abs(updatedTotalAmount)
      }

         
    }

    if(action.type === "CLEAR") {
       return {
        items: [],
        totalAmount: 0,
       }
    }

    return defaultCartState
}
  

const CartProvider = (props) => {
    const [cart, dispatchCartFunction] = useReducer (cartReducer, defaultCartState)
    const [openCart, setOpenCart] = useState(false);
    
    const addToCartHandler = item => {
        dispatchCartFunction({type:"ADD", item: item})
    };

    const removeFromCartHandler = id => {
        dispatchCartFunction({type:"REMOVE", id: id})
        
    };

    const clearCartHandler = () => {
        dispatchCartFunction({type: "CLEAR"})
    };
    const openCartHandler = () => {
        setOpenCart(true);
        document.body.style.overflow = "hidden"

    };
    const closeCartHandler = () => {
        setOpenCart(false)
        document.body.style.overflow= "scroll"

    }
   
    const removeAllHandler = id => {
        dispatchCartFunction({type: "REMOVEALL", id:id})
    }

    useEffect(() => {
        localStorage.setItem("item", JSON.stringify(cart.items));
      }, [cart.items]);

      useEffect(() => {
        localStorage.setItem("totalAmount", JSON.stringify(cart.totalAmount));
      }, [cart.totalAmount]);

    
    const cartContext = {
        items: cart.items,
        totalAmount: cart.totalAmount,
        addItem:addToCartHandler,
        removeItem: removeFromCartHandler,
        removeAll: removeAllHandler,
        clearCart: clearCartHandler,
        openCartHandler: openCartHandler,
        closeCartHandler: closeCartHandler,
        openCart: openCart,
    
        


    }
    return  (
        <CartContext.Provider value ={cartContext}>
           {props.children}
        </CartContext.Provider>
    )
   

}

export default CartProvider
