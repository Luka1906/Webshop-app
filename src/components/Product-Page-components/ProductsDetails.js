import Button from "../../UI/Button";
import { AllItems } from "../../data/AllItems";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext, useRef } from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import CartContext from "../../store/cart-context";
import AddToCartButton from "./AddToCart";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { Rating } from "@mui/material";

const ProductsDetails = () => {
  const { id } = useParams();
  const chosenProduct = [...AllItems].find((product) => product.id === +id);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(chosenProduct.images.image);

  const mainImageHandler = (image, i) => {
    setMainImage(image);

    refs.current[i].classList.add("active-product");

    for (let j = 0; j < chosenProduct.images.additionalImg.length; j++) {
      if (i !== j) {
        refs.current[j].classList.remove("active-product");
      }
    }
  };

  const refs = useRef([]);

  const addRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

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
    });
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [chosenProduct]);

  const increaseHandler = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 5))
  };

  const decreaseHandler = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  return (
    <>

      <div className="w-screen flex flex-col items-center lg:flex-row">
        <div>
        <Link to="/products">
        <div className="flex gap-1 items-center mb-2 md:mt-0 mt-24 text-xs px-10 hover:underline">
          <IoIosArrowBack />

          <p>Back to results</p>
        </div>
      </Link>
        <div className="  flex flex-col items-center md: px-10">
          <div className="cursor-zoom-in">
            <TransformWrapper initialScale={1}>
              <TransformComponent className="cursor-zoom-in">
                <img
                  src={mainImage}
                  className="  w-[20rem] md:w-[30rem] h-[17rem]  md:h-[30rem]"
                  alt="productImg"
                />
              </TransformComponent>
            </TransformWrapper>
          </div>

          <div className="flex gap-3 relative top-4">
            {chosenProduct.images.additionalImg.map((image, i) => (
              <div
                key={i}
                onMouseOver={() => mainImageHandler(image, i)}
                ref={addRefs}
                className={`${
                  i === 0 ? "active-product cursor-pointer" : " cursor-pointer"
                }`}
              >
                <img
                  className=" w-[60px] h-[60px] md:w-[100px] md:h-[100px]"
                  src={image}
                  alt="productImg"
                />
              </div>
            ))}
          </div>
        </div>
        </div>
     
        <div className="flex flex-col gap-5 px-5 lg:px-0 items-center md:items-start w-[18rem] md:w-[28rem] mx-auto text-justify lg:mt-0 mt-12">
          <div className="text-gray-500">Item {chosenProduct.itemNumber}</div>
          <div className=" text-paragraph md:text-title text-center">
            {chosenProduct.description}
          </div>
          <div className="flex gap-1">
            <Rating
              name={chosenProduct.rating.name}
              value={chosenProduct.rating.value}
              precision={chosenProduct.rating.precision}
              readOnly
            />
            <p>{chosenProduct.reviewsNumber}</p>
          </div>

          {chosenProduct.discount ? (
            <div className="flex gap-2 items-center">
              <p className="text-primary-color-red font-semi-bold-lato text-paragraph md:text-title">
                ${data.discountPrice}
              </p>
              <p className="line-through font-semi-bold-lato">
                ${chosenProduct.price.toFixed(2)}
              </p>
            </div>
          ) : (
            <p className="font-semi-bold-lato text-subtitle md:text-title text-primary-color-red">
              ${chosenProduct.price.toFixed(2)}
            </p>
          )}
          <div className="flex flex-col items-start">
            <p className="text-paragraph">Quantity</p>
            <div className="flex gap-3 my-2 relative  items-center w-20 justify-center  ">
              <Button
                onDecrease={decreaseHandler}
                className="w-7 h-7  text-[1.2rem]  border-gray-600   border"
              >
                <AiOutlineArrowDown />
              </Button>
              <p className="flex items-center justify-center">{quantity}</p>

              <Button
                onIncrease={increaseHandler}
                className="w-7 h-7 text-[1.2rem]   border-gray-600 border"
              >
                <AiOutlineArrowUp />
              </Button>
            </div>
          </div>
          <div>
            <h2 className="font-semi-bold-lato">Description</h2>
            <p className="text-sm text-justify">
              {chosenProduct.details.productDetails}
            </p>

            <h2 className="font-semi-bold-lato my-4">
              {chosenProduct.details.specification && "Details"}
            </h2>
            <p className="relative bottom-4 text-sm">
              {chosenProduct.details.specification}
            </p>
          </div>
          <AddToCartButton quantity={quantity} onAddToCart={addToCartHandler} />
        </div>
      </div>
    </>
  );
};

export default ProductsDetails;
