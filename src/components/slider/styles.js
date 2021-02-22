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
  arrow: {
    background: "#617d98",
    cursor: "pointer",
    color: "white",
    '&:hover': {
      background: "#ba5d2c",
   },
  },
}));
