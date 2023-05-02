import Button from "../../UI/Button";
import { AllItems } from "../../data/AllItems";
import { useParams } from "react-router-dom";
import { useState,useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import {AiOutlineArrowUp,AiOutlineArrowDown} from 'react-icons/ai';
import CartContext from "../../store/cart-context";
import AddToCartButton from "./AddToCart";


const ProductsDetails = (props) => {
  const { id } = useParams();
  const chosenProduct = [...AllItems].find((product) => product.id === +id);
  const [quantity, setQuantity] = useState(1);
  const data = useLocation().state;

  const cartContext = useContext(CartContext);

  const addToCartHandler = () => {
    cartContext.addItem({
      id: data.id,
      image: data.image,
      name: data.description,
      amount: quantity,
      price: data.price,
      discountPrice: data.discountPrice,
     
      
    })
  }

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [chosenProduct]);

  const increaseHandler = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseHandler = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

 
  return (
    <div className="h-auto w-screen  flex">
      <div className="  flex flex-col items-center w-[35rem]  ">
        <img src={chosenProduct.images.image} className=" h-[30rem]" />
        <div className="flex gap-3 my-4">
          {chosenProduct.images.additionalImg.map((image) => (
            <div key={Math.floor(Math.random()*10000)}>
              <img src={image} className="w-[100px] h-[100px]" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5 items-start w-[35rem]  mx-auto ">
        <div className="text-gray-500">Item {chosenProduct.itemNumber}</div>
        <div className="text-title">{chosenProduct.description}</div>
        {chosenProduct.discount ? (
          <div className="flex gap-2 items-center">
            <p className="text-primary-color-red font-semi-bold-lato text-title">
              ${data.discountPrice}
            </p>
            <p className="line-through font-semi-bold-lato">
              ${chosenProduct.price.toFixed(2)}
            </p>
          </div>
        ) : (
          <p className="font-semi-bold-lato text-title text-primary-color-red">
            ${chosenProduct.price.toFixed(2)}
          </p>
        )}
        <div className="flex flex-col items-start">
          <p className="text-paragraph">Quantity</p>
          <div className="flex gap-3 my-2 relative right-1 items-center w-20 justify-center  ">
            <Button
              onDecrease={decreaseHandler}
              className="w-7 h-7  text-[1.2rem]  border-gray-600   border"
            >
           <AiOutlineArrowDown/>
            </Button>
            <p className="flex items-center justify-center">{quantity}</p>

            <Button
              onIncrease={increaseHandler}
              className="w-7 h-7 text-[1.2rem]   border-gray-600 border"
            >
              <AiOutlineArrowUp/>
            </Button>
          </div>
        </div>
        <div>
          <h2 className="font-semi-bold-lato">Description</h2>
          <p className="text-sm text-justify">{chosenProduct.details.productDetails}</p>

          <h2 className="font-semi-bold-lato my-4">
            {chosenProduct.details.specification && "Details"}
          </h2>
          <p className="relative bottom-4 text-sm">
            {chosenProduct.details.specification}
          </p>
        </div>
        <AddToCartButton quantity={quantity} onAddToCart = {addToCartHandler}/>
      </div>
    </div>
  );
};

export default ProductsDetails;
