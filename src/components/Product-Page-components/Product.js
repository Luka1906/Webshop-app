import { Link } from "react-router-dom";

const Product = ({
  image,
  description,
  price,
  rating,
  reviewsNumber,
  id,
  discount,
}) => {
  const discountPrice = (price - (price * discount) / 100).toFixed(2);

  return (
    <div className="relative border-[1.5px] border-stone-200 m-auto p-4 mb-5 h-[45vh]">
      <Link to={`/products/${id}`}>
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "28vh",
            boxShadow: "inset 0 0 0 1000px rgba(0,0,0,0.05)",
            cursor: "pointer",
          }}
          alt="recommended.jpeg"
        />
      </Link>
      {discount > 0 && (
        <div className="flex items-center justify-center border-none font-semi-bold-lato text-[1rem] absolute top-[-1rem] p-2  right-[-1rem] border w-10 h-10 rounded-full bg-primary-color-red text-white">
          <p>{discount}%</p>
        </div>
      )}

      <div className="flex flex-col items-start relative justify-around top-1 h-24  ">
        <p className=" text-[0.9rem] w-[220px] font-[550] ">{description}</p>
        <div className="flex gap-2 items-center">
          {rating}
          <p className="text-[0.92rem]">{reviewsNumber}</p>
        </div>
        <div className="flex items-center gap-2 text-lg justify-center font-semi-bold-lato ">
          <p className="text-primary-color-red">
            {discount > 0 && `$` + discountPrice}
          </p>
          <p
            className={`${
              discount > 0
                ? `text-text-color line-through`
                : `text-primary-color-red`
            } text-lg font-semi-bold-lato`}
          >{`$${price}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
