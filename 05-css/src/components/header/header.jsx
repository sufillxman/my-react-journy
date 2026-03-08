import React from "react";
import styles from "./header.module.css"

function header() {
  return (
    <div className={styles.perent}>
      <h1 className={styles.head}>this is header</h1>
      <button className={styles.btn}>login</button>
    </div>
  );
}

export default header;
