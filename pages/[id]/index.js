// import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Sidebar from "../../components/Sidebar";
import PublicIcon from "@material-ui/icons/Public";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import Popover from "@material-ui/core/Popover";

import ProfilePic from "../../images/quote.jpg";

import Quote from "../../images/quote.jpg";
import Rumi from "../../images/rumi.jpg";
import FollowCard from "../../components/Cards/FollowCard";
import NameComponent from "../../components/NameComponent";
import { MoreVert, Search } from "@material-ui/icons";
import DateRangeIcon from "@material-ui/icons/DateRange";
import TweetCard from "../../components/Cards/TweetCard";
import { useWindowSize } from "../../Funtions/Funtions";
// ssdf
const useStyles = makeStyles({
  input: {
    height: 60,
    // border: "1px solid #c4cfd6",
    border: "none",
    borderRadius: 4,
    padding: 8,
    width: 350,
    marginLeft: 15,
    fontSize: 21,
    // "&:focus": {
    //   border: "1px solid #1da1f2",
    // },
  },
  inputSearch: {
    height: 50,
    border: "1px solid #c4cfd6",
    border: "none",
    borderRadius: 30,
    background: "#ebeef0",
    width: "100%",
    marginLeft: 15,
    fontSize: 21,
  },
  hoverDiv: {
    height: 50,
    borderRadius: 30,
    width: "max-content",
    paddingInline: 10,
    paddingInlineStart: 20,
    paddingInlineEnd: 20,
    color: "#1da1f2",
    "&:hover": {
      background: "rgba(29,161,242,0.1)",
      color: "#1da1f2",
      cursor: "pointer",
    },
  },
  sidbarText: { margin: 0, fontWeight: 600, fontSize: 16, marginLeft: 5 },
  sidbarTextList: {
    margin: 0,
    fontWeight: 500,
    fontSize: 14,
    marginLeft: 10,
    color: "black",
  },
  postIcon: {
    color: "#1da1f2",
    cursor: "pointer",
    width: 30,
    height: 30,
    borderRadius: 20,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    "&:hover": {
      background: "rgba(29,161,242,0.1)",
      color: "#1da1f2",
      cursor: "pointer",
    },
  },
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
    background: "white",
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
const whoCan = [
  {
    icon: <PublicIcon></PublicIcon>,
    text: "Everyone",
  },
  {
    icon: <AddCircleIcon></AddCircleIcon>,
    text: "People you follow",
  },
  {
    icon: <AlternateEmailIcon></AlternateEmailIcon>,
    text: "Only people you mention",
  },
];
const trends = [
  {
    tag: "#Save_Sheikh_Jarah",
    type: "Ethnic Cleansing",
    status: "Trending",
  },
  {
    tag: "#Save_Palestine",
    type: "Ethnic Cleansing",
    status: "Trending",
  },
  {
    tag: "#GazaUnderAttak",
    type: "Ethnic Cleansing",
    status: "Trending",
  },
];
export default function Index(props) {
  const router = useRouter();
  console.log("This is props", router.query.id);
  const classes = useStyles();
  const [name, setName] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openPopover = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const profiles = {
    AenUmair: {
      name: "Umair Mukhtar",
      profilePic: ProfilePic,
      cover: Rumi,
      description: "Founder of Alif Programing Language",
      followers: "7B",
      following: "1",
      tweets: "786 k",
      joined: "Joined March 2018",
    },
  };

  const tweets = [
    {
      text: "Hardest choices require strongest wills",
    },
    {
      text: "Perhaps there is no tommorow... , Imam Ali",
      image: Quote,
    },
  ];

  useEffect(function () {}, []);
  const HIDE_WIDTH = 1100;
  const WINDOW_WIDTH = useWindowSize().width;
  return (
    <Grid container direction="row" justify="center">
      {router.query.id && (
        <div
          style={{
            maxWidth: 1800,
            width: "100%",
            paddingLeft: WINDOW_WIDTH > 900 ? 40 : 0,
            paddingRight: WINDOW_WIDTH > 900 ? 40 : 20,
          }}
        >
          <Grid container direction="row">
            <Grid item md={WINDOW_WIDTH > 980 ? 3 : 2} xs={2}>
              <Sidebar page={"Profile"}></Sidebar>
            </Grid>
            <Grid item md={WINDOW_WIDTH > 980 ? 9 : 10} xs={10}>
              <Grid container direction="row">
                <Grid
                  item
                  md={WINDOW_WIDTH < HIDE_WIDTH ? 12 : 8}
                  xs={WINDOW_WIDTH < HIDE_WIDTH ? 12 : 8}
                >
                  <div
                    style={{
                      borderLeft: "1px solid #ebeef0",
                      borderRight: "1px solid #ebeef0",
                    }}
                  >
                    <Grid
                      container
                      direction="row"
                      alignItems="center"
                      style={{ height: 60, borderBottom: "1px solid #ebeef0" }}
                    >
                      <Grid item md={6} xs={12}>
                        <p
                          style={{
                            margin: 0,
                            fontWeight: "bolder",
                            fontSize: 20,
                            marginLeft: 15,
                          }}
                        >
                          {profiles[router.query.id].name}
                        </p>
                        <p
                          style={{
                            margin: 0,
                            marginLeft: 15,
                            color: "#5b7083",
                            fontSize: 13,
                            fontWeight: 500,
                          }}
                        >
                          {profiles[router.query.id].tweets}
                        </p>
                      </Grid>
                      <Grid item md={6} xs={6}></Grid>
                    </Grid>
                    <div
                      style={{
                        width: "100%",
                        height: "calc(100vh - 80px)",
                        maxHeight: "calc(100vh - 80px)",
                        overflow: "scroll",
                      }}
                      className="hideScrollBar"
                    >
                      <Grid
                        container
                        direction="row"
                        alignItems="flex-start"
                        style={{
                          minHeight: 150,
                          borderBottom: "1px solid #ebeef0",
                        }}
                      >
                        <img
                          src={profiles[router.query.id].cover}
                          style={{ height: 200, width: "100%" }}
                        ></img>
                        <div style={{ width: "100%" }}>
                          <Grid container direction="row">
                            <Grid item md={6} xs={12}>
                              {" "}
                              <img
                                src={profiles[router.query.id].profilePic}
                                style={{
                                  height: 130,
                                  width: 130,
                                  marginLeft: 5,
                                  marginTop: -65,
                                  borderRadius: "50%",
                                  border: "2px solid white",
                                }}
                              ></img>
                              <p
                                style={{
                                  margin: 0,
                                  fontSize: 18,
                                  fontWeight: "bolder",
                                  marginLeft: 20,
                                }}
                              >
                                {profiles[router.query.id].name}
                              </p>{" "}
                              <p
                                style={{
                                  margin: 0,
                                  width: "100%",
                                  color: "#5b7083",
                                  fontSize: 14,
                                  marginLeft: 20,
                                }}
                              >
                                @ {router.query.id}
                              </p>
                              <p
                                style={{
                                  margin: 0,
                                  width: "95%",
                                  fontSize: 16,
                                  marginLeft: 20,
                                  marginTop: 10,
                                  marginBottom: 10,
                                }}
                              >
                                {profiles[router.query.id].description}
                              </p>
                              <Grid
                                container
                                direction="row"
                                alignItems="center"
                                style={{
                                  color: "#5b7083",
                                  height: 40,
                                  marginTop: -15,
                                }}
                              >
                                <DateRangeIcon
                                  style={{
                                    marginRight: 5,
                                    fontSize: 17,
                                    marginLeft: 18,
                                  }}
                                ></DateRangeIcon>
                                {profiles[router.query.id].joined}
                              </Grid>
                              <p
                                style={{
                                  margin: 0,
                                  fontSize: 14,
                                  fontWeight: 500,
                                  marginTop: 5,
                                  marginBottom: 5,
                                  color: "#5b7083",
                                }}
                              >
                                <strong
                                  style={{
                                    marginRight: 5,
                                    color: "black",
                                    marginLeft: 20,
                                  }}
                                >
                                  {profiles[router.query.id].following}
                                </strong>{" "}
                                Following
                                <strong
                                  style={{
                                    marginRight: 5,
                                    marginLeft: 7,
                                    color: "black",
                                  }}
                                >
                                  {profiles[router.query.id].followers}
                                </strong>
                                Followers
                              </p>
                            </Grid>
                            <Grid item md={6} xs={6}>
                              <Grid
                                container
                                direction="row"
                                style={{ height: 80 }}
                                alignItems="center"
                                justify="flex-end"
                              >
                                <button
                                  className={classes.buttonHover}
                                  style={{
                                    width: 100,
                                    height: 35,
                                    marginRight: 10,
                                  }}
                                >
                                  Edit Profile
                                </button>
                              </Grid>
                            </Grid>
                          </Grid>
                        </div>
                      </Grid>
                      {tweets.map((item) => {
                        return (
                          <TweetCard
                            profilePic={profiles[router.query.id].profilePic}
                            name={profiles[router.query.id].name}
                            description={profiles[router.query.id].description}
                            followers={profiles[router.query.id].followers}
                            following={profiles[router.query.id].following}
                            userName={router.query.id}
                            text={item.text}
                            image={item.image}
                          ></TweetCard>
                        );
                      })}
                      {/* <FollowCard></FollowCard> */}
                    </div>
                  </div>
                </Grid>

                {WINDOW_WIDTH > HIDE_WIDTH && (
                  <Grid item md={4} xs={4}>
                    <div
                      style={{
                        width: "100%",
                        height: "calc(100vh - 20px)",
                        maxHeight: "calc(100vh - 20px)",
                        overflow: "scroll",
                      }}
                      className="hideScrollBar"
                    >
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        style={{
                          height: 60,
                          // borderBottom: "1px solid #ebeef0"
                        }}
                      >
                        <div className={classes.inputSearch}>
                          <Grid
                            container
                            direction="row"
                            alignItems="center"
                            justify="center"
                            style={{ height: 50 }}
                          >
                            <Search></Search>
                            <input
                              type="text"
                              style={{
                                width: "80%",
                                height: 35,
                                border: "none",
                                background: "#ebeef0",
                                fontSize: 16,
                                paddingInlineStart: 5,
                              }}
                              placeholder="Search Twitter"
                            ></input>
                          </Grid>
                        </div>
                      </Grid>
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        style={{
                          height: 60,
                          // borderBottom: "1px solid #ebeef0"
                        }}
                      >
                        {" "}
                        <div
                          className={classes.inputSearch}
                          style={{
                            width: "95%",
                            border: "none",
                            background: "#f7f9fa",
                            fontSize: 16,
                            paddingInlineStart: 5,
                            borderRadius: 16,
                            height: "max-content",
                            paddingBottom: 20,
                          }}
                        >
                          <Grid
                            container
                            direction="row"
                            alignItems="center"
                            style={{
                              height: 40,

                              borderBottom: "1px solid #ebeef0",
                            }}
                          >
                            <p className={classes.sidebarHeading}>
                              You might also like
                            </p>
                          </Grid>

                          {trends.map((item) => {
                            return <FollowCard></FollowCard>;
                          })}
                        </div>
                        <div
                          className={classes.inputSearch}
                          style={{
                            width: "95%",
                            border: "none",
                            background: "#f7f9fa",
                            fontSize: 16,
                            paddingInlineStart: 5,
                            borderRadius: 16,
                            height: "max-content",
                            paddingBottom: 20,
                            marginBottom: 10,
                            marginTop: 12,
                          }}
                        >
                          <Grid
                            container
                            direction="row"
                            alignItems="center"
                            style={{
                              height: 40,
                              borderBottom: "1px solid #ebeef0",
                            }}
                          >
                            <p
                              style={{
                                margin: 0,
                                fontWeight: "bolder",
                                fontSize: 21,
                                marginLeft: 10,
                              }}
                            >
                              Trends for you
                            </p>
                          </Grid>

                          {trends.map((item) => {
                            return (
                              <Grid
                                container
                                direction="row"
                                alignItems="center"
                                style={{
                                  minHeight: 40,
                                  borderBottom: "1px solid #ebeef0",
                                }}
                              >
                                <p
                                  style={{
                                    fontSize: 12,
                                    color: "gray",
                                    width: "100%",
                                    marginLeft: 10,
                                    marginBottom: 5,
                                  }}
                                >
                                  {item.type + "." + item.status}
                                </p>
                                <p
                                  style={{
                                    margin: 0,
                                    fontWeight: "bolder",
                                    fontSize: 16,
                                    marginLeft: 10,
                                    marginBottom: 5,
                                  }}
                                >
                                  {item.tag}
                                </p>{" "}
                                <p
                                  style={{
                                    fontSize: 12,
                                    color: "gray",
                                    width: "100%",
                                    marginLeft: 10,
                                    marginBottom: 5,
                                  }}
                                >
                                  144k tweets
                                </p>
                              </Grid>
                            );
                          })}
                        </div>
                      </Grid>
                    </div>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </div>
      )}
    </Grid>
  );
}
