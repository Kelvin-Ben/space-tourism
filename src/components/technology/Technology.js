import React, { useEffect, useState } from "react";
import data from "../../assets/data.json";

const Technology = () => {
  const [activeTab, setActiveTab] = useState(data.technology[0].name);
  const [backgroundImage, setBackgroundImage] = useState("");
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    const handleResize = () => {
      let newImage = "";
      if (window.innerWidth >= 1024) {
        setBackgroundImage(
          require("../../assets/technology/background-technology-desktop.jpg")
        );
      } else if (window.innerWidth >= 768) {
        setBackgroundImage(
          require("../../assets/technology/background-technology-tablet.jpg")
        );
      } else {
        setBackgroundImage(
          require("../../assets/technology/background-technology-mobile.jpg")
        );
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleImageChange = () => {
      const tech = data.technology.find((tech) => tech.name === activeTab);
      const newImage =
        window.innerWidth >= 1024
          ? tech.images.portrait
          : tech.images.landscape;
      setCurrentImage(newImage);
    };
    handleImageChange();
    window.addEventListener("resize", handleImageChange);

    return () => {
      window.removeEventListener("resize", handleImageChange);
    };
  }, [activeTab]);
  return (
    <main
      className="bg-cover bg-center h-screen text-customWhite"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="flex h-full mx-auto top-[10%] md:top-0">
        <div className="h-[80vh] w-[90%] ml-[10%] top-[20%] relative flex flex-col justify-between md:w-full md:mx-auto md:top-[10%] md:h-[90%] sm:w-full sm:h-[90%] sm:mx-auto sm:top-[10%]">
          <h1 className="h-[5%] flex items-center text-[3rem] uppercase font-barlow tracking-wider md:w-[90%] md:mx-auto sm:justify-center">
            <span className="mr-[1rem] text-customDark font-bold">03</span>space
            launch 101
          </h1>
          <div className="w-full h-[90%] flex md:flex-col-reverse md:justify-between sm:flex-col-reverse sm:justify-between">
            <div className="w-[60%] h-auto flex items-center justify-between md:flex-col md:w-full md:h-[70%] sm:flex-col sm:w-full sm:h-[60%]">
              <ul className="w-[20%] h-[50%] text-center flex flex-col lg:gap-10 xl:gap-11 2xl:gap-[5rem] md:flex-row md:w-full md:justify-center md:gap-8 md:h-[20%] md:items-center sm:flex-row sm:w-full sm:justify-center sm:gap-8 sm:h-[12%] sm:items-center">
                {data.technology.map((tech, index) => (
                  <li key={tech.name}>
                    <button
                      className={`${
                        activeTab === tech.name
                          ? "bg-customWhite text-customDark w-[6rem] h-[6rem] border rounded-full sm:w-[4rem] sm:h-[4rem] text-3xl font-bellefair text-center font-bold text-center"
                          : "w-[6rem] h-[6rem] border rounded-full sm:w-[4rem] sm:h-[4rem] text-2xl font-bellefair"
                      }`}
                      onClick={() => setActiveTab(tech.name)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
              {data.technology.map(
                (tech) =>
                  tech.name === activeTab && (
                    <article className="w-[70%] h-[50%] md:h-[70%] md:w-[80%] md:text-center sm:w-full sm:text-center sm:h-[80%]">
                      <h2 className="uppercase text-3xl font-barlow tracking-widest text-customBlue 2xl:text-[2.4rem]">
                        the technology...
                      </h2>
                      <h3 className="text-[4rem] uppercase font-bellefair tracking-wide 2xl:text-[5rem]">
                        {tech.name}
                      </h3>
                      <p className="w-[50%] 2xl:w-[65%] 2xl:leading-[3rem] leading-[2.4rem] text-[1.2rem] 2xl:text-[2rem] text-customBlue tracking-wider font-barlow md:w-[80%] md:mx-auto md:text-[1.6rem] sm:w-[80%] sm:mx-auto sm:text-[1.8rem] sm:">
                        {tech.description}
                      </p>
                    </article>
                  )
              )}
            </div>
            <div className="w-[50%] h-auto flex justify-end md:justify-normal md:w-full md:items-center sm:w-full sm:h-[30%]">
              <img
                src={require(`../../${currentImage}`)}
                alt={activeTab}
                className="2xl:h-[90%] my-auto object-contain w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Technology;
