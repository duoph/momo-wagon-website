
const VoiceSatisfactionCard = ({item}) => {
  return (
    <div className="blobYellow bg-center bg-no-repeat px-8 flex items-center  justify-center">
      <div className="bg-red-500 pb-1 rounded-3xl ">
        <div className="-mt-1 bg-gray-300 px-3 gap-2 py-4 break-all flex items-center justify-center flex-col rounded-3xl">
          <p className="">
            {item?.review}
          </p>
          <div className="flex items-center justify-around w-full">
            <img
              src={item?.image}
              alt="person"
              className="h-10 w-10  rounded-3xl"
            />
            <h1 className="font-bold">{item?.name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceSatisfactionCard;
