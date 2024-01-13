import React from "react";
import VoiceSatisfactionCard from "../../components/Homepage/VoiceSatisfactionCard";
// import VoiceSatisfactionCard from "../../components/Homepage/VoiceSatisfactionCard";

const VoicesOfSatisfaction = () => {
  return (
    <div className="flex h-auto flex-col items-center justify-center">
      <div className="flex items-center justify-center px-10 py-10">
        <h1 className="text-momo-red font-bold  text-2xl md:text-3xl">
          Voices of Satisfaction
        </h1>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-4">
        <div className=" md:hidden flex items-center justify-center flex-wrap gap-4">
          <VoiceSatisfactionCard />
          <VoiceSatisfactionCard />
        </div>
        <div className="md:flex hidden items-center justify-center flex-wrap gap-4">
          <VoiceSatisfactionCard />
          <VoiceSatisfactionCard />
          <VoiceSatisfactionCard />
          <VoiceSatisfactionCard />
        </div>
      </div>
    </div>
  );
};

export default VoicesOfSatisfaction;
