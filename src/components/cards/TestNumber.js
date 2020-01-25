import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "./TestNumber.css";
class TestNumber extends Component {
  render() {
    return (
      <div className="container">
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
      </div>
    );
  }
}

export default TestNumber;
