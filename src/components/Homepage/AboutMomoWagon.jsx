import React from "react";

const AboutMomoWagon = () => {
  return (
    <div className="mt-32 h-[500p]">
      <div className="flex flex-col items-center justify-center">
        <h1 className=" text-2xl md:text-3xl text-momo-red font-bold">
          About Momo Wagon
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full">
        <div className="px-5 py-3 md:px-20 md:py-20 lg:w-1/2">
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
        <div>
          <div className="flex items-center justify-center">
            <img
              className=""
              src={"/momos-plate-3.png"}
              width={500}
              height={500}
              alt="Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMomoWagon;
