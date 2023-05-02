import { useContext, useState } from "react";
import CartModal from "../../../UI/CartModal";
import CartContext from "../../../store/cart-context";
import CartItems from "./CartItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../UI/Button";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartContext = useContext(CartContext);

  const hasItems = cartContext.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const cartRemoveAllHandler = (id) => {
    cartContext.removeAll(id);
  };

  const cartItems = cartContext.items.map((item) => (
    <CartItems
      key={item.key}
      image={item.image}
      amount={item.amount}
      name={item.name}
      price={item.price}
      discountPrice={item.discountPrice}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
      onRemoveAll={cartRemoveAllHandler.bind(null, item.id)}
    />
  ));

  const cartContent = (
    <>
      <div className="overflow-y-scroll h-[29rem]">{cartItems}</div>

      <div className="flex justify-center">
        <div className=" border-t-2 w-[85%] flex flex-col  justify-center pt-3 absolute  bottom-10">
          <div className=" flex justify-between">
            <h2 className="text-xl">Item(s) total</h2>
            <h2 className="text-xl font-semi-bold-lato">
              ${cartContext.totalAmount.toFixed(2)}
            </h2>
          </div>
          <button className=" rounded-lg p-[0.4rem] mt-5 bg-orange-200 hover:scale-105 transform transition-all hover:translate-y-[-3px]  hover:bg-orange-300  text-primary-color-red">
            Proceed to checkout
          </button>
        </div>
      </div>
    </>
  );

  const emptyCartContent = ( 
    <div className=" h-[80%] flex flex-col items-center justify-center">
    <h1 className="text-center text-title ">Your Cart is empty!</h1>
    <Link to="products">
    <p className="cursor-pointer underline" onClick={cartContext.closeCartHandler}>Discover something unique to fill it up </p>
    </Link>
   
    </div>
  )
  return (
    <>
      {cartContext.openCart && (
        <CartModal onClose={cartContext.closeCartHandler}>
          <div className="flex w-full justify-center font-semi-bold-lato">
            <h2 className="mb-3">Your Shopping Cart</h2>
            <FontAwesomeIcon
              onClick={cartContext.closeCartHandler}
              icon={faXmark}
              className="absolute right-6 text-[1.5rem] cursor-pointer"
            />
          </div>
          {hasItems ? cartContent : emptyCartContent}
        </CartModal>
      )}
    </>
  );
};

export default Cart;
