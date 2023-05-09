const DiscountContainer = ({ discount,className }) => {
  return (
    <>
      {discount > 0 && (
        <div className={`${className} flex items-center justify-center border-none font-semi-bold-lato w-10 h-10 rounded-full bg-primary-color-red text-white`}>
          <p>{discount}%</p>
        </div>
    
      )}
    </>
  );
};

export default DiscountContainer
