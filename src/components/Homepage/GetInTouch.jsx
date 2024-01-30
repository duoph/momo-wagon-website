import React from "react";

const GetInTouch = () => {
  return (
    <div className=" h-[300px] w-full px-10  py-[40px] flex flex-col md:flex-row mt-20">
      <div className="px-10">
        <h1 className="text-[30px] font-bold  text-momo-red mont-heavy">
          Get in Touch
        </h1>
        <span className="text-sm mont-bold">
          "Delightful Bites Await: Reach Out and Connect with Our Momo Haven!"
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 justify-start">
          <img className="w-8" src="/location.svg" alt="location" />
          <div className="flex flex-col items-start justify-center">
            <p className="mont-reg">
              MomoWagon, NH 66, opp. TMM convention center, Palathara,
              Kottakkal,Kerala 676501
            </p>
            <a href="https://maps.app.goo.gl/Wk1RSPKwC1ZbBx7Q7">
              <span className="underline font-light text-sm mont-reg">
                View on Map
              </span>
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-start">
          <img className="w-8" src="/whatsapp.svg" alt="location" />
          <p className="mont-reg">+91 70122 53518</p>
        </div>
        <div className="flex items-center gap-3 justify-start">
          <img className="w-8 " src="/email.svg" alt="location" />
          <p className="mont-reg">momowagon@gmail.com</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="mont-bold text-[20px] ">Follow Us</h1>
          <div className="flex items-center justify-center gap-2">
            <img className="w-8" src="/twitter.svg" alt="twiiter" />
            <a href="https://www.instagram.com/momowagon_india/">
              <img className="w-8" src="/insta.svg" alt="instagram" />
            </a>
            <a href="https://www.facebook.com/momowagonindia/">
              <img className="w-8" src="/facebook.svg" alt="facebook" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
