import Button from "../../UI/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PopularItems from "./Popularitems";
import Recommended from "./Recommended";
import SearchForm from "../Product-Page-components/SearchForm";



const MainPage = () => {
return (
    <>
    <div className="  bottom-[20vh] flex bg-main-wallpaper shadow-background-shadow   bg-cover justify-start items-end r h-[70vh] md:h-[100vh] bg-center">
   <SearchForm/>
        <div className=" text-[1rem] md:text[1.3rem]  mx-auto my-7 md:my-20 text-slate-50 opacity-90">
        <Button className="rounded-md opacity-85  px-3 py-1 md:px-9 md:py-2 " type="button"> Shop now <FontAwesomeIcon icon={faArrowRight} className=" ml-2" /></Button>
        </div>
    </div>
    <PopularItems/>
    <Recommended/>
   

    </>
)

}

export default MainPage