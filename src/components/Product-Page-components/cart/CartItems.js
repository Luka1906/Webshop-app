import { BsTrash } from "react-icons/bs";

const CartItems = ({
  amount,
  name,
  image,
  price,
  discountPrice,
  onRemove,
  onAdd,
  onRemoveAll

}) => {
    const sumPerItem = discountPrice? discountPrice * amount : price * amount;
  return (
    <>
      <div className="flex flex-col items-center">
        <div className=" w-[90%] flex text-[0.85rem] p-4 bg-white items-start relative top-8 mb-3">
          <img src={image} className="w-[100px]" />
          <div className="flex flex-col px-3 justify-between h-[6.5rem]">
            <p className="text-[0.85rem]">{name}</p>
            <div className="flex items-center ">
              <div className="flex gap-2">
                <button
                  onClick={onRemove}
                  className="w-[1.4rem] h-[1.4rem] cursor-pointer rounded-full border-2 flex items-center justify-center"
                >
                  -
                </button>
                <p>{amount}</p>
                <button
                  onClick={onAdd}
                  className="w-[1.4rem] h-[1.4rem] cursor-pointer border-2 rounded-full flex items-center justify-center"
                >
                  +
                </button>
              </div>
              <div className="absolute right-16 font-semi-bold-lato">
                ${sumPerItem.toFixed(2)}
              </div>

              <BsTrash onClick={onRemoveAll} className="absolute right-4 text-[0.9rem] cursor-pointer text-red-700"/>
            </div>
          </div>

          <p className="font-semi-bold-lato absolute right-2.5">
            ${discountPrice ? discountPrice : price}
          </p>
        </div>
      </div>
    </>
  );
};

export default CartItems;
