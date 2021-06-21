import React, { useState, useEffect } from "react";
import { Grid, makeStyles, Dialog, IconButton } from "@material-ui/core";
import Sidebar from "../components/Sidebar";
import {
  GifRounded,
  InsertEmoticon,
  MoreVert,
  Search,
  SearchOutlined,
  Send,
} from "@material-ui/icons";
import CloseIcon from "@material-ui/icons/Close";
import { useWindowSize } from "../Funtions/Funtions";
import ProfilePic from "../images/quote.jpg";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";

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
  button: {
    color: "white",
    border: "none",
    borderRadius: 25,
    width: 350,
    background: "#1da1f2",
    height: 45,
    fontWeight: 600,
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
    fontWeight: 600,
    fontSize: 16,
    border: "1px solid #1da1f2",
    cursor: "pointer",
  },
  heading: {
    width: "90%",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bolder",
  },
});

export default function Home() {
  // console.log("THis is window size", useWindowSize());
  const classes = useStyles();
  const [newChat, setNewChat] = useState(null);
  const [newMessage, setNewMessage] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openPopover = Boolean(anchorEl);
  const data = [
    {
      name: "Umair Mukhtar",
      username: "@AenUmair",
    },
    {
      name: "Danna",
      username: "@Danna",
    },
    {
      name: "Rammal",
      username: "@Rammal",
    },
    {
      name: "Bella",
      username: "@Bella",
    },
    {
      name: "Alice Whiteman",
      username: "@Alice",
    },
  ];

  const HIDE_WIDTH = 1100;
  const WINDOW_WIDTH = useWindowSize().width;

  return (
    <Grid container direction="row" justify="center">
      <Dialog
        // fullScreen={props.fullScreen}
        open={newMessage}
        onClose={() => {
          setNewMessage(false);
        }}
        PaperProps={{
          style: {
            borderRadius: 30,
          },
        }}
      >
        <Grid container direction="row" style={{ width: 600, paddingTop: 5 }}>
          <Grid item md={6} xs={6}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
              style={{ height: 50 }}
            >
              <IconButton
                onClick={() => {
                  setNewMessage(false);
                }}
              >
                <CloseIcon style={{ color: "#1da1f2" }}></CloseIcon>
              </IconButton>
              <p
                style={{
                  margin: 0,
                  fontWeight: "bolder",
                  fontSize: 20,
                  marginLeft: 15,
                }}
              >
                New Message
              </p>
            </Grid>
          </Grid>
          <Grid item md={6} xs={6}>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
              style={{ height: 50 }}
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
              <span style={{ marginRight: 15 }}></span>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            alignItems="center"
            style={{ paddingInline: 20, height: 50 }}
          >
            <SearchOutlined
              style={{ color: "#6e8192", fontSize: 26 }}
            ></SearchOutlined>
            <input
              type="text"
              style={{
                height: 35,
                width: "90%",
                border: "none",
                color: "#6e8192",
                fontSize: 18,
                paddingInline: 20,
              }}
              onChange={(e) => {
                setSearchWord(e.target.value);
              }}
              placeholder="Search People"
            ></input>
          </Grid>
          <div style={{ border: "1px solid #ebeef0", width: "100%" }}></div>
          <div style={{ height: 400, width: "100%" }}>
            {data.map((item) => {
              if (
                searchWord != "" &&
                item.name.toLowerCase().indexOf(searchWord.toLowerCase()) > -1
              ) {
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
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setNewChat(item);
                      setNewMessage(false);
                    }}
                  >
                    <Grid item md={1} xs={2}>
                      <img
                        src={ProfilePic}
                        style={{ width: 50, height: 50, borderRadius: 25 }}
                      ></img>
                    </Grid>
                    <Grid item md={11} xs={10}>
                      <Grid container direction="row">
                        <p
                          style={{
                            margin: 0,
                            marginLeft: 20,
                            fontSize: 15,
                            fontWeight: "bolder",
                            width: "100%",
                          }}
                        >
                          {item.name}
                        </p>
                        <p
                          style={{
                            margin: 0,
                            marginLeft: 20,
                            color: "#5b7083",
                            fontSize: 13,
                            fontWeight: 500,
                          }}
                        >
                          {item.username}
                        </p>
                      </Grid>
                      <Grid></Grid>
                    </Grid>
                  </Grid>
                );
              }
            })}
          </div>
        </Grid>
      </Dialog>

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
              <Sidebar page={"Messages"}></Sidebar>
            </Grid>
            <Grid item md={WINDOW_WIDTH > 980 ? 9 : 10} xs={10}>
              <Grid container direction="row">
                {WINDOW_WIDTH > HIDE_WIDTH && (
                  <Grid item md={4} xs={4}>
                    <div
                      style={{
                        width: "100%",
                        height: "calc(100vh - 20px)",
                        maxHeight: "calc(100vh - 20px)",
                        overflow: "scroll",
                        borderLeft: "1px solid #ebeef0",
                        // borderRight: "1px solid #ebeef0",
                      }}
                      className="hideScrollBar"
                    >
                      <Grid
                        container
                        direction="row"
                        alignItems="center"
                        style={{
                          height: 60,
                          borderBottom: "1px solid #ebeef0",
                        }}
                      >
                        <Grid item md={6} xs={6}>
                          <p
                            style={{
                              margin: 0,
                              fontWeight: "bolder",
                              fontSize: 20,
                              marginLeft: 15,
                            }}
                          >
                            Messages
                          </p>
                        </Grid>
                        <Grid item md={6} xs={6}></Grid>
                      </Grid>
                      {newChat !== null ? (
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
                                  height: 30,
                                  border: "none",
                                  background: "#ebeef0",
                                  fontSize: 16,
                                  paddingInlineStart: 5,
                                  marginBottom: 5,
                                }}
                                placeholder="Search for people and groups"
                              ></input>
                            </Grid>
                          </div>
                          <Grid
                            container
                            direction="row"
                            alignItems="flex-start"
                            style={{
                              minHeight: 70,
                              borderBottom: "1px solid #ebeef0",
                              borderTop: "1px solid #ebeef0",
                              paddingInline: 15,
                              paddingTop: 15,
                              cursor: "pointer",
                            }}
                          >
                            <Grid item md={2} xs={2}>
                              <img
                                src={ProfilePic}
                                style={{
                                  width: 50,
                                  height: 50,
                                  borderRadius: 25,
                                }}
                              ></img>
                            </Grid>
                            <Grid item md={10} xs={10}>
                              <Grid container direction="row">
                                <p
                                  style={{
                                    margin: 0,
                                    marginLeft: 20,
                                    fontSize: 15,
                                    fontWeight: "bolder",
                                    width: "100%",
                                  }}
                                >
                                  {newChat.name}
                                </p>
                                <p
                                  style={{
                                    margin: 0,
                                    marginLeft: 20,
                                    color: "#5b7083",
                                    fontSize: 13,
                                    fontWeight: 500,
                                  }}
                                >
                                  {newChat.username}
                                </p>
                              </Grid>
                              <Grid></Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      ) : (
                        <div>
                          <Grid container direction="row" justify="center">
                            <p
                              className={classes.heading}
                              style={{ marginBottom: 0 }}
                            >
                              Send a message, get a message
                            </p>
                            <p
                              className={classes.heading}
                              style={{
                                fontSize: 12,
                                fontWeight: "normal",
                                color: "#5b7083",
                              }}
                            >
                              Direct Messages are private conversations between
                              you and other people on Twitter. Share Tweets,
                              media, and more!
                            </p>
                            <button
                              className={classes.button}
                              style={{
                                width: 190,
                                height: 35,
                                marginRight: 10,
                              }}
                              onClick={() => {
                                setNewMessage(true);
                              }}
                            >
                              Start A Conversation
                            </button>
                          </Grid>
                        </div>
                      )}
                    </div>
                  </Grid>
                )}
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
                    {newChat !== null ? (
                      <Grid
                        container
                        direction="row"
                        alignItems="center"
                        style={{
                          height: 60,
                          borderBottom: "1px solid #ebeef0",
                        }}
                      >
                        <Grid item md={6} xs={6}>
                          <Grid
                            container
                            direction="row"
                            alignItems="flex-start"
                            style={{
                              minHeight: 50,
                              paddingInline: 15,
                              cursor: "pointer",
                            }}
                          >
                            <Grid item md={2} xs={2}>
                              <img
                                src={ProfilePic}
                                style={{
                                  width: 50,
                                  height: 50,
                                  borderRadius: 25,
                                }}
                              ></img>
                            </Grid>
                            <Grid item md={10} xs={10}>
                              <Grid container direction="row">
                                <p
                                  style={{
                                    margin: 0,
                                    marginLeft: 20,
                                    fontSize: 15,
                                    fontWeight: "bolder",
                                    width: "100%",
                                  }}
                                >
                                  {newChat.name}
                                </p>
                                <p
                                  style={{
                                    margin: 0,
                                    marginLeft: 20,
                                    color: "#5b7083",
                                    fontSize: 13,
                                    fontWeight: 500,
                                  }}
                                >
                                  {newChat.username}
                                </p>
                              </Grid>
                              <Grid></Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item md={6} xs={6}></Grid>
                      </Grid>
                    ) : (
                      <div></div>
                    )}
                    <div
                      style={{
                        width: "100%",
                        height: "calc(100vh - 60px)",
                        maxHeight: "calc(100vh - 60px)",
                        overflow: "scroll",
                      }}
                      className="hideScrollBar"
                    >
                      <div
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        style={{ height: "calc(100vh - 80px)" }}
                      >
                        {newChat === null ? (
                          <div>
                            {" "}
                            <Grid container direction="row" justify="center">
                              <p
                                className={classes.heading}
                                style={{ marginBottom: 0, fontSize: 25 }}
                              >
                                You don’t have a message selected
                              </p>
                              <p
                                className={classes.heading}
                                style={{
                                  fontSize: 13,
                                  fontWeight: "normal",
                                  color: "#5b7083",
                                }}
                              >
                                Choose one from your existing messages, or start
                                a new one.
                              </p>

                              <button
                                className={classes.button}
                                style={{
                                  width: 190,
                                  height: 35,
                                  marginRight: 10,
                                }}
                                onClick={() => {
                                  setNewMessage(true);
                                }}
                              >
                                New Message
                              </button>
                            </Grid>
                          </div>
                        ) : (
                          <div>
                            <div
                              style={{
                                height: "calc(100vh - 120px)",
                              }}
                            >
                              {/* asd */}
                            </div>
                            <Grid
                              container
                              direction="row"
                              alignItems="center"
                              style={{
                                height: 60,
                                borderTop: "1px solid #ebeef0",
                              }}
                            >
                              <IconButton>
                                <CropOriginalIcon
                                  style={{ color: "#1da1f2" }}
                                ></CropOriginalIcon>
                              </IconButton>
                              <IconButton>
                                <GifRounded
                                  style={{ color: "#1da1f2" }}
                                ></GifRounded>
                              </IconButton>
                              <div
                                className={classes.inputSearch}
                                style={{
                                  width: "65%",
                                  background: "none",
                                  border: "1px solid #1da1f2",
                                }}
                              >
                                <Grid
                                  container
                                  direction="row"
                                  alignItems="center"
                                  justify="center"
                                  style={{ height: 50 }}
                                >
                                  <input
                                    type="text"
                                    style={{
                                      width: "80%",
                                      height: 30,
                                      border: "none",
                                      background: "none",
                                      fontSize: 16,
                                      paddingInlineStart: 5,
                                      marginBottom: 5,
                                    }}
                                    placeholder="Search for people and groups"
                                  ></input>
                                  <InsertEmoticon
                                    style={{ color: "#1da1f2" }}
                                  ></InsertEmoticon>
                                </Grid>
                              </div>
                              <Send
                                style={{ color: "#1da1f2", marginLeft: 15 }}
                              ></Send>
                            </Grid>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      )}
    </Grid>
  );
}
