import Button from "../../UI/Button";
const Categories = () => {
  return (
    <div className="my-16">
        <h1 className="text-center text-paragraph font-bold-lato">All </h1>
        <div className="flex justify-around w-[60vw] m-auto text-xs gap-3 my-12">
        
        <Button className="border-[1.2px] border-gray-600 font-semi-bold-lato text-text-color   m-auto">
          All
        </Button>

        <Button className=" border-[1.2px] border-gray-600  font-semi-bold-lato  text-text-color m-auto">
          Food
        </Button>

        <Button className=" border-[1.2px] border-gray-600  font-semi-bold-lato  text-text-color m-auto">
          Alcohol
        </Button>

        <Button className=" border-[1.2px] border-gray-600  font-semi-bold-lato  text-text-coloro m-auto">
          Sport
        </Button>

        <Button className="border-[1.2px] border-gray-600  font-semi-bold-lato  text-text-color  m-auto">
          Souvenirs
        </Button>

        <Button className="border-[1.2px] border-gray-600  font-semi-bold-lato  text-text-color m-auto">
          Kids
        </Button>
        </div>
     
      </div>

  );
};

export default Categories;
