import React, { useState } from "react";
import Slider from "@mui/material/Slider";

const MuiSlider = () => {
  const [value, setValue] = React.useState([40, 300]);

  function valuetext(value) {
    return `${value}°C`;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
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
