
import Card from "../../UI/Card";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { movingArrowAnimation } from "../../animations/MainPage-animations";


const RecommendedItem = ({ image, description, price,id,discount }) => {
  const discountPrice =  (price - (price * discount) / 100)
 console.log(discountPrice)

  return (
    <div className="relative top-24 m-auto h-[70vh]">
      <div className="text-sm text-white absolute right-[-1rem] scale-95 md:scale-100 top-[-1.5rem] bg-primary-color-red w-12 h-12 rounded-full flex items-center justify-center">
      <p>${discountPrice? discountPrice.toFixed(2) : price}</p>
      </div>
      <Card className=" w-[14rem] lg:w-[17rem] ">
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
          <motion.div
          variants={movingArrowAnimation}
          whileHover={"hover"}
          
          >
          <Link state={{discountPrice: discountPrice.toFixed(2), image:image, id: id, price: price, description: description}} to={`products/${id}`} className="flex items-center gap-2">
           <p> Buy now</p>
           <span><FontAwesomeIcon icon={faArrowRight} /></span> 
          </Link>

          </motion.div>
          
        </div>
      </Card>
    </div>
  );
};

export default RecommendedItem;
