import React, { useState } from "react";
import { Grid, IconButton, makeStyles } from "@material-ui/core";
import NameComponent from "../NameComponent";
import ProfilePic from "../../images/quote.jpg";
import { MoreVert, Search } from "@material-ui/icons";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import BackupOutlinedIcon from "@material-ui/icons/BackupOutlined";

const useStyles = makeStyles((theme) => ({
  tweetCard: {
    minHeight: 100,
    borderBottom: "1px solid #ebeef0",
    paddingInline: 15,
    paddingTop: 15,
    "&:hover": {
      background: "#f7f9fa",
    },
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    [theme.breakpoints.down("xs")]: {
      width: 30,
      height: 30,
      borderRadius: 25,
    },
  },
  userId: {
    margin: 0,
    marginLeft: 10,
    color: "#5b7083",
    fontSize: 13,
    fontWeight: 500,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 18,
    },
  },
}));

const TweetCard = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      alignItems="flex-start"
      className={classes.tweetCard}
    >
      <Grid item md={1} xs={1}>
        <img
          src={props.profilePic || ProfilePic}
          className={classes.image}
        ></img>
      </Grid>
      <Grid item md={10} xs={10}>
        <Grid container direction="row">
          <NameComponent
            name={props.name || "Umair Mukhtar"}
            userName={props.userName}
            profilePic={props.profilePic}
            description={props.description}
            followers={props.followers}
            following={props.following}
          ></NameComponent>
          <p className={classes.userId}>@{props.userName || "AenUmair"}</p>
          <p
            style={{
              margin: 0,
              marginLeft: 10,
              color: "#5b7083",
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            Mar27
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
      <Grid item md={1} xs={1}>
        <Grid container direction="row" justify="center">
          <MoreVert
            className={classes.postIcon}
            style={{ color: "#5b7083", fontSize: 20, marginTop: -5 }}
          ></MoreVert>
        </Grid>
      </Grid>
      <Grid item md={1} xs={1}></Grid>
      <Grid item md={11} xs={11}>
        {props.image && (
          <img
            src={props.image}
            style={{
              width: "95%",
              borderRadius: 20,
              marginLeft: 20,
              marginTop: 5,
            }}
          ></img>
        )}
      </Grid>
      <Grid item md={12} xs={12}>
        <p
          style={{
            margin: 0,
            marginLeft: 10,
            color: "#5b7083",
            fontSize: 13,
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          4:16 PM · May 31, 2021·Twitter for Umair
        </p>
        <p
          style={{
            margin: 0,
            width: "100%",
            fontSize: 14,
            fontWeight: 500,
            marginTop: 10,
            marginBottom: 10,
            borderBottom: "1px solid #ebeef0",
            borderTop: "1px solid #ebeef0",
            color: "#5b7083",
            paddingTop: 5,
            paddingBottom: 5,
          }}
        >
          <strong style={{ marginRight: 5, color: "black" }}>3</strong> Tweets
          <strong style={{ marginRight: 5, marginLeft: 7, color: "black" }}>
            7.5M{" "}
          </strong>
          Likes
        </p>
        <Grid container direction="row">
          <Grid item md={3} xs={3}>
            <Grid container direction="row" justify="center">
              <IconButton>
                <ChatBubbleOutlineIcon></ChatBubbleOutlineIcon>
              </IconButton>
            </Grid>
          </Grid>
          <Grid item md={3} xs={3}>
            <Grid container direction="row" justify="center">
              <IconButton>
                <RepeatIcon></RepeatIcon>
              </IconButton>
            </Grid>
          </Grid>
          <Grid item md={3} xs={3}>
            <Grid container direction="row" justify="center">
              <IconButton>
                <FavoriteBorderIcon></FavoriteBorderIcon>
              </IconButton>
            </Grid>
          </Grid>
          <Grid item md={3} xs={3}>
            <Grid container direction="row" justify="center">
              <IconButton>
                <BackupOutlinedIcon></BackupOutlinedIcon>
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TweetCard;
