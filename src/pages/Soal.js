import React, { Component } from "react";
import axios from "axios";
import "./Soal.css";
import TestCard from "../components/cards/TestCard";
import TestNumber from "../components/cards/TestNumber";
import NavBar from "../components/navbar/NavBar";

class Soal extends Component {
  state = {
    question: [{ id: "", soal: "", pilihan: "" }],
    cardContent: {
      soal: "",
      pilihan: {
        a: "",
        b: "",
        c: "",
        d: "",
        e: ""
      }
    }
  };

  setQuestion = id => {
    console.log("idnya", id);
    this.setState({
      cardContent: {
        soal: this.state.question[id].soal,
        pilihan: this.state.question[id].pilihan
      }
    });
  };

  getQuestion = async () => {
    await axios
      .get("http://5e26af5f6eeb440014535fff.mockapi.io/soal")
      .then(response => {
        console.log("resp", response);
        // const
        if (response !== undefined) {
          const question = response.data.map(el => {
            return {
              id: el.id,
              soal: el.soal,
              pilihan: el.pilihan
            };
          });
          console.log("ques", question);
          this.setState({
            question: question,
            cardContent: {
              soal: question[0].soal,
              pilihan: question[0].pilihan
            }
          });
        }
      })
      .catch(error => console.log(error));
  };

  componentDidMount = async () => {
    await this.getQuestion();
  };

  render() {
    const { question } = this.state;
    console.log("qqqq", question);
    return (
      <div>
        <NavBar />
        <div className="soal-container">
          <div className="section-a">
            <h1>Sisa Waktu</h1>
          </div>
          <div className="section-b">
            <TestCard cardContent={this.state.cardContent} />
          </div>
          <div className="section-c">
            {question.map((el, index) => {
              return (
                <TestNumber
                  key={index}
                  id={el.id}
                  onClick={() => this.setQuestion(el.id)}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Soal;
