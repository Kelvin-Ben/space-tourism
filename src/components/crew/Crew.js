import React, { useEffect, useState } from "react";
import data from "../../assets/data.json";

const Crew = () => {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [activeButton, setActiveButton] = useState(data.crew[0].name);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setBackgroundImage(
          require("../../assets/crew/background-crew-desktop.jpg")
        );
      } else if (window.innerWidth >= 768) {
        setBackgroundImage(
          require("../../assets/crew/background-crew-tablet.jpg")
        );
      } else {
        setBackgroundImage(
          require("../../assets/crew/background-crew-mobile.jpg")
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
      className="bg-cover bg-center h-screen text-customWhite"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <main className="h-[100%] flex flex-col">
        <div className="w-[100%] h-[90%] mt-[8%] mx-auto flex flex-col md:mt-[12%] sm:mt-[15%] sm:min-h-[80%] lg:h-[80%] lg:mt-[15%] ">
          <div className="h-[10%] w-[80%] mx-auto flex items-center mt-[1rem]  md:w-[90%] sm:h-[5%] sm:mt-[5rem] sm:justify-center">
            <h1 className="text-4xl font-barlow uppercase tracking-widest">
              <span className="mr-[1rem] text-customDark">02</span>
              meet your crew
            </h1>
          </div>
          {data.crew.map(
            (crew) =>
              crew.name === activeButton && (
                <article className="flex w-[80%] min-h-[55rem] m-auto top-[10rem] md:flex-col md:w-[90%] md:h-[80rem] md:justify-between sm:flex-col-reverse sm:h-auto sm:justify-between sm:relative sm:mt-0">
                  <div className="w-[50%] md:h-auto md:w-[100%] flex flex-col md:items-center sm:w-[100%] sm:h-[40rem] sm:mb-[1rem]">
                    <h2 className="text-[3rem] uppercase tracking-wide font-bellefair text-customDark mt-[6.5rem] md:mt-0 md:text-[2rem] sm:text-center sm:text-[2rem] ">
                      {crew.role}
                    </h2>
                    <h3 className="text-[5rem] uppercase font-bellefair md:text-[3.5rem] sm:text-center sm:text-[3rem]">
                      {crew.name}
                    </h3>
                    <p className="h-[16rem] text-[1.65rem] w-[69%] tracking-wider text-customBlue font-barlow md:text-center md:h-[16rem] md:w-[80%] md:text-[2.4rem] sm:w-[100%] sm:mx-auto sm:text-center sm:flex sm:items-center sm:h-auto sm:text-[2rem]">
                      {crew.bio}
                    </p>
                    {/* think about how to style the buttons */}
                    <div className="flex h-[10%] items-center mt-[3rem] sm:justify-center sm:absolute sm:w-full sm:mt-0">
                      {data.crew.map((buttonCrew) => (
                        <button
                          key={buttonCrew.name}
                          className={`w-[1.5rem] h-[1.5rem] rounded-full mr-[2rem] sm:w-[1.2rem] sm:h-[1.2rem] border-transparent ${
                            activeButton === buttonCrew.name
                              ? "bg-customWhite"
                              : "bg-customDark"
                          }`}
                          onClick={() => setActiveButton(buttonCrew.name)}
                        >
                          &nbsp;
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex w-[50%] justify-center md:w-[100%] md:h-[55rem] md:mx-auto sm:mx-auto sm:w-[100%] sm:border-b sm:border-customDark">
                    <img
                      src={require(`../../${crew.images.webp}`)}
                      alt={`${crew.role} ${crew.name}`}
                      className="h-[55rem] md:h-[54rem] md:w-auto sm:h-[30rem] sm:w-auto"
                    />
                  </div>
                </article>
              )
          )}
        </div>
      </main>
    </div>
  );
};

export default Crew;
