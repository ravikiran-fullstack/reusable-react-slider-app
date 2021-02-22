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
  arrow: { background: "#e1e1e1", cursor: "pointer" },
}));
