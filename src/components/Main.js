import Button from "../UI/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"


const MainPage = () => {
return (
    <>
    <div className=" flex shadow-background-shadow  justify-start items-end bg-main-wallpaper h-[85vh]  bg-center">
        <div className="relative bottom-10 left-5">
        <Button type="button"> Shop now <FontAwesomeIcon icon={faArrowRight} className="ml-2" /></Button>
        </div>
    </div>
   

    </>
)

}

export default MainPage