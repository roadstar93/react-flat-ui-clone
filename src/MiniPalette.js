import React from "react";
import { withStyles } from "@material-ui/styles";

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

const styles = {
  root: {
    backgroundColor: "white",
    borderRadius: "5px",
    border: "1px solid black",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer"
    }
  },
  colors: {
    backgroundColor: "grey"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative"
  },
  emoji: {
      marginLeft: "0.5rem",
      fontSize: "1.5rem"
  }
};

function MiniPalette(props) {
  const { classes, paletteName, emoji } = props;
  return (
    <div className={classes.root}>
      <div className={classes.colors}>{}</div>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
