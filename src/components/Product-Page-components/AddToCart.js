
const AddToCartButton = ({onAddToCart}) => {
  const addItemHandler = () => {
    onAddToCart()
  }
  
    return (
        <button onClick={addItemHandler} type="submit" className=" text-primary-color-red w-full border rounded-md p-2 tracking-wide bg-orange-100 border-none ">
        Add to Cart
      </button>

  
       
      
   
    )
      
       

}

export default AddToCartButton