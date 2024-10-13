import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.box}>
        <div className={styles.shadow}></div>
        <div className={styles.gravity}>
          <div className={styles.ball}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
