import React, { useState } from "react";
import {
  Grid,
  makeStyles,
  Dialog,
  TextField,
  Checkbox,
  Hidden,
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import Link from "next/link";
import Autocomplete from "@material-ui/lab/Autocomplete";
const useStyles = makeStyles({
  input: {
    height: 60,
    border: "1px solid #c4cfd6",
    borderRadius: 4,
    padding: 8,
    width: 350,
    fontSize: 17,
    "&:focus": {
      border: "1px solid #1da1f2",
    },
  },
  heading: {
    fontSize: 40,
    fontWeight: "bolder",
    color: "rgb(15, 20, 25)",
    lineHeight: "calc(84px)",
    letterSpacing: "-1.2px",
    margin: 0,
    width: 350,
  },
  icon: {
    color: "#1da1f2",
    marginTop: 30,
    fontSize: 50,
  },
  button: {
    color: "white",
    border: "none",
    borderRadius: 25,
    width: 350,
    background: "#1da1f2",
    height: 45,
    marginTop: 20,
    fontWeight: 500,
    fontSize: 16,
    cursor: "pointer",
  },
});
export default function Login() {
  const classes = useStyles();
  const [signup, setSignup] = useState(false);
  const [useEmail, setUseEmail] = useState(true);
  const [customizeExperience, setCustomizeExperience] = useState(false);
  const [showStep, setShowStep] = useState(false);
  const SignupDialog = (props) => {
    return (
      <Dialog
        fullScreen={props.fullScreen}
        open={signup}
        onClose={() => {
          setSignup(false);
        }}
        PaperProps={{
          style: {
            borderRadius: props.radius || 0,
          },
        }}
      >
        {showStep ? (
          <Grid
            container
            direction="row"
            style={{
              width: props.gridWidth || "100%",
              padding: 25,
              paddingTop: 5,
            }}
          >
            <Grid item md={6} xs={6}>
              <Grid container direction="row" justify="flex-end">
                <p
                  style={{
                    width: "100%",
                    fontWeight: "bold",
                    fontSize: 28,
                    color: "black",
                    margin: 0,
                    marginBottom: 35,
                  }}
                >
                  Step 3 of 5
                </p>
              </Grid>
            </Grid>
            <Grid item md={6} xs={6}>
              <Grid
                container
                direction="row"
                justify="flex-end"
                style={{ marginTop: -10 }}
              ></Grid>
            </Grid>
            <p
              style={{
                width: "100%",
                fontWeight: "bold",
                fontSize: 24,
                color: "black",
                margin: 0,
              }}
            >
              Create Your account
            </p>
            <input
              className={classes.input}
              style={{ width: "100%", marginTop: 20 }}
              type={"text"}
              placeholder="Name"
            ></input>
            {useEmail ? (
              <input
                className={classes.input}
                style={{ width: "100%", marginTop: 20 }}
                type={"email"}
                placeholder="Email"
              ></input>
            ) : (
              <input
                className={classes.input}
                style={{ width: "100%", marginTop: 20 }}
                type={"text"}
                placeholder="Phone"
              ></input>
            )}
            <input
              className={classes.input}
              style={{ width: "100%", marginTop: 20 }}
              type={"text"}
              placeholder="Birth Date"
            ></input>
            <p
              style={{
                margin: 0,
                fontSize: 14,
                marginTop: 15,
              }}
            >
              By signing up, you agree to the{" "}
              <span style={{ color: "#1da1f2", marginLeft: 5 }}>
                Terms of Service{" "}
              </span>
              and{" "}
              <span style={{ color: "#1da1f2", marginLeft: 5 }}>
                Privacy Policy
              </span>
              , including{" "}
              <span style={{ color: "#1da1f2", marginLeft: 5 }}>
                Cookie Use
              </span>
              . Others will be able to find you by email or phone number when
              provided · Privacy Options
              <span style={{ color: "#1da1f2", marginLeft: 5 }}>
                Privacy Options{" "}
              </span>
              .
            </p>
            <Link href="/login">
              <Grid
                container
                direction="row"
                alignItems="center"
                justify="center"
                className={classes.button}
                style={{ width: "100%" }}
              >
                <p style={{ margin: 0 }}>Signup</p>
              </Grid>
            </Link>
          </Grid>
        ) : customizeExperience ? (
          <Grid
            container
            direction="row"
            style={{
              width: props.gridWidth || "100%",
              padding: 25,
              paddingTop: 5,
            }}
          >
            <Grid item md={6} xs={6}>
              <Grid
                container
                direction="row"
                justify="flex-end"
                style={{ marginTop: -20 }}
              >
                <TwitterIcon
                  className={classes.icon}
                  style={{ fontSize: 28 }}
                ></TwitterIcon>
              </Grid>
            </Grid>
            <Grid item md={6} xs={6}>
              <Grid
                container
                direction="row"
                justify="flex-end"
                style={{ marginTop: -10 }}
              >
                <button
                  className={classes.button}
                  style={{ width: 70, height: 35 }}
                  // onClick={() => {
                  //   setCustomizeExperience(true);
                  // }}
                >
                  Next
                </button>
              </Grid>
            </Grid>

            <p
              style={{
                width: "100%",
                fontWeight: "bold",
                fontSize: 28,
                color: "black",
                margin: 0,
                marginBottom: 35,
              }}
            >
              Customize your experience
            </p>
            <p
              style={{
                width: "100%",
                fontWeight: "bold",
                fontSize: 22,
                color: "black",
                margin: 0,
              }}
            >
              Track where you see Twitter content across the web
            </p>

            <Grid container direction="row">
              <Grid item md={11} xs={11}>
                {" "}
                <p style={{ margin: 0, fontSize: 14, marginTop: 15 }}>
                  Twitter uses this data to personalize your experience. This
                  web browsing history will never be stored with your name,
                  email, or phone number.
                </p>
              </Grid>
              <Grid item md={1} xs={1}>
                <Checkbox style={{ color: "#1da1f2" }}></Checkbox>
              </Grid>
            </Grid>
            <p
              style={{
                margin: 0,
                fontSize: 14,
                marginTop: 15,
                marginBottom: 150,
              }}
            >
              For more details about these settings, visit the{" "}
              <span style={{ color: "#1da1f2" }}>Help Center </span>.
            </p>
          </Grid>
        ) : (
          <Grid
            container
            direction="row"
            style={{ width: 600, padding: 25, paddingTop: 5 }}
          >
            <Grid item md={6} xs={6}>
              <Grid
                container
                direction="row"
                justify="flex-end"
                style={{ marginTop: -20 }}
              >
                <TwitterIcon
                  className={classes.icon}
                  style={{ fontSize: 28 }}
                ></TwitterIcon>
              </Grid>
            </Grid>
            <Grid item md={6} xs={6}>
              <Grid
                container
                direction="row"
                justify="flex-end"
                style={{ marginTop: -10 }}
              >
                <button
                  className={classes.button}
                  style={{ width: 70, height: 35 }}
                  onClick={() => {
                    setCustomizeExperience(true);
                  }}
                >
                  Next
                </button>
              </Grid>
            </Grid>
            <input
              className={classes.input}
              style={{ width: "100%", marginTop: 20 }}
              type={"text"}
              placeholder="Name"
            ></input>
            {useEmail ? (
              <input
                className={classes.input}
                style={{ width: "100%", marginTop: 20 }}
                type={"email"}
                placeholder="Email"
              ></input>
            ) : (
              <input
                className={classes.input}
                style={{ width: "100%", marginTop: 20 }}
                type={"text"}
                placeholder="Phone"
              ></input>
            )}
            {useEmail ? (
              <span
                href="#"
                style={{ cursor: "pointer", color: "#1da1f2", marginTop: 20 }}
                onClick={(e) => {
                  setUseEmail(false);
                }}
              >
                Use phone instead
              </span>
            ) : (
              <span
                href="#"
                style={{ cursor: "pointer", color: "#1da1f2", marginTop: 20 }}
                onClick={(e) => {
                  setUseEmail(true);
                }}
              >
                Use email instead
              </span>
            )}
            <p style={{ width: "100%", fontWeight: "bold" }}>Date of Birth</p>
            <p style={{ margin: 0 }}>
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </p>
            <Grid item md={6} xs={6}>
              <Autocomplete
                options={[
                  { title: "All Activity", year: 1994 },
                  { title: "Some Activity", year: 1994 },
                ]}
                getOptionLabel={(option) => option.title}
                style={{
                  // width: 200,
                  marginTop: 20,
                  marginBottom: 20,
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Month" variant="outlined" />
                )}
              />
            </Grid>
            <Grid item md={3} xs={3}>
              <Autocomplete
                id="combo-box-demo"
                options={[
                  { title: "All Activity", year: 1994 },
                  { title: "Some Activity", year: 1994 },
                ]}
                getOptionLabel={(option) => option.title}
                style={{
                  // width: 200,
                  marginLeft: 20,
                  marginTop: 20,
                  marginBottom: 20,
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Day" variant="outlined" />
                )}
              />
            </Grid>
            <Grid item md={3} xs={3}>
              <Autocomplete
                id="combo-box-demo"
                options={[
                  { title: "Year", year: 1994 },
                  { title: "Some Activity", year: 1994 },
                ]}
                getOptionLabel={(option) => option.title}
                style={{
                  // width: 200,
                  marginLeft: 20,
                  marginTop: 20,
                  marginBottom: 20,
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Year" variant="outlined" />
                )}
              />
            </Grid>
          </Grid>
        )}
      </Dialog>
    );
  };
  return (
    <Grid container direction="column" alignItems="center">
      <Hidden only={["lg", "md", "xl"]}>
        <SignupDialog fullScreen={true}></SignupDialog>
      </Hidden>
      <Hidden only={["sm", "xs"]}>
        <SignupDialog
          fullScreen={false}
          radius={20}
          gridWidth={600}
        ></SignupDialog>
      </Hidden>

      <div style={{ width: 350 }}>
        <TwitterIcon className={classes.icon}></TwitterIcon>
      </div>

      <p className={classes.heading}>Log in to Twitter</p>
      <input
        className={classes.input}
        placeholder="Phone, email , username"
        style={{ marginBottom: 30 }}
      ></input>
      <input
        className={classes.input}
        type={"password"}
        placeholder="Password"
      ></input>
      <Link href="/home">
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="center"
          className={classes.button}
        >
          <p style={{ margin: 0 }}>Login</p>
        </Grid>
      </Link>
      <div style={{ width: 350 }}>
        <Grid
          container
          direction="row"
          justify="center"
          style={{ color: "#1da1f2", marginTop: 20 }}
        >
          <Link href="#" style={{ marginRight: 5 }}>
            Forgot Password?
          </Link>
          <span style={{ width: 10 }}></span>
          <span
            href="#"
            style={{ cursor: "pointer", color: "#1da1f2" }}
            onClick={(e) => {
              e.preventDefault();
              setSignup(true);
            }}
          >
            Signup for Twitter
          </span>
        </Grid>
      </div>
    </Grid>
  );
}
