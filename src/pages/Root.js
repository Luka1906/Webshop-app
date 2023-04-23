import Navbar from "../components/Main-components/Navbar";
import Footer from "../components/Main-components/Footer";
import { Outlet } from "react-router-dom";

export const HeaderRootLayout = () => {

 return (
  <>
   <Navbar/>
  <Outlet/>
  </>
)
}

export const FooterRootLayout = () => {
  return (
    <>
    <Outlet/>
    <Footer/>
    </>
  )
}

