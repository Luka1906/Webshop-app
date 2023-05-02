import Navbar from "../components/Main-components/Navbar";
import Footer from "../components/Main-components/Footer";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Cart from "../components/Product-Page-components/cart/Cart";

export const HeaderRootLayout = () => {
  let location = useLocation();
 
  return (
  <>
   <Navbar pathname={location.pathname}/>
   <Cart/>
   <Outlet/>
   <Footer/>

   


  </>
)
}



