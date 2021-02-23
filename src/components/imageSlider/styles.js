import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  slider: {
    position: 'relative',
    height: "100vh",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '1000px',
    height: '600px',
    borderRadius: '10px'
  },
  rightArrow: {
    position: 'absolute',
    top: "50%",
    right: "32px",
    fontSize: "3rem",
    color: "#000",
    zIndex: '10',
    cursor: 'pointer',
    userSelect: 'none'

  },
  leftArrow: {
    position: 'absolute',
    top: "50%",
    left: "32px",
    fontSize: "3rem",
    color: "#000",
    zIndex: '10',
    cursor: 'pointer',
    userSelect: 'none'
  },
  slide: {
    opacity: 0,
    transitionDuration: '1s ease-in'
  },
  active: {
    opacity: 1,
    transitionDuration: '1s',
    transform: 'scale(1.08)'
  }

}));
