import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AllItems } from "../../data/AllItems";

const SearchForm = ({searchItems, setTitle, setItems, setPage}) => {
  const location = useLocation();

  const [searchInput, setSearchInput] = useState("")


  const searchItemsHandler = (searchValue) => {
    setSearchInput(searchValue)
    searchItems(searchInput)

    }
  return (
    <div className="flex items-center justify-between"> 
      <input
       onFocus={()=>{setTitle("All"); setItems([...AllItems]); setPage(0); localStorage.removeItem("current")}}
       onChange={(e) => searchItemsHandler(e.target.value)}
       className="absolute bg-transparent top-24 left-10 p-1 outline-none border-b border-text-color color placeholder:text-text-color placeholder:text-sm"
       placeholder="Search products"
      />
      <span>
 <Link to={location.pathname === "/" ? "products" : ""}><FontAwesomeIcon className="absolute top-[6.3rem] left-48 text-[1.2rem] text-text-color text-vlack cursor-pointer" icon={faMagnifyingGlass} /></Link>  
      </span>
    </div>
  );
};

export default SearchForm;
