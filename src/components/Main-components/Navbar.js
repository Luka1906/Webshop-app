import Logo from "./Logo";
import bag from "../../assets/logos/bag.svg";
import user from "../../assets/logos/user.svg";
import { NavLink, useRouteLoaderData, Link } from "react-router-dom";
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cartAnimation } from "../../animations/Cart-animation";
import SignInPopUp from "../SingIn-components/SignInPopUp";
import { Form } from "react-router-dom";
import { BsSearch } from "react-icons/bs";


import { useMediaQuery } from "@mui/material";

const Navbar = ({ pathname }) => {
  
  const token = useRouteLoaderData("root");

  const cartContext = useContext(CartContext);
  const numberOfCartItems = cartContext.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const [cartIsAnimated, setCartIsAnimated] = useState(false);
  const [singInPopUp, setSignInPopUp] = useState(false);

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setCartIsAnimated(true);
    const timer = setTimeout(() => {
      setCartIsAnimated(false);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  const signInHoverHandler = () => {
    setSignInPopUp(true);
  };
  const signInHoverOutHandler = () => {
    setSignInPopUp(false);
  };

  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <div className="relative">
      <div
        className={`${
          pathname === "/" ? "absolute top-0 z-30" : ""
        } w-full h-1/7 text-black`}
      >
        <nav className="flex justify-around md:justify-between items-center  md:px-8">
          <div className="md:static absolute left-[-1rem] top-[-0.5rem]">
            <Link to="/">
              <Logo />
            </Link>
          </div>
            <div className="flex items-center gap-5 md:static absolute right-[-1rem] top-[2.4rem]">
              <NavLink
                className={({ isActive }) => (isActive ? "border-b-2 border-primary-color-red" : undefined)}
                to="/"
              >
                {isMobile? "" : <p>Home</p>}
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? `${isMobile? "" : "border-b-2 border-primary-color-red" }` : undefined)}
                to="products"
              >
               {isMobile? <BsSearch className="text-2xl"/> : <p>Categories</p>} 
              </NavLink>

              <div className=" flex ">
                <div>
                  <img
                    onMouseOver={signInHoverHandler}
                    src={user}
                    alt="signUp-icon"
                  />
                </div>

                {singInPopUp && <SignInPopUp onClose={signInHoverOutHandler} />}
              </div>
              {token ? (
                <Form action="logout" method="POST">
           {isMobile? "" : <button className="cursor-pointer">Sign out</button> } 
                </Form>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "border-b-2 border-primary-color-red" : undefined
                  }
                  to="signIn"
                >
         {isMobile? "" : <p>Sign in</p> } 
                </NavLink>
              )}
                  <div
              className="flex items-center cursor-pointer md:static relative right-4  "
              onClick={cartContext.openCartHandler}
            >
              <motion.img
                variants={cartAnimation}
                initial={cartIsAnimated ? "initial" : ""}
                animate={cartIsAnimated ? "animate" : ""}
                src={bag}
                alt="cart"
                className=""
              />
             { numberOfCartItems <=99 ? <p className="relative text-sm  right-6 top-0.5 text-center w-5 ">
                {numberOfCartItems}
              </p> : <p className="ml-2 mr-2 text-sm">({numberOfCartItems})</p>}
            </div>
            </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
