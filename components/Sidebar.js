import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import TwitterIcon from "@material-ui/icons/Twitter";
import { useWindowSize } from "../Funtions/Funtions";
import Link from "next/link";
const useStyles = makeStyles((theme) => ({
  sidbarGrid: {
    height: 50,
    borderRadius: 30,
    width: "max-content",
    paddingInline: 10,
    paddingInlineStart: 40,
    paddingInlineEnd: 20,
    "&:hover": {
      background: "rgba(29,161,242,0.1)",
      color: "#1da1f2",
      cursor: "pointer",
    },
    [theme.breakpoints.down("xs")]: {
      paddingInlineStart: 20,
    },
  },

  sidbarGridActive: {
    height: 50,
    borderRadius: 30,
    width: "max-content",
    paddingInline: 10,
    paddingInlineStart: 40,
    paddingInlineEnd: 20,

    color: "#1da1f2",
    cursor: "pointer",
    "&:hover": {
      background: "rgba(29,161,242,0.1)",
    },
    [theme.breakpoints.down("xs")]: {
      paddingInlineStart: 20,
    },
  },

  sideBarDiv: {
    width: "100%",
    cursor: "pointer",
    "&:hover :first-child": {
      background: "rgba(29,161,242,0.1)",
      color: "#1da1f2",
      cursor: "pointer",
    },
  },
  sidbarIcon: {
    marginRight: 20,
    fontSize: 30,
    [theme.breakpoints.down("xs")]: {
      marginRight: 5,
      fontSize: 20,
    },
  },
  sidbarText: { margin: 0, fontWeight: "bold", fontSize: 20 },
  icon: {
    color: "#1da1f2",
    marginTop: 10,
    fontSize: 35,
    marginLeft: 40,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 20,
      fontSize: 20,
    },
  },
}));
export default function Sidebar(props) {
  const classes = useStyles();
  const sideBarData = [
    {
      name: "Home",
      icon: <HomeIcon className={classes.sidbarIcon}></HomeIcon>,
      href: "/home",
    },
    {
      name: "Explore",
      href: "/explore",
      icon: <ExploreIcon className={classes.sidbarIcon}></ExploreIcon>,
    },
    {
      name: "Notifications",
      href: "/notifications",
      icon: (
        <NotificationsNoneIcon
          className={classes.sidbarIcon}
        ></NotificationsNoneIcon>
      ),
    },
    {
      name: "Messages",
      icon: <MailOutlineIcon className={classes.sidbarIcon}></MailOutlineIcon>,
      href: "/messages",
    },
    {
      name: "Bookmarks",
      href: "/bookmarks",
      icon: (
        <BookmarkBorderIcon className={classes.sidbarIcon}></BookmarkBorderIcon>
      ),
    },
    {
      name: "Lists",
      href: "/lists",
      icon: <ListAltIcon className={classes.sidbarIcon}></ListAltIcon>,
    },
    {
      name: "Profile",
      href: "/AenUmair",
      icon: (
        <AccountCircleIcon className={classes.sidbarIcon}></AccountCircleIcon>
      ),
    },
    {
      name: "More",
      icon: (
        <ArrowDropDownCircleIcon
          className={classes.sidbarIcon}
        ></ArrowDropDownCircleIcon>
      ),
    },
  ];
  const WINDOW_WIDTH = useWindowSize().width;
  return (
    <div style={{ width: "100%" }}>
      <TwitterIcon className={classes.icon}></TwitterIcon>
      {sideBarData.map((item) => {
        return (
          <Link href={item.href || "#"}>
            <div className={classes.sideBarDiv}>
              <Grid
                container
                direction="row"
                alignItems="center"
                className={
                  item.name === props.page
                    ? classes.sidbarGridActive
                    : classes.sidbarGrid
                }
              >
                {item.icon}
                {WINDOW_WIDTH > 980 && (
                  <p className={classes.sidbarText}>{item.name}</p>
                )}
              </Grid>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
