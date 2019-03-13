import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Switch from "@material-ui/core/Switch";
import "./App.css";
import HeroHeader from "./components/Material-UI-components/HeroHeader";
import HouseForm from "./components/HouseForm";

/*
###########Other potential imports###########
import AptForm from "./components/AptForm";
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
        <Switch
          checked={this.state.toggle}
          onChange={this.handleToggle}
          color="primary"
        />
        {}
        Form 2
        <HouseForm />
      </div>
    );
  }
}

export default App;
