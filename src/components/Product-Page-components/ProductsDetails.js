import Button from "../../UI/Button";
import { AllItems } from "../../data/AllItems";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ProductsDetails = () => {
  const { id } = useParams();
  console.log(id);
  const chosenProduct = [...AllItems].find((product => product.id === +id));
  const [quantity, setQuantity] = useState(0);

  const increaseHandler = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseHandler = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
  };

  return (
    <div className="h-auto w-screen  flex">
      <div className="  flex flex-col items-center w-[35rem]  ">
        <img src={chosenProduct.images.image} className=" h-[30rem]" />
        <div className="flex gap-3 my-4">
          {chosenProduct.images.additionalImg.map((image) => (
            <div>
              <img src={image} className="w-[100px] h-[100px]" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5 items-start w-[35rem]  mx-auto ">
        <div className="text-gray-500">Item {chosenProduct.itemNumber}</div>
        <div className="text-title">{chosenProduct.description}</div>
        <div className="text-primary-color-red font-semi-bold-lato text-title">
          {`$${chosenProduct.price.toFixed(2)}`}
        </div>
        <div className="flex flex-col items-start">
          <p className="text-paragraph">Quantity</p>
          <div className="flex gap-3 my-2 relative right-1 items-center w-20 justify-center  ">
            <Button
              onDecrease={decreaseHandler}
              className="w-6 h-6 rounded-full text-[1.3rem]  border"
            >
              -
            </Button>
            <p className="flex items-center justify-center">
            {quantity}
            </p>

        
            <Button
              onIncrease={increaseHandler}
              className="w-6 h-6 rounded-full  border"
            >
              +
            </Button>
          </div>
        </div>
        <button className=" text-primary-color-red w-full border rounded-md p-2 tracking-wide bg-orange-100 border-none ">Add to Cart</button>

      </div>
    </div>
  ); 
};

export default ProductsDetails;
