
import Button from "../../UI/Button";
import SliderContainer from "./SliderContainer";
import Banner from "../../UI/Banner";
import FindMore from "./FindMore";
import {PopUpFirst, PopUpSecond} from "./PopUp";
import { useState } from "react";
import {AnimatePresence } from "framer-motion";


const PopularItems = () => {
const [isVisible, setIsVisible] = useState(false);
const [isVisible1, setIsVisible1] = useState(false)

const visibleHandler = () => {
  setIsVisible(true);
  document.body.style.overflow = "hidden"
}

const hiddenHandler = () => {
  setIsVisible(false);
  document.body.style.overflow="scroll"
}

const visibleHandler1 = () => {
  setIsVisible1(true);
  document.body.style.overflow = "hidden"
}

const hiddenHandler1 = () => {
  setIsVisible1(false);
  document.body.style.overflow="scroll"
}

  return (
    <>
      <Banner onShow = {visibleHandler}>
        <h1 className=" text-paragraph text-primary-color-red md:w-[45rem] w-5/6 ">
          New Serbian jerseys added to Spring Sale! Up to 60% off online &
          in-store
        </h1>
        <p className="text-sm  ">
          Valid on everything, including new sale markdowns!
        </p>
      </Banner>

      <div className="  flex flex-col  items-center  w-screen ">
        <div className="relative h-[40rem] bg-contain w-[60rem] bg-center bg-jersey-pic flex justify-end">
          <div className=" relative right-10 opacity-90 flex flex-col justify-around h-[75px] rounded-md  w-[210px]  top-40 p-3 bg-text-color text-slate-50 before:content-[''] before:top-1/2 before:border-solid before:border-transparent before:h-0 before:w-0 before:absolute before:pointer-events-none before:border-text-color  after:right-full after:top-1/2 after:border-solid after:border-transparent after:content-[''] after:h-0 after:w-0 after:absolute after:pointer-events-none after:border-slate-50 after:border-r-text-color after:border-[12px] after:my-[-12px]">
            <div className=" bottom-4 flex gap-2 ">
              <p className=" text-sm">$90</p>
              <p className="line-through text-sm ">$150</p>
            </div>
            <p className="text-sm"> Serbia Football Soccer Jersey</p>
          </div>
          <div className="flex flex-col w-full items-center absolute bottom-12">
          <div className="text-sm font-extrabold text-paragraph  opacity-90">
            <Button className="rounded-md  opacity-85  px-3 py-1 md:px-9 md:py-2 ">Shop Now</Button>
          </div>
        </div>
        </div>
      </div>
      <SliderContainer />
      <FindMore onShow1={visibleHandler1}/>
      <AnimatePresence>
      {isVisible && <PopUpFirst onClose= {hiddenHandler}/>}
      </AnimatePresence>
      <AnimatePresence>
      {isVisible1 && <PopUpSecond onClose1= {hiddenHandler1}/>}
      </AnimatePresence>
     

   
    </>
  );
};

export default PopularItems;
