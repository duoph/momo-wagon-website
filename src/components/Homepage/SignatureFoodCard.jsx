import React from "react";

const SignatureFoodCard = ({ item }) => {
  return (
    <div className="flex flex-col items-center justify-evenly bg-momo-orange rounded-2xl px-4 lg:w-[300px] w-[280px] h-[500px]">
      <div className="flex items-center justify-center h-[100px]">
        <h1 className=" text-2xl font-bold text-white text-center mont-bold">
          {item?.name}
        </h1>
      </div>
      <div className="h-[200px]">
        <img
          src={"/momos-in-plate-1.png"}
          alt="Momo Wagon"
          height={250}
          width={250}
        />
      </div>
      <p className="break-all px-2 h-[200px] mont-reg">{item?.description}</p>
    </div>
  );
};

export default SignatureFoodCard;
