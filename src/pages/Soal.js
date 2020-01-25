import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Soal.css";
import TestCard from "../components/cards/TestCard";

function Soal() {
  const [question, setQuestion] = useState([
    // question: {
    //   id: "",
    //   soal: "",
    //   pilihan: ""
    // }
  ]);

  useEffect(() =>
    axios
      .get("http://5e26af5f6eeb440014535fff.mockapi.io/soal")
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error))
  );

  return (
    <div className="container">
      <div className="content">
        <TestCard />
      </div>
    </div>
  );
}

export default Soal;
