import React, { Component } from "react";
import Slider from "rc-slider";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import "rc-slider/assets/index.css"; //This needs to be before our style so if we change something it will apply our style
import "./Palette.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ format: e.target.value });
    this.props.handleChange(e.target.value);
  }
  render() {
    const { level, changeLevel} = this.props;
    const { format } = this.state;
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="/">ReactColorPicker</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className="select-container">
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value="hex">HEX - #fffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255, 1)</MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}