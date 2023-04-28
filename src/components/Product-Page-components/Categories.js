
import { AllItems } from "../../data/AllItems";

const Categories = ({setItems, categories, filterItems,title,setTitle, searchItems}) => {


  return (
    <div className="my-16">
      <h1 className="text-center text-paragraph font-bold-lato">{title}</h1>
      <div className="flex justify-around w-[60vw] m-auto text-xs gap-3 my-12">
        <button onClick={()=> {setItems(AllItems); setTitle("All")} } className="border-[1.2px] border-gray-600 p-2 w-20 font-semi-bold-lato rounded-md text-text-color  m-auto">All</button>
        {categories.map((itemCategory,id) => (
          <button key={id} onClick={()=> {filterItems(itemCategory, searchItems); setTitle(itemCategory)} } className="border-[1.2px] border-gray-600 p-2 w-20 font-semi-bold-lato rounded-md text-text-color  m-auto ">
           {itemCategory}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
