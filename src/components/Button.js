import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button type={props.btnType} className={styles.button}>
      {props.name}
    </button>
  );
};

export default Button;
