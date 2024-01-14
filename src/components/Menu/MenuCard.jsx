import React from "react";

const MenuCard = ({ item }) => {
  return (
    <div className="flex items-center justify-center flex-col md:w-[200px] w-[180px] rounded-2xl bg-momo-primary shadow-2xl">
      <div>
        <img src="/momos-plate-4.png" alt="momos" className="h-[180px]" />
      </div>
      <div className="bg-gray-200 text-center w-full rounded-2xl py-3">
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
