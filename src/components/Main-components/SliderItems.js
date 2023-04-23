import Button from "../../UI/Button";
import Card from "../../UI/Card";

const SliderItems = ({ image, description, price }) => {
  return (
    <div className="w-[220px] m-auto p-3  ">

      <img className="" src={image} />
      <div className="flex flex-col items-center relative top-1 ">
        <p className="text-center text-sm w-[200px]">{description}</p>
        <p className="text-text-color">{`$${price}`}</p>
      </div>
      <div className="flex justify-center">
      <button type="button" className="w-3/4 text-text-color rounded-lg text-sm relative top-3 py-1 tracking-wide bg-slate-100  ">Add to cart!</button>
      </div>

    </div>

   
  );
};

export default SliderItems;
