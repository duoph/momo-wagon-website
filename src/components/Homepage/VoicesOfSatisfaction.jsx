import React from "react";
import VoiceSatisfactionCard from "../../components/Homepage/VoiceSatisfactionCard";
// import VoiceSatisfactionCard from "../../components/Homepage/VoiceSatisfactionCard";
import customerReview from "../../utils/Testimonial";

const VoicesOfSatisfaction = () => {
  return (
    <div className="flex w-full h-auto flex-col items-center justify-center">
      <div className="flex items-center justify-center px-10 py-10">
        <h1 className="text-momo-red   text-2xl md:text-3xl mont-heavy">
          Voices of Satisfaction
        </h1>
      </div>
      <div className="flex w-full  gap-4">
        {/* {customerReview.map((item)=>(

        <div key={item.id} className=" md:hidden flex items-center justify-center gap-4">
          <VoiceSatisfactionCard item={item}/>
          
        </div>
        ))} */}
        <div className="flex overflow-scroll overflow-y-hidden  hideScrollBar w-full ">
          {customerReview.map((item) => (
            <VoiceSatisfactionCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VoicesOfSatisfaction;
