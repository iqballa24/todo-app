import React from "react";
import classes from "./Input.module.css";

const Input = () => {
  return (
    <div className={classes.wrapper}>
      <input
        type="text"
        placeholder="Create a new todo..."
        className={classes.input}
      />
      <span className={classes.icon_bullet}></span>
    </div>
  );
};

export default Input;
