import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="bg-red-blob hidden lg:flex w-[500px] h-[500px] absolute bottom-[100px] -left-[350px]"></div>
      <div className="bg-yellow-blob hidden lg:flex w-[500px] h-[500px] absolute -right-[300px] top-[100px] "></div>
      <div className=" w-full flex items-center lg:px-[200px] md:px-16 px-6 h-[400px] justify-between ">
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            className="md:w-[200px] w-[100px]"
            src="momoWagonBlack.png"
            alt="MomoWagon"
          />
          <p className="w-[200px] flex-wrap text-center mont-reg">
            NH 66, opp. TMM convention center, Palathara, Kottakkal,Kerala
            676501
          </p>
         <a href="tel:7012253518">
         <button className="bg-momo-primary px-4 py-2 hover:bg-yellow-600 rounded-2xl mont-bold">
         Call Now
          </button>
          </a> 
        
          <div className="flex items-center justify-center gap-2">
            <a href="https://www.instagram.com/momowagon_india/">
              <img className="w-8" src="/twitter.svg" alt="twiiter" />
            </a>
            <a href="">
              <img className="w-8" src="/insta.svg" alt="instagram" />
            </a>
            <a href="">
              <img className="w-8" src="/facebook.svg" alt="facebook" />
            </a>
            <a href="">
              <img className="w-8" src="/whatsapp.svg" alt="whatsapp" />
            </a>
          </div>
        </div>
        <div>
          <h1 className="underline mont-bold">Quick Links</h1>
          <div className="text-[15px] flex items-start justify-center flex-col mont-reg">
            <Link to="/about-us">About Us</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/team">Team</Link>
            <Link to="/company">Company</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/faq">Faq</Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <span className="font-thin text-sm mb-4 mont-reg">
          Copyright © 2023 Momo Wagon | Powered by {""}
          <a target="_blank" href="https://duoph.com/">
            Duoph
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
