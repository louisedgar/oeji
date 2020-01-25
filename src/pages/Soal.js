import React, { Component } from "react";
import axios from "axios";
import "./Soal.css";
import TestCard from "../components/cards/TestCard";
import TestNumber from "../components/cards/TestNumber";

class Soal extends Component {
  state = {
    question: { id: "", soal: "", pilihan: "" }
  };

  componentDidMount = () => {
    axios
      .get("http://5e26af5f6eeb440014535fff.mockapi.io/soal")
      .then(response => {
        console.log(response);
        if (response !== undefined) {
          this.setState({
            question: {
              id: response.data.id,
              soal: response.data.soal,
              pilihan: response.data.pilihan
            }
          });
        }
      })
      .catch(error => console.log(error));
  };

  choose = obj => {
    this.setState({
      question: { id: obj.id, soal: obj.soal, pilihan: obj.pilihan }
    });
  };

  render() {
    return (
      <div className="container">
        <div className="left">
          <TestCard />
        </div>
        <div className="right">
          <TestNumber />
        </div>
      </div>
    );
  }
}

export default Soal;
