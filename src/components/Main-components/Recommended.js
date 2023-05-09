import { AllItems } from "../../data/AllItems";
import RecommendedItem from "./RecommendedItem";


const Recommended = () => {
    const recommendedItems = AllItems.filter(item => item.type === "recommended")
return (
    <div className="bg-orange-50">
        <h2 className="text-subtitle text-center font-semi-bold-lato relative top-10">We recommend</h2>
        <div className="flex flex-wrap  md:flex-row items-center  md:justify-around m-auto  ">
           {recommendedItems.map((item)=> (
            <RecommendedItem
            key={item.id}
            id={item.id}
            image={item.images.image}
            title={item.description}
            price={item.price}
            discount={item.discount}
            />
           ))}
        </div>
    </div>
)
}
export default Recommended