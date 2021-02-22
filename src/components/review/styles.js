import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    margin: "40px 0",
    boxShadow: "none",
  },
  media: {
    height: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  imageStyle: {
    height: "120px",
    width: "120px",
    borderRadius: "50%",
  },
  cardActionsStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  job: {
    textTransform: "capitalize",
    fontSize: "12px",
    fontWeight: "bold",
    marginBottom: '20px',
    color: "#324d67"
  },
  name: {
    color: "#ba5d2c",
    textTransform: "capitalize",
    fontSize: "20px",
    fontWeight: "bold",
  },
  description: {
    color: "#617d98",
    margin: "2rem auto 0",
    lineHeight: 2,
    maxWidth: "50em"
  }
}))