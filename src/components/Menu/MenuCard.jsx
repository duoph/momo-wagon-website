import React from "react";

const MenuCard = ({ item }) => {
  return (
    <div className="flex items-center justify-center w-full md:flex-row flex-col  rounded-2xl bg-gray-200  shadow-2xl">
      <div className="md:w-1/3 lg:w-1/4 w-full bg-momo-primary flex items-center justify-center rounded-2xl">
        <img
          src="/momos-in-plate-1.png"
          alt="momos"
          className="md:h-[130px] h-[180px]  "
        />
      </div>
      <div className="bg-gray-200 text-center w-full h-full rounded-2xl py-3">
        <h1 className="font-semibold">{item.name}</h1>
        <span className="font-bold text-momo-red">&#8377;320</span>
        <p className="break-all px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quam
          asperiores sunt nihil tempora ducimus molestias! Deserunt
        </p>
      </div>
    </div>
  );
};

export default MenuCard;
