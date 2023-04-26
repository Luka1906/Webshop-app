import image1 from "../../assets/images/items/image1.jpeg";
import image2 from "../../assets/images/items/image2.jpeg";
import image3 from "../../assets/images/items/image3.jpeg"

import RecommendedItem from "./RecommendedItem";
const Recommended = () => {
    const RECOMMENDED_ITEMS = [
        {
            image: image1,
            description: "Vintage pocket watch",
            price: 99.49
        },
        {
            image: image2,
            description: "Scented St. Sava Soy Candle:",
            price: 25.99
        },
        {
            image: image3,
            description: "Two eagles Serbia towel",
            price: 30.19,
        }
      
        
    ]
return (
    <div className="bg-orange-50">
        <h2 className="text-subtitle text-center font-semi-bold-lato relative top-10">We recommend</h2>
        <div className="flex flex-wrap  md:flex-row items-center  md:justify-around m-auto  ">
           {RECOMMENDED_ITEMS.map((item)=> (
            <RecommendedItem
            image={item.image}
            description={item.description}
            price={item.price}
            />
           ))}
        </div>
    </div>
)
}
export default Recommended