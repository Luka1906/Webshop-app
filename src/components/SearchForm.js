import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchForm = () => {
  return (
    <div>
      <input
        className=" lg:w-96 w-60  bg-gradient-to-r from-slate-100 from-80% bg-primary-color-light-orange to-100% pl-4 border-2 rounded-xl p-1  border-primary-color-light-orange"
        type="text"
        placeholder="Search products"
      />
      <span className="inline-block relative right-9  top-0.5 lg:relative lg:right-12 lg:top-0.5">
        <FontAwesomeIcon className="text-xl text-slate-700" icon={faMagnifyingGlass} />
      </span>
    </div>
  );
};

export default SearchForm;
