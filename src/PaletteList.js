import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

export default class PaletteList extends Component {
  render() {
    const { paletts } = this.props;
    return (
      <div>
        <MiniPalette />
        <h1>React colors</h1>
        {paletts.map(palette => (
          <MiniPalette {...palette}/>
            // <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
          
        ))}
      </div>
    );
  }
}
