import React from "react";
import Arrow from "../icons/Arrow";
import styles from "./Button.module.css";
export default function Button({ children }) {
  return (
    <div className={styles.button}>
      {children}
      <Arrow />
    </div>
  );
}
