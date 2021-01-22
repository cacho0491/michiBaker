import React from "react";

import styles from "./index.module.css";

const Category = (props) => {
  return (
    <div className={styles.category}>
      <h3>{props.title}</h3>
    </div>
  );
};

export default Category;
