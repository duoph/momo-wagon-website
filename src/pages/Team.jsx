import React from "react";
import ProfileCard from "../components/Team/ProfileCard";
import teamData from "../utils/teamData";

const Team = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center flex-col gap-3 lg:px-32 md:px-16 px-8">
        <h1 className="text-center text-[30px] mont-heavy text-momo-red">
          Our Team
        </h1>
        <p className="break-all mont-reg">
          "Discover the Faces Behind Momo Wagon: A Collective of Culinary
          Visionaries, Entrepreneurs, and Innovators. Meet the Team Committed to
          Elevating Your Dining Experience with Freshly Crafted Himalayan Momos.
          Each Member Brings a Unique Flair, Culinary Expertise, and a Shared
          Passion for Creating Moments of Gastronomic Joy. From Dynamic
          Entrepreneurs with Global Experience to Local Artisans Infusing
          Authenticity, Our Team Embodies the Heart and Soul of Momo Wagon. Join
          Us in Celebrating the Fusion of Tradition, Innovation, and Impeccable
          Taste, as We Bring the Best of Himalayan Cuisine to Your Table, One
          Momo at a Time."
        </p>
      </div>
      <div className="flex  items-center flex-wrap justify-center gap-3 mt-10 lg:px-32 md:px-16 px-8">
        {teamData.map((profile, i) => (
          <ProfileCard key={i} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default Team;
