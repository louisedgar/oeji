import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "./TestNumber.css";
class TestNumber extends Component {
  render() {
    return (
      <div className="number-btn">
        <Button
          variant="contained"
          color="secondary"
          onClick={this.props.onClick}
        >
          {this.props.id}
        </Button>
      </div>
    );
  }
}

export default TestNumber;
