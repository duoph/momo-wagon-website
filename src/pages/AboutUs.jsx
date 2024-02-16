import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FaEye } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";

const AboutUs = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  const aboutText = `
  Welcome to Momo Wagon, a culinary odyssey born from the visionary minds of young entrepreneurs hailing from the vibrant state of Kerala. This gastronomic venture is the brainchild of individuals with diverse expertise—one, a seasoned entrepreneur managing over 6 seafood restaurants in Saudi Arabia, and the other, recognized as the youngest e-commerce consultant in Kerala, adept in digital marketing strategy.
  
  The journey began under the umbrella of "Weirdly Wonderful," a company driven by innovation, uniqueness, and a commitment to redefine the realms of food and ambiance. Their creative prowess materialized into Momo Wagon, the first product of their venture, blending a profound love for momos with a year-long journey of research and meticulous design. Launched on September 26th, 2023, Momo Wagon marks the inception of a culinary experience like no other.
  
  Fueling their ambition, the dynamic duo aims to expand Momo Wagon's footprint across India by 2025, envisioning a nation where the delectable aroma of freshly made momos becomes synonymous with the brand. At the heart of Momo Wagon's success is a strategic partnership with an extraordinary chef from Gangtok, Sikkim. This culinary maestro brings the essence of authenticity to every dish, transforming each momo into a masterpiece that captures the spirit of the Himalayas.
  
  What sets Momo Wagon apart is not just the sumptuous taste of its offerings, but the meticulous attention to detail in crafting a unique ambiance. The ambiance is designed to be an immersive experience—a culinary journey transcending the ordinary. Picture an open café reminiscent of a vibrant flea market, adorned with enchanting lights, resonating music, and ample seating. It's a space where families come together to relish not only the exquisite flavors but also the lively atmosphere.
  
  The journey to create the best momos in Kerala involved a thorough exploration of culinary traditions, sourcing of premium ingredients, and the relentless pursuit of perfection. Momo Wagon prides itself on using homegrown fresh ingredients, steering clear of preservatives and additives. The commitment to sustainability is showcased through eco-friendly practices, with momos served in areca leaf, embodying the brand's dedication to responsible dining.
  
  Behind the scenes, the entrepreneurs bring a wealth of experience to the table. The seafood connoisseur has honed his skills managing a string of successful restaurants in Saudi Arabia, ensuring that the same dedication to quality extends to Momo Wagon. On the other end, the digital marketing maven has brought a fresh perspective to the culinary world, applying innovative strategies to elevate the brand's presence and create a unique identity.
  
  Momo Wagon is more than a culinary venture; it's a celebration of passion, innovation, and a love for exceptional food. As the aroma of our delectable momos wafts through the air, we invite you to join us on this gastronomic journey. Whether you're a momo enthusiast or a newcomer to Himalayan flavors, Momo Wagon promises an unforgettable experience—one bite at a time.`;

  const displayedText = showFullText
    ? aboutText
    : `${aboutText.slice(0, 800)}...`;

  return (
    <>
      <Helmet>
        <title>About Us-Momowagon</title>
        <meta
          name="description"
          content="Discover the story behind Momo Wagon, a culinary venture offering authentic Himalayan momos. Join us on a gastronomic journey of passion, innovation, and exceptional food."
        />
        <link rel="canonical" href="https://www.momowagon.com/#/about-us" />
      </Helmet>

      <div className="flex items-center flex-col justify-between lg:px-10 md:px-5 px-4 gap-4 mb-5">
        <div className="flex items-center justify-between gap-4 mb-5 ">
          <div className="flex items-center md:px-30 justify-center flex-col gap-3 lg:w-3/4">
            <h1 className="text-momo-red text-[30px] mont-heavy">About Us</h1>
            <p className="break-all mont-reg ">{displayedText}</p>
            {!showFullText ? (
              <button
                className="text-momo-red underline mont-reg"
                onClick={toggleFullText}
              >
                Read More
              </button>
            ) : (
              <button
                className="text-momo-red underline mont-reg"
                onClick={() => setShowFullText(false)}
              >
                Read Less
              </button>
            )}
          </div>
          <div className="bg-red-blob bg-110 w-2/4 mask-container hidden lg:flex">
            <img
              src="/close-up-delicious-asian-food.jpg"
              className="vc-image-1 rounded-2xl"
              alt=""
            />
          </div>
        </div>
        <div className="flex items-center flex-col justify-center md:gap-56  gap-8 md:flex-row md:px-64">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-momo-red text-[25px] mont-bold flex gap-3 items-center"><TbTargetArrow className="text-momo-primary size-9 " />Our Mission</h1>
            <p className="mont-reg">
              "Our mission at Momo Wagon is simple—to bring authentic Himalayan
              cuisine, and the joy of freshly made momos, to the tables of every
              momo lover. We're here to share flavors, one bite at a time."
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-momo-red text-[25px] mont-bold flex gap-3 items-center"><FaEye className="text-momo-primary size-9" />Our Vision</h1>
            <p className="mont-reg">
              "To be the go-to destination for delightful Himalayan momos,
              spreading joy and flavors in every town. Momo Wagon envisions a
              future where every bite brings smiles and satisfaction to our
              cherished customers."
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
