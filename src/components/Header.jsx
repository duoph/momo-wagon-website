import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import DrawerBar from "./Homepage/Drawer";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(true);

  const location = useLocation();

  const allBlack = location.pathname === "/" ? "text-white" : "text-black";

  const whiteLogo = location.pathname === "/" ? true : false;

  console.log(location);

  return (
    <div className="flex h-[100px] px-28   items-center justify-between  lg:mt-5 ">
      <Link to={"/"}>
        {whiteLogo ? (
          <img
            src={"/MomoWagonWhite.png"}
            className="w-[120px] md:w-[160px] lg:w-[130px]"
            alt="Logo"
          />
        ) : (
          <img
            src={"/momoWagonBlack.png"}
            className="w-[120px] md:w-[160px] lg:w-[160px]"
            alt="Logo"
          />
        )}
      </Link>

      <div className="text-white hidden lg:flex mont-reg font-medium text-[20px] lg:text-[20px] px-10">
        <div className={`flex items-center justify-center gap-10 ${allBlack}`}>
          <Link to={"/"} className="cursor-pointer">
            Home
          </Link>
          <Link to={"/about-us"} className="cursor-pointer">
            About Us
          </Link>
          <a
            href={"https://themomowagon.shopto.store/"}
            className="cursor-pointer"
          >
            Menu
          </a>
          <Link to={"/team"} className="cursor-pointer">
            Team
          </Link>
          <Link to={"/company"} className="cursor-pointer">
            Company
          </Link>
        </div>
      </div>
      <div
        className="text-white flex items-center justify-center lg:hidden "
        onClick={() => setMenuOpen(true)}
      >
        <DrawerBar isMenuOpen={isMenuOpen} />
      </div>
    </div>
  );
};

export default Header;
