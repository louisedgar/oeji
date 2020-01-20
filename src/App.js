import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar/NavBar.js";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
