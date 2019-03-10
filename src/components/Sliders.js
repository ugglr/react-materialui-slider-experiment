import React from "react";
import Typography from "@material-ui/core/Typography";
import SimpleSlider from "./SimpleSlider";
import "../App.css";

const Sliders = () => (
  <div
    style={{
      marginLeft: "2rem",
      marginTop: "2rem"
    }}
  >
    <Typography id="label">Slider 1</Typography>
    <SimpleSlider />
    <Typography id="label">Slider 2</Typography>
    <SimpleSlider />
    <Typography id="label">Slider 3</Typography>
    <SimpleSlider />
    <Typography id="label">Slider 4</Typography>
    <SimpleSlider />
    <Typography id="label">Slider 5</Typography>
    <SimpleSlider />
  </div>
);

export default Sliders;
