import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import LogoBlack from "./LogoBlack";

const Footer = () => {
  return (
    <div className=" bg-gray-50 shadow-image-shadow  h-[82vh] relative top-6">
      <div className="text-[0.7rem] flex justify-around relative top-6">
        <div className="flex flex-col gap-4">
          <h2 className="font-semi-bold-lato">SHOP</h2>
          <p>Tradition souvenirs</p>
          <p>Sport</p>
          <p>Kids</p>
          <p>Baby</p>
          <p>Home</p>
          <p></p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-semi-bold-lato">INFO</h2>
          <p>Career at SerbShop</p>
          <p>About us</p>
          <p>Shipping Rates</p>
          <p>Affiliate Program</p>
          <p></p>
          <p></p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-semi-bold-lato">HELP</h2>
          <p>Customer Service</p>
          <p>My Account</p>
          <p>Legal & Privacy</p>
          <p>Gift Card Terms and Conditions</p>
          <p>Report a scam</p>
          <p>Return Policy</p>
          <p>Order Status</p>
          <p>Cookie Settings</p>
          <p></p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-semi-bold-lato">CONTACT</h2>
          <p>Phone number: 332/436/54-21</p>
          <p>Store Location</p>
        </div>
      </div>
      <div className="flex justify-center h-20 items-end gap-3 text-paragraph">
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faPinterest} />
      </div>
      <div className="text-sm w-[50vw] flex flex-col justify-center items-center m-auto  my-6">
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
