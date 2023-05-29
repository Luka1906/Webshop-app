import { faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../UI/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const PopUpFirst = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className="md:py-8 py-5 info-modal ">
        <FontAwesomeIcon
          onClick={props.onClose}
          icon={faXmark}
          className="absolute right-4 top-5 text-3xl text-slate-700 cursor-pointer x-icon"
        />
        <div className="flex flex-col  items-center m-auto gap-5 md:w-[25rem] mb-3 ">
          <h2 className="font-bold relative bottom-3">Spring Sale</h2>
          <p className="text-xs text-justify tracking-wide">
            Valid on select jerseys online while supplies last. Product
            selection, availability and price may vary between online and
            in-store. No adjustments on prior purchases. Valid in the US only
          </p>
        </div>
        <div className="flex flex-col bg-white md:w-[25rem] m-auto text-sm font-semibold gap-4 px-5 py-3">
          <div className="flex items-center relative justify-between">
            <p>Basketball</p>
            <FontAwesomeIcon
              className="text-lg text-stone-400 "
              icon={faArrowRight}
            />
          </div>
          <div className="flex items-center justify-between">
            <p>Soccer</p>
            <FontAwesomeIcon
              className="text-lg text-stone-400"
              icon={faArrowRight}
            />
          </div>
          <div className="flex items-center justify-between">
            <p>Baby</p>
            <FontAwesomeIcon
              className="text-lg text-stone-400"
              icon={faArrowRight}
            />
          </div>
          <div className="flex items-center justify-between">
            <p>Kids</p>
            <FontAwesomeIcon
              className="text-lg text-stone-400"
              icon={faArrowRight}
            />
          </div>
          <div className="flex items-center justify-between">
            {" "}
            <p>Vintage</p>
            <FontAwesomeIcon
              className="text-lg text-stone-400"
              icon={faArrowRight}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export const PopUpSecond = (props) => {
  return (
    <Modal onClose1={props.onClose1}>
      <div className="md:py-8 py-5 info-modal">
        <FontAwesomeIcon
          onClick={props.onClose1}
          icon={faXmark}
          className="absolute right-4 top-5 text-3xl text-slate-700 cursor-pointer x-icon"
        />
        <div className="flex flex-col bg-white md:w-[25rem] m-auto my-6  font-semibold gap-7 px-5 py-3">
          <div className="flex items-center justify-between">
            {" "}
            <p>Enter to win</p>
            <FontAwesomeIcon
              className="text-lg text-stone-400"
              icon={faArrowRight}
            />
          </div>
          <div className="flex items-center justify-between">
            {" "}
            <p>Join for free</p>
            <FontAwesomeIcon
              className="text-lg text-stone-400"
              icon={faArrowRight}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};
