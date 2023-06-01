import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      onClick={props.onClose}
      className="fixed top-0 left-0 w-full n h-screen z-40"
    ></div>
  );
};

const ModalOverlay = (props) => {
  return <div className="absolute top-20 right-10 z-50">{props.children}</div>;
};
const portalElement = document.getElementById(`overlays`);

const SignInModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} onClose1={props.onClose1} />,
        portalElement
      )}

      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default SignInModal;
