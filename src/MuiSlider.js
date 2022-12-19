import React from "react";
import Slider from "@mui/material/Slider";

const MuiSlider = ({ mui, setMui }) => {
  function valuetext(value) {
    return `${value}°C`;
  }

  const handleChange = (event, newValue) => setMui(newValue);

  return (
    <>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={mui}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={0}
        max={999}
      />
    </>
  );
};

export default MuiSlider;
