export default {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh"
  },

  logo: {
    marginRight: 15,
    padding: "0 13px",
    fontSize: 22,
    backgroundColor: "#eceff1",
    fontFamily: "Roboto",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "black"
    }
  },

  slider: {
    width: 350,
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-rail": {
      height: "8"
    },
    "& .rc-slider-handle, .rc-slider-handle:focus, .rc-slider-handle:active, .rc-slider-handle:hover ": {
      background: "green",
      outline: "none",
      border: "2px solid green",
      boxShadow: "none",
      width: "13px",
      height: "13px",
      marginLeft: "-7px",
      marginTop: "-3px"
    },
    "& .rc-slider-track": {
      background: "transparent"
    }
  },
  SelectContainer: {
    marginLeft: "auto",
    marginRight: "1rem"
  }
};
