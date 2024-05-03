const VoiceSatisfactionCard = ({ item }) => {
  return (
    <div className="px-8 flex items-center  justify-center transition-transform transform hover:scale-105">
      <div className="bg-red-500 pb-1 rounded-3xl ">
        <div className="-mt-1 md:w-[400px] w-[300px] h-[320px] md:h-[280px]  bg-gray-300 px-3 gap-2 py-8 break-all flex items-center justify-between flex-col rounded-3xl  ">
          <p className=" mont-reg">{item?.review}</p>
          <div className="flex  items-center justify-start gap-4 w-full">
            <img
              src={item?.image}
              alt="person"
              className="h-10 w-10  rounded-3xl"
            />
            <h1 className="mont-bold">{item?.name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceSatisfactionCard;
