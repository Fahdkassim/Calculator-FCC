import React from "react";
import classes from "./Display.css";
const display = props => (
  <div>
    <div className={classes.Display}>{props.children}</div>
  </div>
);

export default display;
// <input className={classes.SecondDisplay} type=""></input>
