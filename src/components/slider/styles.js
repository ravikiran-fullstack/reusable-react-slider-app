import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  underline: {
    height: "0.25rem",
    width: "5rem",
    background: "hsl(205, 78%, 60%)",
    marginRight: "auto",
    marginLeft: "auto",
  },
  heading: {
    margin: 0,
  },

  slider: {
    position: "relative",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "1000px",
    height: "600px",
    borderRadius: "10px",
  },
  
  arrow: {
    position: "relative",
    top: "75%",
    fontSize: "3rem",
    background: "#617d98",
    cursor: "pointer",
    color: "white",
    "&:hover": {
      background: "#ba5d2c",
    },
    zIndex: "10",
    userSelect: "none",
  },
  rightArrow: {
    right: '-100px'
  },

  leftArrow: {
    left: '-100px'
  },
  slide: {
    opacity: 0,
    transitionDuration: "1s ease-in",
  },
  active: {
    opacity: 1,
    transitionDuration: "1s",
    transform: "scale(1.08)",
  },
}));
