import { redirect } from "react-router-dom";
import axios from "axios";
const PayButton = ({ cartItems }) => {
  const handleCheckout = () => {
    axios
      .post("http://localhost:4000/api/stripe/create-checkout-session", {
        cartItems
      })
      .then((res) => {
        if (res.data.url) {
            console.log(res.data.url)
          window.location.href = res.data.url;
        }
      }) 
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <button
        className=" w-[100%] rounded-lg p-1.5 mt-5 bg-orange-200 hover:scale-105 transform transition-all hover:translate-y-[-3px]  hover:bg-orange-300  text-primary-color-red"
        onClick={() => handleCheckout()}
        type="submit"
      >
        {" "}
        Proceed to checkout
      </button>
    </>
  );
};

export default PayButton;
