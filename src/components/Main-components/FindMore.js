import { Link } from "react-router-dom"
import Banner from "../../UI/Banner";


const FindMore = (props) => {
return (
    <div className="my-12 w-screen ">
    <Banner onShow1={props.onShow1}>
        <h1 className=" text-paragraph text-primary-color-red md:w-[45rem] w-5/6 " >Member perk: Enter for a chance to win $100 gift card </h1>
        <p  className="text-sm">Valid on every alcohol beverages</p>
    </Banner>
  <div className=" relative shadow-image-shadow bg-rakija-pic bg-cover bg-center bg-no-repeat h-[30rem] md:h-[40rem] md:w-2/3 m-auto flex flex-col justify-center items-center">
    <h2 className= "  font-bold-lato font-extrabold text-center text-white text-[1.6rem] md:text-[2rem] lg:text-[2.4rem] relative top-[6rem]">Her majesty: RAKIJA</h2>
    <p className="font-bold-lato relative top-24 text-sm md:text-[1.1rem] text-white text-center  ">Taste the beauty of the most popular Serbian alcohol drink</p>
    <div className="absolute bottom-4 flex gap-3">
    <button className="drop-shadow-2xl scale-90 md:scale-100 bg-white p-1 px-3 font-[600]">Learn more</button>
    <Link to="products"><button className=" drop-shadow-2xl  scale-90 md:scale-100 text-white p-1 px-3 font-[600] bg-primary-color-red">Shop now</button></Link>
  </div>
  </div>
 
  </div>
)
}

export default FindMore