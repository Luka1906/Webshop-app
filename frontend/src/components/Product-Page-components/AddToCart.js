import { useEffect } from "react";

const AddToCartButton = ({onAddToCart}) => {
  const addItemHandler = () => {
    onAddToCart()
  }
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [onAddToCart]);
  

  
    return (
        <button onClick={addItemHandler} type="submit" className=" text-primary-color-red w-full border rounded-md p-2 tracking-wide bg-orange-100 border-none active:scale-110 transform transition-all hover:translate-y-[-3px]  hover:bg-orange-300 ">
        Add to Cart
      </button>

  
       
      
   
    )
      
       

}

export default AddToCartButton