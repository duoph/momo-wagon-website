import React from "react";
import { Helmet } from "react-helmet";


const Company = () => {
  return (
    <>
    <Helmet>
      <title>Company</title>
      <meta name="description" content="Unleash your taste buds at Weirdly Wonderful Foods, home of unique culinary experiences! From Momo Wagon's Himalayan delights to vibrant open cafe food courts, discover a world of flavor & innovation. "/>
    <link rel="canonical" href="https://www.momowagon.com/#/company" />
    </Helmet>
   
    <div className="flex items-center flex-col justify-between lg:px-10 md:px-5 px-4 gap-4 mb-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center pt-16 flex-col gap-3  lg:w-full">
          <h1 className="text-momo-red text-[30px] mont-heavy ">Our Company</h1>
          <p className="break-all px-32 text-[18px] mont-reg ">
            Welcome to Weirdly Wonderful Foods, the innovative force reshaping
            culinary experiences, spearheading ventures like Momo Wagon. In the
            tapestry of entrepreneurial endeavors, Weirdly Wonderful Foods
            stands as a beacon of boundless creativity and passion, creating
            unique culinary wonders. Founded with the vision to break free from
            conventional norms, Weirdly Wonderful Foods is more than a venture;
            it's a culinary revolution. Picture open cafe food courts where
            families and friends come together under one open roof to savor
            delightful foods from around the world. It's a space where culinary
            dreams take center stage, and each dish is a celebration of the
            weirdly wonderful. The genesis of Weirdly Wonderful Foods lies in
            the profound desire to create exceptional culinary experiences. It's
            a canvas where passion converges with innovation, transforming
            ordinary dining into an extraordinary journey. <br /> <br />
            The company serves as a haven for diverse culinary delights,
            embodying the core values of uniqueness, quality, and a touch of the
            unconventional. Enter Momo Wagon, the inaugural product where
            culinary artistry meets entrepreneurial ingenuity. The idea
            germinated from a shared love for Himalayan momos and a desire to
            present them in a way that transcends the ordinary. A year-long
            journey of research, design, and unwavering dedication culminated in
            the launch of Momo Wagon and the culinary delights from Weirdly
            Wonderful Foods. But Weirdly Wonderful Foods is more than a culinary
            adventure—it's a mindset, a philosophy that permeates every aspect
            of the ventures it nurtures. The company embraces the idea that true
            success lies in breaking molds, fostering an environment where every
            team member is encouraged to think differently, take risks, and
            challenge the status quo. Imagine open cafe food courts where the
            vibrant atmosphere mirrors the diversity of flavors served. Families
            and friends gather to enjoy not just exceptional cuisine but an
            experience that transcends the ordinary dining affair. <br />
            <br /> Weirdly Wonderful Foods strives to create spaces where
            innovative chefs collaborate with seasoned experts, turning each
            dish into a testament to the limitless possibilities that unfold
            when creativity and dedication converge. As Weirdly Wonderful Foods
            expands its horizons, the vision extends beyond borders. The goal is
            not just to create successful culinary ventures but to inspire a
            culture of innovation. Imagine a world where open cafe food courts
            become hubs for culinary exploration, sparking the flame of culinary
            entrepreneurship in the hearts of those who dare to dream
            differently. From momo delights to an array of extraordinary
            culinary experiences, Weirdly Wonderful Foods invites you to be a
            part of a world where every dish is a celebration of the weirdly
            wonderful—a world where open cafe food courts become the backdrop
            for shared moments, laughter, and the joy of savoring delightful
            foods from all corners of the globe. After content add photos of
            open cafe or open food courts etc.. Or group of food trucks in vibe.
          </p>
        </div>
        {/* <div className="bg-red-blob bg-110 w-1/4 mask-container hidden lg:flex">
          <img
            src="/close-up-delicious-asian-food.jpg"
            className="vc-image-1"
            alt=""
          />
        </div> */}
      </div>
      <div className="flex items-center justify-center gap-3">
        <img
          src="/foodtruck1.jpg"
          className="px-2 hidden lg:flex h-[300px] rounded-3xl"
          alt="FoodTruck"
        />
        <img
          src="/foodtruck6.jpg"
          alt="FoodTruck"
          className="px-2 md:h-[300px] w-full  rounded-3xl"
        />
      </div>
    </div>
    </>
  );
};

export default Company;
