import { BsTrash } from "react-icons/bs";

const CartItems = ({
  amount,
  name,
  image,
  price,
  discountPrice,
  onRemove,
  onAdd,
  onRemoveAll,
}) => {
  const sumPerItem = discountPrice ? discountPrice * amount : price * amount;
  return (
    <>
      <div className="flex flex-col items-center">
        <div className=" w-[90%]  md:h-[10rem] flex text-[0.8rem] md:text-[0.85rem] p-4 bg-white items-start relative top-8 mb-3">
          <img
            src={image}
            className="w-[90px] h-[90px] md:h-[110px] md:w-[110px] "
            alt="cartImg"
          />
          <div className="flex flex-col px-2  md:px-3 justify-between h-[6.5rem]">
            <div className="flex">
              <p className=" text-[0.75rem]  md:text-[0.8rem] ">{name}</p>
              <p className="font-semi-bold-lato relative left-3 ">
                ${discountPrice ? discountPrice : price}
              </p>
            </div>

            <div className="flex items-start gap-3 ">
              <div className="flex absolute bottom-1 md:static left-[30px] gap-2">
                <button
                  onClick={onRemove}
                  className="w-[1.4rem] h-[1.4rem] cursor-pointer rounded-full border-2 flex items-center justify-center active:scale-110"
                >
                  -
                </button>
                <p className="">{amount}</p>
                <button
                  onClick={onAdd}
                  className="w-[1.4rem] h-[1.4rem] cursor-pointer border-2 rounded-full flex items-center justify-center active:scale-110"
                >
                  +
                </button>
              </div>
              <div className="absolute bottom-2 md:static right-[5.5rem]  font-semi-bold-lato">
                ${sumPerItem.toFixed(2)}
              </div>

              <BsTrash
                onClick={onRemoveAll}
                className="absolute right-4 bottom-2.5 md:bottom-[2.8rem]  text-[0.9rem] cursor-pointer text-red-700"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;
