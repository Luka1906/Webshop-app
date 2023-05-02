
const AddToCartButton = ({onAddToCart}) => {
  const addItemHandler = (event) => {
    event.preventDefault();
    onAddToCart()
  }
  
    return (
      <form onSubmit={addItemHandler}>
        <button type="submit" className=" text-primary-color-red w-full border rounded-md p-2 tracking-wide bg-orange-100 border-none ">
        Add to Cart
      </button>

      </form>
       
      
   
    )
      
       

}

export default AddToCartButton