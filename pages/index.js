import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Grid, makeStyles, Dialog } from "@material-ui/core";
import Link from "next/link";
import Twitter from "../images/twitter.png";
import TwitterIcon from "@material-ui/icons/Twitter";
const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
    border: "none",
    borderRadius: 25,
    width: "65%",
    background: "#1da1f2",
    height: 45,
    marginTop: 20,
    fontWeight: 500,
    fontSize: 16,
    marginLeft: 30,
    cursor: "pointer",
  },
  buttonHover: {
    color: "#1da1f2",
    border: "none",
    borderRadius: 25,
    width: "65%",
    textAlign: "center",
    background: "white",
    height: 45,
    margin: 20,
    fontWeight: 500,
    fontSize: 16,
    marginLeft: 30,
    border: "1px solid #1da1f2",
    cursor: "pointer",
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Grid container direction="row">
        <Grid item md={7} xs={7}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="center"
            style={{ background: `url(${Twitter})`, height: "100vh" }}
          >
            <TwitterIcon
              style={{ fontSize: 280, color: "white" }}
            ></TwitterIcon>
          </Grid>
        </Grid>
        <Grid item md={5} xs={5}>
          <TwitterIcon
            style={{ fontSize: 50, color: "#1da1f2", margin: 30 }}
          ></TwitterIcon>
          <p
            style={{
              fontSize: 64,
              fontWeight: "bolder",
              color: "rgb(15, 20, 25)",
              lineHeight: "calc(84px)",
              letterSpacing: "-1.2px",
              margin: 30,
            }}
          >
            Happening now
          </p>
          <p
            style={{
              fontSize: 40,
              fontWeight: "bolder",
              color: "rgb(15, 20, 25)",
              lineHeight: "calc(84px)",
              letterSpacing: "-1.2px",
              margin: 30,
            }}
          >
            Join Twitter today.
          </p>

          <Link href="#">
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="center"
              className={classes.button}
            >
              <p style={{ margin: 0 }}>Signup</p>
            </Grid>
          </Link>

          <Link href="/login">
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="center"
              className={classes.buttonHover}
            >
              <p style={{ margin: 0 }}>Login</p>
            </Grid>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
