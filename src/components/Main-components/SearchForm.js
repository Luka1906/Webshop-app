import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchForm = () => {
  return (
    <div className="flex items-center justify-between"> 
      <input
      className="p-1 outline-none bg-transparent border-b border-text-color color placeholder:text-text-color placeholder:text-sm"
       placeholder="Search products"
      />
      <span className="inline-block relative right-6  ">
        <FontAwesomeIcon className="text-[1.2rem] text-text-color text-vlack cursor-pointer" icon={faMagnifyingGlass} />
      </span>
    </div>
  );
};

export default SearchForm;
