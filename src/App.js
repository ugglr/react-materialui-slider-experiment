import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Switch from "@material-ui/core/Switch";
import "./App.css";
import HeroHeader from "./components/Material-UI-components/HeroHeader";
import HouseForm from "./components/HouseForm";
import AptForm from "./components/AptForm";

/*
###########Other potential imports###########

import Sliders from "./components/Sliders";
*/

class App extends Component {
  state = {
    toggle: false
  };

  /*############Callback function for child form component#########

  getValues = e => {
    e.preventDefault();
    const slider1 = e.target.elements.slider1.value;

    console.log(slider1);
  };
  #################################################################
  */

  handleToggle = async e => {
    await this.setState({ toggle: e.target.checked });
    console.log(this.state.toggle);
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <HeroHeader />
        <br />
        <p style={{ marginLeft: "2rem" }}>
          Form1
          <Switch
            checked={this.state.toggle}
            onChange={this.handleToggle}
            color="primary"
          />
          Form2
        </p>
        {this.state.toggle && <AptForm />}
        {this.state.toggle || <HouseForm />}
      </div>
    );
  }
}

export default App;
