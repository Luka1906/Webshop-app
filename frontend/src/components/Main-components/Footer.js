import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import LogoBlack from "./LogoBlack";
import { SlArrowDown } from "react-icons/sl";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";

const Footer = () => {
  const windowScreen = useMediaQuery("(max-width:576px)");
  const [isMobile, setIsMobile] = useState(false);
  const [footerHidden, setFooterHidden] = useState(true);
  const [footerHidden1, setFooterHidden1] = useState(true);
  const [footerHidden2, setFooterHidden2] = useState(true);
  const [footerHidden3, setFooterHidden3] = useState(true);
  const [arrowRed,setArrowRed] = useState("text-color");
  const [arrowRed1,setArrowRed1] = useState("text-color");
  const [arrowRed2,setArrowRed2] = useState("text-color");
  const [arrowRed3,setArrowRed3] = useState("text-color");
  
  console.log(window.innerWidth)

  useEffect(() => {
    if (windowScreen) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowScreen]);

  const footerVisibilityHandler = () => {
    footerHidden ? setFooterHidden(false) : setFooterHidden(true);
    arrowRed === "text-color" ? setArrowRed("primary-color-red") : setArrowRed("text-color")
  };
  const footerVisibilityHandler1 = () => {
    footerHidden1 ? setFooterHidden1(false) : setFooterHidden1(true);
    arrowRed1 === "text-color" ? setArrowRed1("primary-color-red") : setArrowRed1("text-color")

  };
  const footerVisibilityHandler2 = () => {
    footerHidden2 ? setFooterHidden2(false) : setFooterHidden2(true);
    arrowRed2 === "text-color" ? setArrowRed2("primary-color-red") : setArrowRed2("text-color")
  };
  const footerVisibilityHandler3 = () => {
    footerHidden3 ? setFooterHidden3(false) : setFooterHidden3(true);
    arrowRed3 === "text-color" ? setArrowRed3("primary-color-red") : setArrowRed3("text-color")
  };

  return (
    <div className=" bg-bg-color shadow-image-shadow  md:h-[82vh] relative top-6">
      <div className=" text-[0.7rem] xs:flex md:flex md:justify-around relative top-6">
        <div className=" flex flex-col gap-4 px-10 pt-8 md:p-0 ">
          <div className="flex justify-between">
            <h2 className="font-semi-bold-lato text-[0.9rem] sm:text-[0.7rem] ">SHOP</h2>
            {isMobile && (
              <SlArrowDown
                onClick={footerVisibilityHandler}
                className={`text-[1.1rem] text-${arrowRed} cursor-pointer`}
              />
            )}
          </div>

          {isMobile && footerHidden ? (
            ""
          ) : (
            <div className="flex flex-col gap-4">
              <p className="hover:underline cursor-pointer" >Tradition souvenirs</p>
              <p className="hover:underline cursor-pointer">Sport</p>
              <p className="hover:underline cursor-pointer">Kids</p>
              <p className="hover:underline cursor-pointer">Baby</p>
              <p className="hover:underline cursor-pointer">Home</p>
            </div>
          )}
        </div>
        <div className=" flex flex-col gap-4 px-10 pt-8 md:p-0 ">
          <div className="flex justify-between">
            <h2 className=" font-semi-bold-lato text-[0.9rem] sm:text-[0.7rem]">INFO</h2>
            {isMobile && (
              <SlArrowDown
                onClick={footerVisibilityHandler1}
                className={`text-[1.1rem] text-${arrowRed1} cursor-pointer`}
              />
            )}
          </div>
          {isMobile && footerHidden1 ? (
            ""
          ) : (
            <div className="flex flex-col gap-4 cursor-pointer">
              <p className="hover:underline ">Career at SerbShop</p>
              <p className="hover:underline ">About us</p>
              <p className="hover:underline ">Shipping Rates</p>
              <p className="hover:underline">Affiliate Program</p>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4 px-10 pt-8 md:p-0">
          <div className="flex justify-between">
            <h2 className="font-semi-bold-lato text-[0.9rem] sm:text-[0.7rem]">HELP</h2>
            {isMobile && (
              <SlArrowDown
                onClick={footerVisibilityHandler2}
                className={`text-[1.1rem] text-${arrowRed2} cursor-pointer`}
              />
            )}
          </div>
          {isMobile && footerHidden2 ? (
            ""
          ) : (
            <div className="flex flex-col gap-4 cursor-pointer">
              <p className="hover:underline ">Customer Service</p>
              <p className="hover:underline ">My Account</p>
              <p className="hover:underline ">Legal & Privacy</p>
              <p className="hover:underline ">Gift Card Terms and Conditions</p>
              <p className="hover:underline ">Report a scam</p>
              <p className="hover:underline ">Return Policy</p>
              <p className="hover:underline ">Order Status</p>
              <p className="hover:underline ">Cookie Settings</p>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4 px-10 pt-8 md:p-0 ">
          <div className="flex justify-between">
            <h2 className="font-semi-bold-lato text-[0.9rem] sm:text-[0.7rem]">CONTACT</h2>
            {isMobile && (
              <SlArrowDown
                onClick={footerVisibilityHandler3}
                className={`text-[1.1rem] text-${arrowRed3} cursor-pointer`}
              />
            )}
          </div>

          {isMobile && footerHidden3 ? (
            ""
          ) : (
            <div className="flex flex-col gap-4">
              <p className="hover:underline cursor-pointer">Phone number: 332/436/54-21</p>
              <p className="hover:underline cursor-pointer">Store Location</p>
            </div>
          )}
        </div>
      </div>
      <div className=" flex justify-center h-20 items-end gap-3 text-paragraph">
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faPinterest} />
      </div>
      <div className="text-sm w-[80vw] md:w-[50vw] flex flex-col justify-center items-center m-auto  my-6">
        <p className="text-center text-xs leading-5">
          &#169; The content of this site is copyright-protected and is the
          property of SerbShop company. SerbShop is committed to accessibility.
          We embraces WCAG guidelunes and supports assistive technologies such
          as screen readers.If you are experiencing difficulties using this
          website, please call our support line (855-123-444) for assistance
        </p>
        <LogoBlack />
      </div>
    </div>
  );
};

export default Footer;
