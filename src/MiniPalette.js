import React from "react";
import { withStyles } from "@material-ui/styles";

//These styles will be passed down as an object prop with the name of classes
const styles = {
  main: {
    backgroundColor: "purple",
    border: "3px solid teal"
  },
  secondary: {
    backgroundColor: "pink",
    "& h1": { //This means only the h1 inside the secondary class will be styled like this
      color: "white"
    }
  }
};

function MiniPalette(props) {
  const { classes } = props;
  return (
    <div className={classes.main}>
      <h1>MiniPalette</h1>
      <section className={classes.secondary}>
        <h1>Some h1 other content</h1>
      </section>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
