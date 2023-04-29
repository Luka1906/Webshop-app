import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AllItems } from "../../data/AllItems";
import SliderItems from "./SliderItems";

const SliderContainer = () => {
  const responsive = {
    superLargeDesktop: {
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

  const popularItems = AllItems.filter((item) => item.type === "popular");

  return (
    <div className="my-28 lg:w-[60rem]  m-auto ">
      <p className="text-[1.5rem] text-center lg:text-justify my-12 font font-semi-bold-lato w-full">
        Popular items
      </p>

      <div>
        <Carousel responsive={responsive}>
          {popularItems.map((item) => (
            <div className="w-[220px]  mx-auto">
              <SliderItems
                key={item.id}
                image={item.images.image}
                title={item.description}
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
