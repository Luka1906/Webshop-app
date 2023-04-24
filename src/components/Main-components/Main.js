import Button from "../../UI/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PopularItems from "./Popularitems";


import Recommended from "./Recommended";
import Footer from "./Footer";

const MainPage = () => {
return (
    <>
    <div className=" flex bg-main-wallpaper shadow-background-shadow   bg-cover justify-start items-end r h-[50vh] md:h-[100vh] bg-center">
      
        <div className=" text-[1rem] md:text[1.3rem]  mx-auto my-7 md:my-20 text-slate-50 opacity-90">
        <Button type="button"> Shop now <FontAwesomeIcon icon={faArrowRight} className=" ml-2" /></Button>
        </div>
    </div>
    <PopularItems/>
    <Recommended/>
    <Footer/>
   

    </>
)

}

export default MainPage