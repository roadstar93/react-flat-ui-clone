const styles = {
    root: {
      width: "20%",
      height: "25%",
      margin: "0 auto",
      display: "inline-block",
      position: "relative",
      cursor: "pointer",
      marginBottom: "-3.5px",
      "&:hover svg": {
        color: "white",
        transform: "scale(1.3)"
      }
    },
    boxContent: {
      position: "absolute",
      padding: "10px",
      left: "0px",
      width: "100%",
      bottom: "0px",
      color: "rgba(0,0,0,0.5)",
      letterSpacing: "1px",
      textTransform: "uppercase",
      fontSize: "12px",
      display: "flex",
      justifyContent: "space-between"
    },
    deleteIcon: {
      transition:"all 0.3s ease-in-out"
    }
  };

  export default styles;