import { Link } from "react-router-dom";
import DiscountContainer from "./Discount";

const SliderItems = ({ image, title, price, discount,id,description }) => {
  const discountPrice = (price - (price * discount) / 100).toFixed(2);
  return (
    <>
      <div className=" m-auto p-8">
        <DiscountContainer
          className="absolute right-0 top-3"
          discount={discount}
        />

        <img
          className="w-[150px] md:w-[160px] lg:w-[170px]"
          src={image}
          alt="popular-items"
        />

        <div className="flex flex-col items-center relative top-1 ">
          <p className="text-center text-sm w-[200px]">{title}</p>
          <div className="flex gap-3">
            <p className="text-primary-color-red font-semi-bold-lato">
              {discount ? discountPrice : ""}
            </p>
            <p
              className={` font-semi-bold-lato ${
                discount > 0 ? "line-through" : ""
              }`}
            >{`$${price}`}</p>
          </div>
        </div>

        <div className="flex justify-center">
          <Link className="w-3/4 font-semi-bold-lato text-center rounded-lg text-sm relative top-3 py-1 tracking-wide bg-slate-100 hover:bg-slate-300 active:scale-110" state={{discountPrice: discountPrice,id: id, description: description, price:price, image:image }} to={`products/${id}`}>
            <button
              type="button"
            >
              Add to cart
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SliderItems;
