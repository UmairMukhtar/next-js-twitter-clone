import React, { useState, useEffect } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Sidebar from "../components/Sidebar";
import PublicIcon from "@material-ui/icons/Public";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import Popover from "@material-ui/core/Popover";
import ProfilePic from "../images/quote.jpg";
import Quote from "../images/quote.jpg";
import ImageIcon from "@material-ui/icons/Image";
import GifIcon from "@material-ui/icons/Gif";
import BarChartIcon from "@material-ui/icons/BarChart";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { MoreVert, Search } from "@material-ui/icons";
import NameComponent from "../components/NameComponent";
import TweetCard from "../components/Cards/TweetCard";
import FollowCard from "../components/Cards/FollowCard";
import { useWindowSize } from "../Funtions/Funtions";

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
  tweetCard: {
    minHeight: 100,
    borderBottom: "1px solid #ebeef0",
    paddingInline: 15,
    paddingTop: 15,
    "&:hover": {
      background: "#f7f9fa",
    },
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

export default function Explore() {
  console.log("THis is window size", useWindowSize());
  const classes = useStyles();
  const [who, setWho] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openPopover = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const tweets = [
    {
      text: "Clonning twitter cause i am bored and there is nothing else to do, and also it will help me build a portfolio so win win situation",
    },
    {
      text: "Perhaps there is no tommorow... , Imam Ali",
      image: Quote,
    },
  ];

  const HIDE_WIDTH = 1100;
  const WINDOW_WIDTH = useWindowSize().width;
  return (
    <Grid container direction="row" justify="center">
      {WINDOW_WIDTH && (
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
              <Sidebar page={"Lists"}></Sidebar>
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
                      style={{ height: 50, borderBottom: "1px solid #ebeef0" }}
                    >
                      <p
                        style={{
                          margin: 0,
                          fontWeight: "bolder",
                          fontSize: 22,
                          marginLeft: 10,
                        }}
                      >
                        Lists
                      </p>
                      <p
                        style={{
                          margin: 0,
                          fontSize: 12,
                          color: "gray",
                          width: "100%",
                          marginLeft: 10,
                          marginBottom: 5,
                        }}
                      >
                        @AenUmair
                      </p>
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
                            fontSize: 22,
                            marginLeft: 10,
                          }}
                        >
                          Pinned Lists
                        </p>
                      </Grid>
                      <Grid
                        container
                        direction="row"
                        alignItems="center"
                        style={{
                          height: 80,
                          borderBottom: "1px solid #ebeef0",
                        }}
                      >
                        <p
                          style={{
                            margin: 0,
                            fontSize: 12,
                            color: "gray",
                            width: "100%",
                            marginLeft: 10,
                            marginBottom: 5,
                            textAlign: "center",
                          }}
                        >
                          Nothing to see here yet — pin your favorite Lists to
                          access them quickly.
                        </p>
                      </Grid>
                      <Grid
                        container
                        direction="row"
                        alignItems="center"
                        style={{
                          height: 40,
                          marginTop: 12,
                          borderBottom: "1px solid #ebeef0",
                        }}
                      >
                        <p className={classes.sidebarHeading}>
                          Discover new Lists
                        </p>
                      </Grid>

                      {trends.map((item) => {
                        return <FollowCard></FollowCard>;
                      })}
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
                            fontSize: 22,
                            marginLeft: 10,
                          }}
                        >
                          Your Lists
                        </p>
                      </Grid>
                      <Grid
                        container
                        direction="row"
                        alignItems="center"
                        style={{
                          height: 80,
                          borderBottom: "1px solid #ebeef0",
                        }}
                      >
                        <p
                          style={{
                            margin: 0,
                            fontSize: 12,
                            color: "gray",
                            width: "100%",
                            marginLeft: 10,
                            marginBottom: 5,
                            textAlign: "center",
                          }}
                        >
                          You haven't created or followed any Lists. When you
                          do, they'll show up here.
                        </p>
                      </Grid>
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
                              marginTop: 12,
                              borderBottom: "1px solid #ebeef0",
                            }}
                          >
                            <p className={classes.sidebarHeading}>
                              Who to follow
                            </p>
                          </Grid>

                          {trends.map((item) => {
                            return <FollowCard></FollowCard>;
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
