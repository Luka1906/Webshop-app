import Card from "../../UI/Card";
import { MdOutlineCelebration } from "react-icons/md";
import { motion } from "framer-motion";
import { orderSuccessAnimation } from "../../animations/Auth-animation";
import { useContext } from "react";
import CartContext from "../../store/cart-context";


let clearCart = true;

const CheckOutSuccess = () => {
  const generateRandomOrderNumber = (length) => {
    let number = "0123456789";
    let result = "";
    for (let i = length; i > 0; i--) {
      result += number[Math.round(Math.random() * (number.length - 1))];
    }
    return result;
  };

  const cartContext = useContext(CartContext);

  if (clearCart) {
    cartContext.clearCart();

  }
  clearCart = false;

  return (
    <motion.div
      variants={orderSuccessAnimation}
      initial={"hidden"}
      animate={"visible"}
    >
      <Card className="m-auto rounded-md w-[25rem]">
        <div className="flex flex-col items-center gap-2 mt-10 mb-10 p-5">
          <div className="flex items-center gap-1">
            <h2 className="text-title text-primary-color-red font-semi-bold-lato">
              Thank you for your order!
            </h2>
            <MdOutlineCelebration className="text-2xl text-orange-600" />
          </div>

          <p>Thank you for purchasing from SerbShop store</p>
          <p>
            Your order number is{" "}
            <span className="font-semi-bold-lato">
              #{generateRandomOrderNumber(7)}
            </span>
          </p>
        </div>
      </Card>
    </motion.div>
  );
};

export default CheckOutSuccess;
