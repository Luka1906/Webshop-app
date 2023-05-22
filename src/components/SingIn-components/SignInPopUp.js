import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignInModal from "../../UI/SignInModal";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useRouteLoaderData } from "react-router-dom";


const SignInPopUp = ({onClose,onEnter}) => {
  const token = useRouteLoaderData("root");
    
  return (
    <>
    {!token && <SignInModal onEnter={onEnter} onClose={onClose}>
      <FontAwesomeIcon onClick={onClose} className="absolute right-1 top-1 text-sm cursor-pointer" icon={faXmark}/>
    <div className="flex flex-col items-center  py-5 px-6 bg-[#FAF9F8] shadow-card-shadow">
        <Link to="signIn">
        <button onClick={onClose} className="bg-orange-200 text-[0.9rem] font-semibold text-primary-color-red w-48 p-2 ">
        Sign in
      </button>
        </Link>

    <Link to="/register">
    <p onClick = {onClose} className="text-xs mt-2 opacity-75">Not register yet? Join here!</p>
    </Link>
  
    </div>
  </SignInModal>}
    </>
        

    )

};

export default SignInPopUp;
