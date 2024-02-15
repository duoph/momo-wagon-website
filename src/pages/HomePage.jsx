import React from "react";
import Hero from "../components/Homepage/Hero";
import AboutMomoWagon from "../components/Homepage/AboutMomoWagon";
import SignatureFood from "../components/Homepage/SignatureFood";
import DiningExperience from "../components/Homepage/DiningExperience";
import VoicesOfSatisfaction from "../components/Homepage/VoicesOfSatisfaction";
import GetInTouchContainer from "../components/Homepage/GetInTouchContainer";
import { Helmet } from "react-helmet";


document.title = "MomoWagon";




const HomePage = () => {
  return (

    <>
    <Helmet>
      <title>MomoWagon</title>
      <meta  name="description" content="  Discover the story behind Momo Wagon, a culinary venture offering authentic Himalayan momos. Join us on a gastronomic journey of passion, innovation, and exceptional food."/>
     <link rel="canonical" href="https://www.momowagon.com/" />  
     
    </Helmet>
    
    
    <div className="">
      <Hero />
      <AboutMomoWagon />
      <SignatureFood />
      <DiningExperience />
      <VoicesOfSatisfaction />
      <GetInTouchContainer />
    </div>
    </>
  );
};

export default HomePage;
