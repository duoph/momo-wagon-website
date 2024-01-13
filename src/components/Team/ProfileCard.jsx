import React from "react";

const ProfileCard = ({ profile }) => {
  return (
    <div className="w-[430px] h-full  md:h-[800px] bg-gray-300 rounded-3xl shadow-2xl">
      <div className="bg-momo-primary rounded-3xl">
        <img src="/person.png" alt="ProfilePhoto" />
      </div>
      <div className=" flex flex-col items-center justify-start rounded-3xl  py-3 px-3">
        <h1 className="text-center font-bold text-lg">{profile.name}</h1>
        <span className="text-center font-semibold mb-2">({profile.role})</span>
        <p className="break-all">{profile.description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
