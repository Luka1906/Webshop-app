import { AllItems } from "../../data/AllItems";
import Product from "./Product";
import Categories from "./Categories";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import SearchForm from "./SearchForm";

const Products = () => {
  const [items, setItems] = useState(
    JSON.parse(sessionStorage.getItem("items")) || AllItems
  );

  useEffect(() => {
    sessionStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const [pageNumber, setPageNumber] = useState(
    sessionStorage.getItem("current-page") || 0
  );

  useEffect(() => {
    sessionStorage.setItem("current-page", pageNumber);
  }, [pageNumber]);

  useEffect(() => {
    sessionStorage.setItem("active-page", "paginationActive");
  }, []);


  const [title, setTitle] = useState(sessionStorage.getItem("title") || "All");

  useEffect(() => {
    sessionStorage.setItem("title", title);
  }, [title]);

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

  const changePageHandler = ({ selected }) => {
    setPageNumber(selected);
    console.log(selected);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [displayItems]);

  const shopCategories = [...new Set(AllItems.map((Val) => Val.category))];
  const filterItems = (itemCategory) => {
    const newItem = [...AllItems].filter((item) => {
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
    } else {
      setItems([...AllItems]);
    }
  };

  return (
    <>
      <SearchForm
        searchItems={searchItems}
        setTitle={setTitle}
        setItems={setItems}
        setPage={setPageNumber}
      />
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
        {displayItems.length === 0? <p className="m-auto text-paragraph text-primary-color-red font-semi-bold-lato">No items found!</p> : displayItems}
      </div>

      <ReactPaginate
        pageCount={pageCount}
        onPageChange={changePageHandler}
        forcePage={+pageNumber}
        containerClassName={`paginationBttns`}
        previousLinkClassName={`previousBttn`}
        nextLinkClassName={"nextBttn"}
        activeClassName={"paginationActive"}
      />
    </>
  );
};

export default Products;
