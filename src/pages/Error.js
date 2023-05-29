import { Link } from "react-router-dom";
const errorImg = "https://res.cloudinary.com/dodlxk4hg/image/upload/v1685081031/Error%20Page%20Image/istockphoto-1197233052-170667a_cyzgio.jpg"



const ErrorPage = (props) => {
   return (
    <>
  
     <div className="flex flex-col items-center mt-16 ">
        <div className="flex flex-col items-center relative top-10">
        <h1 className="text-[4rem] text-primary-color-red font-semi-bold-lato">404</h1>
        <p className="text-[2rem] relative bottom-4 font-semi-bold-lato ">ERROR</p>
        </div>
   
        <img src={errorImg} alt="404-img"/>
        <div className="flex flex-col items-center gap-2">
        <p className="text-[2rem] relative bottom-2 font-semi-bold-lato ">PAGE NOT FOUND</p>
        <p className="w-[20rem] md:w-[30rem] text-center text-sm font-thick">Sorry, but the page you are looking for doesn't exist, have been removed, name changed or is temporarily unavailable</p>
        <Link to="/"><p className="text-primary-color-red font-semi-bold-lato hover:underline active:scale-110">Back to homepage</p></Link>

        </div>
       
    </div>

    </>
   
   )
}

export default ErrorPage