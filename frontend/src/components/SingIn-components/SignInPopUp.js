import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignInModal from "../../UI/SignInModal";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Form, Link } from "react-router-dom";
import { useRouteLoaderData } from "react-router-dom";
import { useMediaQuery } from "@mui/material";


const SignInPopUp = ({onClose,onEnter}) => {
  const token = useRouteLoaderData("root");
  const isMobile = useMediaQuery("(max-width:768px)");
    
  return (
    <>
    {isMobile &&<SignInModal onEnter={onEnter} onClose={onClose}>
      <FontAwesomeIcon onClick={onClose} className="absolute right-0.5 p-[0.2rem] w-[0.8rem] h-[0.8rem] cursor-pointer duration-75 hover:bg-orange-200 hover:rounded-full" icon={faXmark}/>
    <div className={`${isMobile? "bg-[#FAF9F8] shadow-card-shadow py-3 px-6 w-60" : "flex flex-col items-center  py-5 px-6 bg-[#FAF9F8] shadow-card-shadow" }`}>
        <Link to="signIn">
          {isMobile && token? <p className="text-sm mt-2 opacity-75">My Account</p> :<button onClick={onClose} className="bg-orange-200 text-[0.9rem] font-semibold text-primary-color-red w-48 p-2 ">
        Sign in
      </button>}
      
        </Link>

    <Link to="/register">
      {isMobile && token? <p className="text-sm mt-2 opacity-75 ">Loyalty Program Info</p> :  <p onClick = {onClose} className="text-xs mt-2 opacity-75">Not register yet? Join here!</p> }
    </Link>
    {isMobile && token && <Form action="logout" method="POST"><button className="text-xs mt-2 opacity-60 hover:underline hover:opacity-75">Sign out</button> </Form>}
  
    </div>
  </SignInModal>}
    </>
        

    )

};

export default SignInPopUp;
