import { Outlet } from "react-router-dom";
import Header from "../navigation/Header";

import styles from "./Root.module.css";

const Root = () => {
  return (
    <main className={styles.wrapper}>
      <Header />
      {/* <div  className={styles.container}> */}
      <Outlet />
      {/* </div> */}
    </main>
  );
};

export default Root;
