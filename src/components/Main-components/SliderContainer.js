import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PopularItems } from "../../data/PopularItems";
import SliderItems from "./SliderItems";

const SliderContainer = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="my-28 lg:w-[60rem]  m-auto ">

      <p className="text-[1.5rem] text-center lg:text-justify my-12 font font-semi-bold-lato w-full">
        Popular items
      </p>

      <div>
        <Carousel responsive={responsive}>
          {PopularItems.map((item) => (
            <div className="w-[220px]  mx-auto">
              <SliderItems
                image={item.image}
                description={item.description}
                price={item.price}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SliderContainer;
