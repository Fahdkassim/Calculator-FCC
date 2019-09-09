import React from "react";
import classes from "./Display.css";
const display = props => (
  <div>
    <div className={classes.Display}>{props.show}</div>
  </div>
);

export default display;
// <input className={classes.SecondDisplay} type=""></input>
