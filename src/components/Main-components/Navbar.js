import  Logo  from "./Logo";
import SearchForm from "./SearchForm";
import bag from "../../assets/images/bag.svg";
import user from "../../assets/images/user.svg";
import { Link } from "react-router-dom";

const Navbar = ({pathname}) => {
  return (
    <div className={`${pathname === "/"? "absolute top-0 z-50": ""} w-full h-1/7 text-black`}>
      <nav className="flex justify-between items-center   px-10">
        <div className="flex flex-col items-center ">
          <div className="flex gap-1.5 ">
            <select
              className="outline-none cursor-pointer bg-transparent "
              name="languages"
            >
              <option value="EN">EN</option>
              <option value="SERB">SRB</option>
            </select>
            <Logo />
          </div>

          <SearchForm />
        </div>

        <div className="flex items-center gap-5 ">
          <p className="hidden lg:block">About Us</p>
          <Link to="products"><p className="hidden lg:block">Categories</p></Link>

          <img src={user} />
          <p>Sign in</p>
          <div className="flex">
            <img src={bag} />
            <p className="relative text-sm right-6 top-1.5 text-center w-5 ">
              0
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
