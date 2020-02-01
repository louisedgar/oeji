import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profil from "./pages/Profil";
import Soal from "./pages/Soal";
import Hasil from "./pages/Hasil";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>

            <Route path="/" exact component={Home} />
            <Route path="/dashboard" component={Dashboard} />
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
