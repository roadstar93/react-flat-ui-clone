import React, { Component } from "react";
import ColorBox from "./ColorBox";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteStyles";
import Navbar from "./Navbar";
import "./Navbar.css";
import PaletteFooter from "./PaletteFooter";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: "hex"
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeColorFormat = this.changeColorFormat.bind(this);
  }

  changeLevel(newLevel) {
    this.setState({ level: newLevel });
  }

  changeColorFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const { colors, id, paletteName, emoji } = this.props.palette;
    const { classes } = this.props;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        moreUrl={`/palette/${id}/${color.id}`}
        showingFullPalette={true}
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeColorFormat}
          showingAllColors={true}
        />

        <div className={classes.PaletteColors}>{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}
export default withStyles(styles)(Palette);
