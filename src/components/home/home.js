import React, { useEffect, useState } from "react";
import "./home.css";

const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setBackgroundImage(
          require("../../assets/home/background-home-desktop.jpg")
        );
      } else if (window.innerWidth >= 768) {
        setBackgroundImage(
          require("../../assets/home/background-home-tablet.jpg")
        );
      } else {
        setBackgroundImage(
          require("../../assets/home/background-home-mobile.jpg")
        );
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="bg-cover bg-center h-screen text-customHite py-[15%]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="text-customWhite h-[100%] mt-[10rem] flex w-[90%] mx-auto md:text-center justify-around items-center md:mt-0 md:flex-col md:justify-between sm:flex-col sm:text-center sm:mt-[2rem] sm:justify-between 2xl:w-[80%] 2xl:justify-between">
        <div className="w-[50rem] min-h-[10rem] md:w-[80%] sm:w-auto sm:mt-0">
          <h1 className="uppercase text-[3.5rem] tracking-[4.75px] font-barlow text-customBlue md:text-4xl sm:text-[2rem]">
            so, you want to travel to
          </h1>
          <span className="uppercase text-[15rem] font-bellefair font-light text-white sm:text-[10rem]">
            space
          </span>
          <p className="text-[1.9rem] font-barlow text-customBlue tracking-[1px] leading-loose md:text-[1.8rem] md:w-[80%] md:mx-auto">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!.
          </p>
        </div>
        <div className="relative w-[30rem] flex items-center justify-center h-[30rem] 2xl:mt-[20rem] md:mt-[5rem] group">
          <div className="absolute inset-0 bg-customWhite bg-opacity-10 rounded-full backdrop-blur-md hidden group-hover:flex"></div>
          <button className="w-[20rem] h-[20rem] bg-customWhite font-bellefair rounded-full text-[#0b0d17] uppercase text-2xl tracking-wider font-medium flex items-center justify-center z-10">
            explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
