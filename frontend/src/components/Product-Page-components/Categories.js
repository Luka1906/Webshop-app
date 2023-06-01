import { AllItems } from "../../data/AllItems";

const Categories = ({
  setItems,
  categories,
  filterItems,
  title,
  setTitle,
  searchItems,
  setPageNumber,
}) => {
  return (
    <div className="my-16">
      <h1 className="text-center text-paragraph font-bold-lato md:mt-0 mt-56 ">{title}</h1>
      <div className="flex flex-wrap md:flex-nowrap justify-around w-[60vw] mx-auto text-xs gap-3 my-12 ">
        <button
          onClick={() => {
            setItems(AllItems);
            setTitle("All");
            setPageNumber(0);

          }}
          className="border-[1.2px] border-gray-600 p-2 w-20 h-9 font-semi-bold-lato rounded-md text-text-color m-auto  hover:border-primary-color-red hover:border-[2px] "
        >
          All
        </button>
        {categories.map((itemCategory, id) => (
          <button
            key={id}
            onClick={() => {
              filterItems(itemCategory, searchItems);
              setTitle(itemCategory);
              setPageNumber(0);
            }}
            
            className="border-[1.2px] border-gray-600 p-2 w-20 h-9 font-semi-bold-lato rounded-md text-text-color  m-auto  hover:border-primary-color-red hover:border-[2px] "
          >
            {itemCategory}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
