import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/MiniPaletteStyles"

//These styles will be passed down as an object prop with the name of classes
// const styles = {
//   main: {
//     backgroundColor: "purple",
//     border: "3px solid teal"
//   },
//   secondary: {
//     backgroundColor: "pink",
//     "& h1": {
//       //This means only the h1 inside the secondary class will be styled like this
//       color: "white"
//     }
//   }
// };



function MiniPalette(props) {
  const { classes, paletteName, emoji, colors } = props;
  const miniColorBoxes = colors.map(color => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
      key={color.name}
    />
  ));
  return (
    <div className={classes.root} onClick={props.handleClick}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
