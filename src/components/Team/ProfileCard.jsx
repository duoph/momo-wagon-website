import React from "react";

const ProfileCard = ({ profile }) => {
  return (
    <div className="w-[430px] h-full  md:h-[1000px] bg-gray-300 rounded-3xl shadow-2xl">
      <div className="bg-momo-primary rounded-3xl flex items-center justify-center ">
        <img src={profile.image} alt="ProfilePhoto"  className="w-full rounded-[20px]"/>
      </div>
      <div className=" flex flex-col items-center justify-start rounded-3xl  py-3 px-3">
        <h1 className="text-center mont-bold text-lg">{profile.name}</h1>
        <span className="text-center mont-reg mb-2">({profile.role})</span>
        <p className="break-all mont-reg pb-[100px]">{profile.description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
