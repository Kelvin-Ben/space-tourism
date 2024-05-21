import React from "react";
import styles from "./home.module.css";

const Home = () => {
  const backgroundImage = require(`../../assets/home/background-home-desktop.jpg`);

  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className={styles.intro}>
        <div className={styles.travel}>
          <h1 className={styles.heading}>so, you want to travel to</h1>
          <span className={styles.space}>space</span>
          <p className={styles.text}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className={styles.btn_container}>
          <button className={styles.btn}>explore</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
