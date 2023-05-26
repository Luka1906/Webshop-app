import Card from "../../UI/Card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { resetSuccessAnimation } from "../../animations/Auth-animation";


const ResetPasswordMessage = ({ email }) => {
  return (
    <>
 
    <motion.div className="fixed top-0 left-0 w-full n h-screen z-20 " variants={resetSuccessAnimation} initial={"hidden"} animate={"visible"} >
      <Card className="fixed top-[20vh] transform translate-x-[-50%] left-[50%]  z-50 p-4 rounded-md">
        <div className="flex flex-col items-center gap-1.5  text-text-color text-sm ">
          <p>An email with a password reset link has been sent to your </p>
          <p>
            <strong>{email}</strong> email
          </p>
          <p>Check your email and click on the link to proceed!</p>
          <Link to="/signIn">
            <button className=" mt-2 border px-5 py-0.5  bg-orange-200 rounded-md text-primary-color-red active:scale-110  transform transition-all hover:translate-y-[-3px]  hover:bg-orange-300">
              OK
            </button>
          </Link>
        </div>
      </Card>
    </motion.div>
    </>
  );
};

export default ResetPasswordMessage;
