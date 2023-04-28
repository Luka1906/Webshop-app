import { AllItems } from "../../data/AllItems";
import Product from "./Product";
import Categories from "./Categories";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import SearchForm from "./SearchForm";


const Products = () => {
  const [items, setItems] = useState([...AllItems]);
  const [pageNumber, setPageNumber] = useState(0);
  const [title, setTitle] = useState("All");

  const itemsPerPage = 8;
  const currentItems = pageNumber * itemsPerPage;

  const displayItems = items
    .slice(currentItems, currentItems + itemsPerPage)
    .map((item) => {
      return (
        <Product
          key={item.id}
          image={item.image}
          description={item.description}
          price={item.price}
          rating={item.rating}
          reviewsNumber={item.reviewsNumber}
        />
      );
    });

  const pageCount = Math.ceil(items.length / itemsPerPage);

  const changePageHandler = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [displayItems]);

  const shopCategories = [...new Set(AllItems.map((Val) => Val.category))];

  const filterItems = (itemCategory) => {
    const newItem = AllItems.filter((item) => {
      return item.category === itemCategory;
    });
    setItems(newItem);
    setTitle(itemCategory);
  };

  const searchItems = (searchInput) => {
    if (searchInput !== "") {
      const newItem = AllItems.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setItems(newItem);
    } else {
      setItems(AllItems);
    }
  };

  return (
    <>
      <SearchForm searchItems={searchItems} setTitle={setTitle} setItems={setItems} />
      <Categories
        categories={shopCategories}
        setItems={setItems}
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
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </>
  );
};

export default Products;
