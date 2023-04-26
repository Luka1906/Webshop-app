const Product = ({ image, description, price, rating, reviewsNumber }) => {
  return (
    <div className="border-[1.5px] border-stone-200 m-auto p-4 mb-5 h-[45vh]">
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

      <div className="flex flex-col items-start relative justify-around top-1 h-24  ">
        <p className=" text-[0.9rem] w-[220px] font-[550] ">{description}</p>
        <div className="flex gap-2 items-center">
          {rating}
          <p className="text-[0.92rem]">{reviewsNumber}</p>
        </div>

        <p className="text-primary-color-red text-lg font-semi-bold-lato ">{`$${price}`}</p>
      </div>
    </div>
  );
};

export default Product;
