import React, { Component } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import HeroHeader from "./components/Material-UI-components/HeroHeader";

/*
###########Other potential imports###########
import Sliders from "./components/Sliders";
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <HeroHeader />

        <p>These are regular HTML sliders</p>

        <div className="slide__container">
          <form>
            {/*Slider 1 */}
            <div>
              <label>Slider 1</label>
              <input className="slider" type="range" />
              <span>Value: </span>
            </div>
            {/*Slider 1 */}
            <div>
              <label>Slider 1</label>
              <input className="slider" type="range" />
              <span>Value: </span>
            </div>
            {/*Slider 1 */}
            <div>
              <label>Slider 1</label>
              <input className="slider" type="range" />
              <span>Value: </span>
            </div>
            {/*Slider 1 */}
            <div>
              <label>Slider 1</label>
              <input className="slider" type="range" />
              <span>Value: </span>
            </div>
            {/*Slider 1 */}
            <div>
              <label>Slider 1</label>
              <input className="slider" type="range" />
              <span>Value: </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
