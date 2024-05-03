import React from "react";
import SignatureFoodCard from "./SignatureFoodCard";
import { Carousel } from "antd";
import signatureMomos from "../../utils/signatureMomos";

const contentStyle = {
  height: "160px",
  color: "red",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const SignatureFood = () => {
  return (
    <div className="flex flex-col md:py-32 py-10 px-10 items-center justify-center gap-10">
      <div className="flex items-center justify-center">
        <h1 className="text-momo-red font-bold  text-2xl md:text-3xl mont-heavy">
          Our Few Signatures
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="lg:hidden flex items-center justify-center">
          {/* <Carousel arrows className="w-[280px]" autoplay infinite> */}
          {signatureMomos.map((item) => (
            <div key={item.id}>
              <SignatureFoodCard item={item} />
            </div>
          ))}
          {/* </Carousel> */}
        </div>

        <div className="lg:flex gap-4 items-center justify-center flex-wrap hidden">
          {signatureMomos.map((item) => (
            <SignatureFoodCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignatureFood;
