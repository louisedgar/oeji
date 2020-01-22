import React, { Component } from "react";
import axios from "axios";
import TestCard from "../components/cards/TestCard";

class Soal extends Component {
  state = {
    question: {
      id: "",
      soal: "",
      pilihan: ""
    }
  };

  getQuestion = () => {
    axios
      .get("http://5e26af5f6eeb440014535fff.mockapi.io/soal")
      .then(
        response => console.log(response)
        // this.setState({
        //   question: {
        //     id: response.data.id,
        //     soal: response.data.soal,
        //     pilihan: response.data.pilihan
        //   }
        // })
      )
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <h1>Soal</h1>
        <TestCard getQuestion={this.getQuestion} />
      </div>
    );
  }
}

export default Soal;
