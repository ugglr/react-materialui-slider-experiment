import React from "react";

class AptForm extends React.Component {
  state = {
    slider1: 20,
    slider2: 30,
    sum: 40
  };

  handleChange1 = async e => {
    await this.setState({ slider1: e.target.value });
    this.updateSum();
  };

  handleChange2 = async e => {
    await this.setState({ slider2: e.target.value });
    this.updateSum();
  };

  updateSum = () => {
    const slider1Val = parseInt(this.state.slider1);
    const slider2Val = parseInt(this.state.slider2);
    this.setState({ sum: slider1Val + slider2Val });
  };

  render() {
    return (
      <form>
        <div className="slide__container">
          {/*Slider 1 */}
          <label>Slider 1</label>
          <input
            className="slider"
            type="range"
            name="slider1"
            min="1"
            max="100"
            step="1"
            defaultValue="20"
            onChange={this.handleChange1}
          />
          <span>Value: {this.state.slider1}</span>
          <br />

          {/*Slider 1 */}
          <label>Slider 2</label>
          <input
            className="slider"
            type="range"
            name="slider2"
            min="1"
            max="100"
            step="1"
            defaultValue="30"
            onChange={this.handleChange2}
          />
          <span>Value: {this.state.slider2}</span>
          <br />
          <br />

          <span>Value: {this.state.sum}</span>
        </div>
      </form>
    );
  }
}

export default AptForm;
