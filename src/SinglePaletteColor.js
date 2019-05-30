import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import ColorBox from "./ColorBox";
import styles from "./styles/PaletteStyles";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

class SinglePaletteColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex"
    };
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.changeColorFormat = this.changeColorFormat.bind(this);
  }

  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }
    //return all shades of given color
    return shades.slice(1);
  }
  changeColorFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const { format } = this.state;
    const { paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showingFullPalette={false}
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar
          handleChange={this.changeColorFormat}
          showingAllColors={false}
        />
        <div className={classes.PaletteColors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`}>Go Back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SinglePaletteColor);
