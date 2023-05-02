import {Fragment} from "react"
import  ReactDOM  from "react-dom"
import { motion} from "framer-motion"
import { popUpAnimationStart} from "../animations/MainPage-animations"


const Backdrop = props => {
    return <div className="fixed top-0 left-0 w-full n h-screen z-20 shadow-backdrop-shadow" onClick={props.onClose || props.onClose1}></div>
}

const ModalOverlay = props => {

    return (

    <motion.div
    variants={popUpAnimationStart}
    initial={"hidden"}
    animate={"visible"}
    exit={"exit"}
    className=" fixed top-[20vh]  transform translate-x-[-50%] left-[50%] mx-auto  w-[500px] p-3 rounded-md w z-30 overflow-y-hidden  bg-neutral-100">
       {props.children}
    </motion.div>

    )
}
const portalElement = document.getElementById(`overlays`);

const Modal = props => {
    return (
        <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} onClose1={props.onClose1} />,portalElement )};
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement )};
        </Fragment>
    )

}

export default Modal