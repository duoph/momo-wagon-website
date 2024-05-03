import { IoIosArrowDropupCircle } from "react-icons/io";
import React from "react";
import { useEffect, useState } from "react";

function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollup = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTopButton && (
        <button
          className="w-[30px] text-black bottom-[60px] right-[60px] height-[50px] fixed"
          onClick={scrollup}
        >
          <IoIosArrowDropupCircle className="text-[60px] z-[999]" />
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;
