import React, { Component } from "react";
import classes from "./Layout.css";
import Display from "../Display/Display";
import Button from "../Button/Button";
import ClearButton from "../Button/ClearButton";
import ResultButton from "../Button/ResultButton";
class Layout extends Component {
  state = {
    display: 0
  };

  buttonNumberHandler = () => {
    return this.setState({ display: 1 });
  };
  displayOnchangeHandler = () => {
    return this.state.display;
  };

  render() {
    console.log(this.displayOnchangeHandler);
    return (
      <div className={classes.Layout}>
        <Display show={this.displayOnchangeHandler} />
        <div className={classes.Keys}>
          <ClearButton value="ac">AC</ClearButton>
          <Button value="+">+</Button>
          <Button value="-">-</Button>
          <Button value="*">*</Button>
          <Button value="7">7</Button>
          <Button value="8">8</Button>
          <Button value="9">9</Button>
          <Button value="/">/</Button>
          <Button value="4">4</Button>
          <Button value="5">5</Button>
          <Button value="6">6</Button>
          <Button clicked={this.buttonNumberHandler} value="1">
            1
          </Button>
          <Button value="2">2</Button>
          <Button value="3">3</Button>
          <Button value="0">0</Button>
          <Button value=".">.</Button>
          <ResultButton value="=">=</ResultButton>
        </div>
      </div>
    );
  }
}

export default Layout;
