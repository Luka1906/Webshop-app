import { Fragment } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { popUpCartToggle } from "../animations/Cart-animation";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full n h-screen z-20 shadow-backdrop-shadow"
      onClick={props.onClose}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <motion.div
    variants={popUpCartToggle}
    initial={"hidden"}
    animate={"visible"}
    exit={"exit"}
      className=" fixed top-0 right-0  mx-auto w-[20rem] h-full  md:w-[25rem] p-3  w z-50 overflow-y-auto bg-neutral-100"
    >
      {props.children}
    </motion.div>
  );
};
const portalElement = document.getElementById(`overlays`);

const CartModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
      
    </Fragment>
  );
};

export default CartModal;
