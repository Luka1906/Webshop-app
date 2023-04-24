import serbianWatch from "../../assets/images/serbianwatch.jpeg";
import candle from "../../assets/images/candle.jpeg";
import towel from "../../assets/images/towel.jpeg";
import prayerRope from "../../assets/images/prayerRope.jpeg"
import RecommendedItem from "./RecommendedItem";
const Recommended = () => {
    const RECOMMENDED_ITEMS = [
        {
            image: serbianWatch,
            description: "Vintage pocket watch",
            price: 99.49
        },
        {
            image: candle,
            description: "Scented St. Sava Soy Candle:",
            price: 25.99
        },
        {
            image: towel,
            description: "Two eagles Serbia towel",
            price: 30.19,
        }
      
        
    ]
return (
    <div className="bg-orange-50">
        <h2 className="text-subtitle text-center font-bold-lato relative top-10">We recommend</h2>
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