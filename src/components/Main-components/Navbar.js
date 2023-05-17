import Logo from "./Logo";
import bag from "../../assets/logos/bag.svg";
import user from "../../assets/logos/user.svg";
import { Link } from "react-router-dom";
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cartAnimation } from "../../animations/Cart-animation";
import SignInPopUp from "../SingIn-components/SignInPopUp";

const Navbar = ({ pathname }) => {
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
  return (
    <div className="relative">
      <div
        className={`${
          pathname === "/" ? "absolute top-0 z-30" : ""
        } w-full h-1/7 text-black`}
      >
        <nav className="flex justify-between items-center   px-10">
          <div className="flex flex-col items-center ">
            <div className="flex gap-1.5 ">
              <select
                className="outline-none cursor-pointer bg-transparent "
                name="languages"
              >
                <option value="EN">EN</option>
                <option value="SERB">SRB</option>
              </select>
              <Link to="/">
                <Logo />
              </Link>
            </div>
          </div>

          <div className="flex  items-center gap-5 ">
            <Link to="/">
              <p className="hidden lg:block">About Us</p>
            </Link>
            <Link to="products">
              <p className="hidden lg:block">Categories</p>
            </Link>

            <div className="flex flex-col relative ">
              <div className="cursor-pointer">
              <img
                onMouseOver={signInHoverHandler}
                src={user}
                 alt="signUp-icon"
              />

              </div>

              {singInPopUp && <SignInPopUp onClose={signInHoverOutHandler} />}
            </div>

            <div
              className="flex cursor-pointer"
              onClick={cartContext.openCartHandler}
            >
              <motion.img
                variants={cartAnimation}
                initial={cartIsAnimated ? "initial" : ""}
                animate={cartIsAnimated ? "animate" : ""}
                src={bag}
                alt="cart"
              />
              <p className="relative text-sm right-6 top-1.5 text-center w-5 ">
                {numberOfCartItems}
              </p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
