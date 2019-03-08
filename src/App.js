import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Sliders from "./components/Sliders";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Sliders />
        <p>Hello</p>
      </div>
    );
  }
}

export default App;
