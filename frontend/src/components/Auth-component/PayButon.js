import { Link} from "react-router-dom";
import { getAuthToken } from "../../util/auth";
import CartContext from "../../store/cart-context";
import { useContext } from "react";


const PayButton = ({ cartItems }) => {
  const token = getAuthToken();
  const cartContext = useContext(CartContext)

  const handleCheckout = async () => {
    const response = await fetch(
      "http://localhost:4000/api/stripe/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartItems }),
      }
    );
    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
    }
  };
  return (
    <>
      {token ? (
        <button
          className=" w-[100%] rounded-lg p-1.5 mt-5 bg-orange-200 active:scale-110 transform transition-all hover:translate-y-[-3px]  hover:bg-orange-300  text-primary-color-red"
          onClick={() => handleCheckout()}
          type="submit"
        >
          {" "}
          Proceed to checkout
        </button>
      ) : (
        <Link 
        to="signIn"
        onClick={cartContext.closeCartHandler}>
          <button
            className=" w-[100%] rounded-lg p-1.5 mt-5 bg-orange-200 active:scale-110 transform transition-all hover:translate-y-[-3px]  hover:bg-orange-300  text-primary-color-red"
            type="submit"
          >
            {" "}
            Login to checkout
          </button>
        </Link>
      )}
    </>
  );
};

export default PayButton;
