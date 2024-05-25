import React, { useEffect, useState } from "react";
import styles from "./Crew.module.css";

const Crew = () => {
  const [backgroundImage, setBackgroundImage] = useState("");

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
      <h1>Crew Page</h1>
    </div>
  );
};

export default Crew;
