import React from "react";
import { Carousel } from "@material-tailwind/react";

const DiningExperience = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center px-10 py-10">
        <h1 className="text-momo-red font-bold  text-2xl md:text-3xl">Dining Experience</h1>
      </div>
      <div className="flex items-center justify-center px-10 md:h-[500px] h-[300px] ">
        <Carousel
          transition={{ duration: 1 }}
          autoplay
          autoplayDelay={4000}
          className="rounded-xl"
          loop={true}
        >
          <img
            src="/image-truck.png"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="/food-truck.jpg"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="/food-truck2.jpg"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default DiningExperience;
