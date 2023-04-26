import Banner from "../../UI/Banner"

const FindMore = (props) => {
return (
    <div className="my-12">
    <Banner onShow1={props.onShow1}>
        <h1 className=" text-paragraph text-primary-color-red md:w-[45rem] w-5/6 " >Member perk: Enter for a chance to win $100 gift card </h1>
        <p  className="text-sm">Valid on every alcohol beverages</p>
    </Banner>
  <div className=" relative shadow-image-shadow bg-rakija-pic h-[40rem] bg-contain bg-center w-[60rem] m-auto flex flex-col justify-center items-center">
    <h2 className= "  font-bold-lato font-extrabold text-white text-[2.4rem] relative top-[6rem]">Her majesty: RAKIJA</h2>
    <p className="font-bold-lato relative top-24 text-white  ">Taste the beauty of the most popular Serbian alcohol drink</p>
    <div className="absolute bottom-4 flex gap-3">
    <button className="drop-shadow-2xl bg-white p-1 px-3 font-[600]">Learn more</button>
    <button className=" drop-shadow-2xl bg-white p-1 px-3 font-[600]">Shop now</button>
  </div>
  </div>
 
  </div>
)
}

export default FindMore