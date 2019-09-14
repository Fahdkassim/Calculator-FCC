import React from "react";
import classes from "./ResultButton.css";

const resultButton = props => (
  <button className={classes.ResultButton} onClick={props.clicked}>
    {props.children}
  </button>
);
export default resultButton;
