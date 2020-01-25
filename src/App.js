import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar/NavBar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profil from "./pages/Profil";
import Soal from "./pages/Soal";
import Hasil from "./pages/Hasil";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/profil" component={Profil} />
            <Route path="/soal" component={Soal} />
            <Route path="/hasil" component={Hasil} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
