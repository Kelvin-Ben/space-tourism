import React, { useEffect, useState } from "react";
import "./Destination.css";
import data from "../../assets/data.json";

const Destination = () => {
  const [activeTab, setActiveTab] = useState("Moon");
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setBackgroundImage(
          require("../../assets/destination/background-destination-desktop.jpg")
        );
      } else if (window.innerWidth >= 768) {
        setBackgroundImage(
          require("../../assets/destination/background-destination-tablet.jpg")
        );
      } else {
        setBackgroundImage(
          require("../../assets/destination/background-destination-mobile.jpg")
        );
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="bg-cover bg-center h-screen text-customWhite relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="relative 2xl:w-[80%] 2xl:top-[25%] md:w-[90%] md:top-[15%] min-h-80 lg:top-1/4 mx-auto sm:top-[10%] sm:w-auto xl:top-[25%] xl:w-[90%]">
        <h1 className=" flex text-4xl uppercase tracking-widest mb-20 font-barlow sm:justify-center sm:text-4xl sm:mb-10 lg:w-[90%] lg:mx-auto">
          <span className="w-20 inline-block text-customGray font-bold">
            01
          </span>
          pick your destination
        </h1>
        {data.destinations.map(
          (dest) =>
            dest.name === activeTab && (
              <article
                key={dest.name}
                className="lg:w-[90%] lg:mx-auto lg:min-h-[50%] lg:flex lg:flex-row 2xl:flex 2xl:justify-around xl:flex md:w-full items-center justify-around sm:px-10 sm:w-full"
              >
                <div className="lg:w-auto lg:justify-normal md:w-full md:flex md:justify-center max-h-[80%] sm:justify-center sm:w-[100%]">
                  <img
                    src={require(`../../${dest.images.webp}`)}
                    alt={`destination ${activeTab.toLowerCase()}`}
                    className="lg:w-[75%] md:w-[40%] flex-initial md:my-10 md:p-4 sm:mx-auto sm:mb-10 sm:w-[50%]"
                  />
                </div>
                <div className="lg:w-[50%] lg:h-full md:w-full md:text-center 2xl:w-[50%] xl:w-[50%] 2xl:pl-[10rem]">
                  <div className="w-full flex justify-end mx-auto items-end md:min-h-10 2xl:justify-start xl:justify-start lg:justify-start ">
                    <ul className="flex gap-14 md:w-full font-barlow uppercase tracking-widest list-none font-normal py-4 text-3xl lg:justify-normal md:justify-center sm:mx-auto sm:text-2xl sm:w-full sm:justify-center">
                      {data.destinations.map((dest) => (
                        <li key={dest.name}>
                          <button
                            className={`${
                              activeTab === dest.name
                                ? "underline underline-offset-4 decoration-2 uppercase"
                                : "text-customBlue uppercase"
                            }`}
                            onClick={() => setActiveTab(dest.name)}
                          >
                            {dest.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h2 className="flex lg:justify-normal font-bellefair uppercase text-5xl md:justify-center md:text-[8rem] sm:justify-center sm:text-[6rem] sm:w-full 2xl:text-[7.5rem] xl:text-[7.5rem]">
                    {dest.name}
                  </h2>
                  <p className="lg:w-[75%] lg:text-start lg:text-2xl font-barlow mb-20 md:text-3xl text-customBlue md:w-[90%] md:mx-auto md:align-middle tracking-wider sm:w-[90%] sm:mx-auto sm:text-2xl sm:text-center xs:text-2xl xs:w-full xs:text-center 2xl:w-[65%] xl:w-[70%] 2xl:text-3xl xl:text-3xl">
                    {dest.description}
                  </p>
                  <div className="bg-[#ffffff4d] h-[.1rem] md:w-[90%] md:mx-auto mb-10 2xl:w-[70%] xl:w-[70%] lg:w-[75%]"></div>
                  <div className="w-full min-h-10 lg:justify-normal flex items-start gap-20 sm:gap-10 uppercase text-2xl my-6 sm:my-0 md:w-[90%] md:mx-auto sm:flex-col sm:items-center 2xl:w-[70%] xl:w-[70%]">
                    <div className="flex-1 flex flex-col items-start md:items-center sm:items-center xl:w-[50%]">
                      <span className="text-2xl text-customBlue font-medium font-barlow tracking-wider">
                        avg. distance
                      </span>
                      <h3 className="font-bellefair text-4xl">
                        {dest.distance}
                      </h3>
                    </div>
                    <div className="flex-1 flex flex-col items-start md:items-center sm:items-center 2xl:w-[30%]">
                      <span className="text-2xl text-customBlue font-medium font-barlow tracking-wider">
                        est. travel time
                      </span>
                      <h3 className="font-bellefair text-4xl">{dest.travel}</h3>
                    </div>
                  </div>
                </div>
              </article>
            )
        )}
      </div>
    </div>
  );
};

export default Destination;
