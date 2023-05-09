import { AllItems } from "../../data/AllItems";
import Product from "./Product";
import Categories from "./Categories";
import { useEffect, useState} from "react";
import { useMediaQuery } from "@mui/material";
import ReactPaginate from "react-paginate";
import SearchForm from "./SearchForm";


const Products = () => {

  const [items, setItems] = useState([...AllItems]);

  const [pageNumber, setPageNumber] = useState (localStorage.getItem("currentPage"))
  const [title, setTitle] = useState("All");
  
  const itemsPerPage = 8;
  const currentItems = pageNumber * itemsPerPage;

  const displayItems = items
    .slice(currentItems, currentItems + itemsPerPage)
    .map((item) => {
      return (
        <Product
          id={item.id}
          key={item.id}
          image={item.images.image}
          description={item.description}
          price={item.price}
          rating={item.rating}
          reviewsNumber={item.reviewsNumber}
          discount={item.discount}
          setPageNumber={setPageNumber}
        />
      );
    });

  const pageCount = Math.ceil(items.length / itemsPerPage);
  console.log(pageNumber)

  const changePageHandler = ({ selected }) => {
    setPageNumber(selected)
    localStorage.setItem("currentPage", selected);
     
  };


  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [displayItems]);

 
  const shopCategories = [...new Set(AllItems.map((Val) => Val.category))];

  const filterItems = (itemCategory) => {
   const newItem =[...AllItems].filter((item) => {
      return item.category === itemCategory;
    });
    setItems(newItem);
    setTitle(itemCategory);
  
  };

  const searchItems = (searchInput) => {
    if (searchInput.length > 1) {
      const newItem = [...AllItems].filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setItems(newItem);
      console.log(newItem)
    } else {
      setItems([...AllItems]);
    }
  };

  const isMobile = useMediaQuery("(max-width:576px)");

  return (
    <>
      <SearchForm searchItems={searchItems} setTitle={setTitle} setItems={setItems} setPage={setPageNumber} />
      <Categories
        categories={shopCategories}
        setItems={setItems}
        setPageNumber={setPageNumber}
        filterItems={filterItems}
        title={title}
        setTitle={setTitle}
        searchItems={searchItems}
      />

      <div className="flex flex-wrap w-[80vw] mx-auto m-16  gap-6">
        {displayItems}
      </div>

      <ReactPaginate
        pageCount={pageCount}
        onPageChange={changePageHandler}
        forcePage={pageNumber}
        containerClassName={"paginationBttns"}
        previousLinkClassName={`previousBttn`}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
    
      />
    </>
  );
};

export default Products;
