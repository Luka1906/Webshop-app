import Button from "../../UI/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PopularItems from "./Popularitems";
import Recommended from "./Recommended";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { movingArrowAnimation } from "../../animations/MainPage-animations";


const MainPage = () => {

return (
    <>
    <div className=" bottom-[20vh] flex bg-main-wallpaper shadow-background-shadow w-screen  bg-cover justify-start items-end   h-[60vh] md:h-[100vh] bg-center">

        <div className=" text-[1rem] md:text[1.3rem]  mx-auto my-7 md:my-20 text-slate-50 opacity-90">
        <Link to="products">
            <motion.div
            variants={movingArrowAnimation}
             whileHover={"hover"}
            >
            <Button className="rounded-md md:text-[1.2rem] opacity-85  px-3 py-1 md:px-9 md:py-2 active:scale-125 transition-all " type="button"> Shop now <FontAwesomeIcon icon={faArrowRight} className=" ml-2" /></Button>
            </motion.div>
       
        </Link>
       
        </div>
    </div>
    <PopularItems/>
    <Recommended/>
   

    </>
)

}

export default MainPage