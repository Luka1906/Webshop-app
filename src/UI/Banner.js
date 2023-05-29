import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

const Banner = (props) => {
  
return (

    <div className=" flex shadow- justify-center items-center bg-orange-100  rounded-md scale-90 md:scale-100 md:w-11/12 lg:w-4/6 mx-auto my-10 p-6 md:p-8 text-center">
         <div className="flex flex-col items-center ">
        {props.children}
    </div>
     <FontAwesomeIcon onClick={props.onShow || props.onShow1 }  className=" absolute right-3 cursor-pointer border-[0.5px] border-black w-3 h-3  md:w-3.5 md:h-3.5 p-2 rounded-full scale-90  text-black" icon={faInfo} />
   </div>
   
)
}

export default Banner