import React, { useState, useEffect } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import ProfilePic from "../../images/quote.jpg";
import NameComponent from "../NameComponent";

const useStyles = makeStyles({
  button: {
    color: "white",
    border: "none",
    borderRadius: 25,
    width: 350,
    background: "#1da1f2",
    height: 45,
    fontWeight: 500,
    fontSize: 16,
    cursor: "pointer",
  },
  buttonHover: {
    color: "#1da1f2",
    border: "none",
    borderRadius: 25,
    width: 350,
    textAlign: "center",
    background: "transparent",
    height: 45,
    fontWeight: 500,
    fontSize: 16,
    border: "1px solid #1da1f2",
    cursor: "pointer",
  },
  sidebarHeading: {
    margin: 0,
    fontWeight: "bolder",
    fontSize: 21,
    marginLeft: 10,
  },
});
const FollowCard = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      alignItems="flex-start"
      style={{
        minHeight: 70,
        borderBottom: "1px solid #ebeef0",
        paddingInline: 15,
        paddingTop: 15,
      }}
    >
      <Grid item md={2} xs={2}>
        <img
          src={ProfilePic}
          style={{ width: 50, height: 50, borderRadius: 25 }}
        ></img>
      </Grid>
      <Grid item md={7} xs={7}>
        <Grid container direction="row">
          <NameComponent
            name={"Umair Mukhtar"}
            userName={"AenUmair"}
          ></NameComponent>

          <p
            style={{
              margin: 0,
              marginLeft: 20,
              color: "#5b7083",
              fontSize: 13,
              fontWeight: 500,
              width: "100%",
            }}
          >
            @AenUmair
          </p>
        </Grid>
        <Grid>
          <p
            style={{
              margin: 0,
              marginLeft: 20,
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            {props.text}
          </p>
        </Grid>
      </Grid>
      <Grid item md={2} xs={2}>
        <Grid container direction="row" justify="center">
          <button
            className={classes.buttonHover}
            style={{
              width: 70,
              height: 35,
              marginRight: 10,
            }}
          >
            Follow
          </button>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default FollowCard;
