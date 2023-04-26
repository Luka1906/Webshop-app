import { AllItems } from "../../data/AllItems";
import Product from "./Product";
import Categories from "./Categories";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Products = () => {
  const [items, setItems] = useState(AllItems.slice(0,38));
  const [pageNumber, setPageNumber] = useState(0);

  const itemsPerPage = 8;
  const currentItems = pageNumber * itemsPerPage;

  const displayItems = items
    .slice(currentItems, currentItems + itemsPerPage)
    .map((item) => {
      return (
        <Product
          image={item.image}
          description={item.description}
          price={item.price}
          rating={item.rating}
          reviewsNumber={item.reviewsNumber}
        />
      );
    });
  
    const pageCount = Math.ceil(items.length/itemsPerPage);
    
    const changePageHandler = ({selected}) => {
        setPageNumber(selected)

    }

    useEffect(()=> {
      window.scrollTo({top:0})

    },[displayItems])

  return (
    <>
      <Categories />
      <div className="flex flex-wrap w-[80vw] mx-auto m-16  gap-6">
      {displayItems}
      </div>
      <div className="">
      <ReactPaginate
     
      pageCount={pageCount}
      onPageChange={changePageHandler}
      containerClassName={"paginationBttns"}
      previousLinkClassName={"previousBttn"}
      nextLinkClassName={"nextBttn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}
      

       
      
      />
      </div>
    </>
  );
};

export default Products;
