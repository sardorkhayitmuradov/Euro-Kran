import React from "react";
import Slider from "@mui/material/Slider";

const MuiSlider2 = ({ mui1, setMui1 }) => {
  const valuetext = (value) => {
    return `${value}°C`;
  };

  const handleChange = (event, newValue) => setMui1(newValue);
  return (
    <>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={mui1}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={0}
        max={999}
      />
    </>
  );
};

export default MuiSlider2;
