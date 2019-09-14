import React, { Component } from "react";
import classes from "./Layout.css";
import Display from "../Display/Display";
import Button from "../Button/Button";
import ClearButton from "../Button/ClearButton";
import ResultButton from "../Button/ResultButton";
class Layout extends Component {
  state = {
    input: "",
    prevNum: "",
    currNum: "",
    operator: ""
  };

  buttonNumberHandler = val => {
    if (this.state.input === 0) {
      this.setState({ input: "" + val });
    } else return this.setState({ input: this.state.input + val });
  };
  clearDisplayHandler = () => {
    return this.setState({ input: "" });
  };
  addDecimalHandler = val => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  };
  add = () => {
    this.state.prevNum = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "plus";
  };
  subtract = () => {
    this.state.prevNum = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "subtract";
  };
  multiply = () => {
    this.state.prevNum = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "multiply";
  };
  divide = () => {
    this.state.prevNum = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "divide";
  };
  evaluate = () => {
    this.state.currNum = this.state.input;
    if (this.state.operator === "plus") {
      this.setState({
        input: parseFloat(this.state.prevNum) + parseFloat(this.state.currNum)
      });
    } else if (this.state.operator === "subtract") {
      this.setState({
        input: parseFloat(this.state.prevNum) * parseFloat(this.state.currNum)
      });
    } else if (this.state.operator === "multiply") {
      this.setState({
        input: parseFloat(this.state.prevNum) * parseFloat(this.state.currNum)
      });
    } else if (this.state.operator === "divide") {
      this.setState({
        input: parseFloat(this.state.prevNum) / parseFloat(this.state.currNum)
      });
    }
  };

  render() {
    return (
      <div className={classes.Layout}>
        <Display>{this.state.input}</Display>

        <div className={classes.Keys}>
          <ClearButton value="ac" clear={this.clearDisplayHandler}>
            AC
          </ClearButton>
          <Button clicked={this.add} value="+">
            +
          </Button>
          <Button clicked={this.subtract} value="-">
            -
          </Button>
          <Button clicked={this.multiply} value="*">
            *
          </Button>
          <Button clicked={this.buttonNumberHandler} value="7">
            7
          </Button>
          <Button clicked={this.buttonNumberHandler} value="8">
            8
          </Button>
          <Button clicked={this.buttonNumberHandler} value="9">
            9
          </Button>
          <Button clicked={this.divide} value="/">
            /
          </Button>
          <Button clicked={this.buttonNumberHandler} value="4">
            4
          </Button>
          <Button clicked={this.buttonNumberHandler} value="5">
            5
          </Button>
          <Button clicked={this.buttonNumberHandler} value="6">
            6
          </Button>
          <Button clicked={this.buttonNumberHandler} value="1">
            1
          </Button>
          <Button clicked={this.buttonNumberHandler} value="2">
            2
          </Button>
          <Button clicked={this.buttonNumberHandler} value="3">
            3
          </Button>
          <Button
            className={classes.Divide}
            clicked={this.buttonNumberHandler}
            value="0"
          >
            0
          </Button>
          <Button clicked={this.addDecimalHandler} value=".">
            .
          </Button>
          <Button>#</Button>
          <ResultButton clicked={this.evaluate} value="=">
            =
          </ResultButton>
        </div>
      </div>
    );
  }
}

export default Layout;
