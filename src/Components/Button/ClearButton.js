import React from "react";
import classes from "./ClearButton.css";
const clearButton = props => (
  <button className={classes.ClearButton} onClick={props.clear}>
    {props.children}
  </button>
);
export default clearButton;
