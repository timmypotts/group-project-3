import React, { Component } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import OurMission from "./pages/OurMission";
import SignIn from "./pages/SignIn";
import Give from "./pages/Give";
import Receive from "./pages/Receive";
import Donations from "./pages/Donations";


import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/give" component={Give} />
        <Route path="/signin" component={SignIn} />
        <Route path="/mission" component={OurMission} />
        <Route path="/receive" component={Receive} />
        <Route path="/donations" component={Donations} />
      </div>
    </Router>
  );
}

export default App;
