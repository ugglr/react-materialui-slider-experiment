import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Sliders from "./components/Sliders";
import "./App.css";
import HeroHeader from "./components/HeroHeader";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <HeroHeader />
        <Sliders />
      </div>
    );
  }
}

export default App;
