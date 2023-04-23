import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import SearchForm from "./SearchForm";

const Navbar = () => {
  return (
    <div className="w-screen fixed h-1/6 top-0 z-50 bg-yellow-900 text-slate-100">
      <nav className="flex justify-between items-center  px-10">
        <div className="flex gap-1.5">
          <select className="outline-none cursor-pointer bg-transparent "name="languages">
            <option value="EN">EN</option>
            <option value="SERB">SRB</option>
          </select>
          <Logo />
        </div>
        <SearchForm />
        <div className="flex items-center gap-5">
         <p className="hidden lg:block">About Us</p>
          <p className="hidden lg:block">Categories</p>
          <FontAwesomeIcon className="text-xl text-slate-100 " icon={faCartShopping} />
          <div className="w-2 h-2 bg-primary-color-light-orange relative right-6 bottom-4 text-gray-900 rounded-full flex justify-center items-center p-2.5">1</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
