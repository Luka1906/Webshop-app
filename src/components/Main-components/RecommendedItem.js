
import Card from "../../UI/Card";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const RecommendedItem = ({ image, description, price }) => {
  return (
    <div className="relative top-24 m-auto h-[70vh]">
      <div className="text-sm text-white absolute right-[-1rem] top-[-1.5rem] bg-primary-color-red w-12 h-12 rounded-full flex items-center justify-center">
      <p>${price}</p>
      </div>
      <Card className=" w-[15rem] lg:w-[17rem]">
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "32vh",
            boxShadow: "inset 0 0 0 1000px rgba(0,0,0,0.05)",
          }}
          alt="recommended.jpeg"
        />
        <div className="h-[8rem] flex flex-col items-center justify-around">
          <p className="font-semi-bold-lato">{description}</p>
          <Link className="flex items-center gap-2">
           <p> Buy now</p> <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default RecommendedItem;
