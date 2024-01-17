import React from "react";

const AboutMomoWagon = () => {
  return (
    <div className="mt-32">
      <div className="flex flex-col items-center justify-center">
        <h1 className=" text-2xl md:text-3xl text-momo-red font-bold">
          About Momo Wagon
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full">
        <div className="flex items-center justify-center px-5 py-3 md:px-20 md:py-20 lg:w-1/2">
          <p className="break-all">
            Experience culinary excellence with Momo Wagon, a pioneering venture
            led by young entrepreneurs from Kerala. Meticulously researched and
            artfully crafted, our freshly made Himalayan momos redefine
            authenticity. Served in eco friendly areca leaf, our commitment to
            quality and sustainability sets us apart. Join us in elevating your
            dining experience, where professionalism meets innovation, creating
            a perfect blend of exquisite taste and responsible practices.
          </p>
        </div>
        <div className="relative flex items-center flex-col justify-center overflow-hidden w-1/2">
          <div className="absolute lg:flex hidden -right-[400px] -z-10 bg-red-blob  bg-no-repeat lg:bg-left bg-center md:bg-110 w-full lg:w-[120%] h-full"></div>
          <img
            className=""
            src={"/truck-sketch.png"}
            width={500}
            height={500}
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMomoWagon;
