import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import {  useState } from "react";
import { AllItems } from "../../data/AllItems";

const SearchForm = ({searchItems, setTitle, setItems, setPage}) => {


  const [searchInput, setSearchInput] = useState("")


  const searchItemsHandler = (searchValue) => {
    setSearchInput(searchValue)
    searchItems(searchInput)

    }
  return (
    <div className="flex items-center justify-between"> 
      <input
       onFocus={()=>{setTitle("All"); setItems([...AllItems]); setPage(0); }}
       onChange={(e) => searchItemsHandler(e.target.value)}
       className="absolute bg-transparent top-24 left-10 p-1 outline-none border-b border-text-color color placeholder:text-text-color placeholder:text-sm"
       placeholder="Search products"
      />
      <span>
<FontAwesomeIcon className="absolute top-[6.3rem] left-48 text-[1.2rem] text-text-color text-vlack " icon={faMagnifyingGlass} />
      </span>
    </div>
  );
};

export default SearchForm;
