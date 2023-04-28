import Navbar from "../components/Main-components/Navbar";
import Footer from "../components/Main-components/Footer";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const HeaderRootLayout = () => {
  let location = useLocation();
 
  return (
  <>
   <Navbar pathname={location.pathname}/>
   <Outlet/>
   <Footer/>

   


  </>
)
}



