import React, { useState, useEffect } from "react";
import { Grid, makeStyles, Popover } from "@material-ui/core";
import ProfilePic from "../images/quote.jpg";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Link from "next/link";
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
export default function NameComponent(props) {
  const [displayDetails, setDisplayDetails] = useState(false);
  const [anchorElDetail, setAnchorElDetail] = React.useState(null);
  const [onCard, setOnCard] = React.useState(false);
  const openDetailPopover = Boolean(anchorElDetail);
  const classes = useStyles();
  // console.log("THis is props.name", props.name);

  return (
    <div>
      <Popover
        open={openDetailPopover}
        anchorEl={anchorElDetail}
        onClose={() => {
          setAnchorElDetail(null);
        }}
        PaperProps={{
          style: {
            borderRadius: 20,
            padding: 10,
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Grid
          container
          direction="row"
          alignItems="flex-start"
          style={{
            minHeight: 100,
            paddingInline: 15,
            paddingTop: 15,
            maxWidth: 300,
          }}
        >
          <Grid item md={1} xs={1}>
            <img
              src={props.profilePic || ProfilePic}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            ></img>
          </Grid>
          <Grid item md={10} xs={10}>
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
          <Grid item md={12} xs={12}>
            <Grid container direction="row">
              <Link href={props.userName || "/AenUmair"}>
                <Grid container direction="row" style={{ cursor: "pointer" }}>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 13,
                      fontWeight: "bolder",
                    }}
                  >
                    {props.name}{" "}
                  </p>{" "}
                  <CheckCircleIcon
                    style={{ color: "#1da1f2", fontSize: 16, marginTop: 3 }}
                  ></CheckCircleIcon>
                </Grid>
              </Link>

              <p
                style={{
                  margin: 0,
                  width: "100%",
                  color: "#5b7083",
                  fontSize: 13,
                  fontWeight: 500,
                }}
              >
                @{props.userName}
              </p>
              <p
                style={{
                  margin: 0,
                  width: 200,
                  fontSize: 12,
                  fontWeight: 600,
                  marginTop: 10,
                }}
              >
                {props.description ||
                  "Founder And Developer of Alif Programing Language"}
              </p>
              <p
                style={{
                  margin: 0,
                  width: 200,
                  fontSize: 12,
                  fontWeight: 500,
                  marginTop: 10,
                }}
              >
                <strong style={{ marginRight: 5 }}>{props.following}1</strong>{" "}
                Following
                <strong style={{ marginRight: 5, marginLeft: 7 }}>
                  {props.followers}
                </strong>
                Followers
              </p>
              <p
                style={{
                  margin: 0,
                  width: "100%",
                  color: "#5b7083",
                  fontSize: 13,
                  fontWeight: 500,
                  marginTop: 5,
                }}
              >
                Not followed by anyone you are following
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Popover>
      <Link href={props.userName || "/AenUmair"}>
        <Grid container direction="row" style={{ cursor: "pointer" }}>
          <p
            style={{
              margin: 0,
              marginLeft: 20,
              fontSize: 15,
              fontWeight: "bolder",
            }}
            onMouseOver={(e) => {
              setAnchorElDetail(e.currentTarget);
              localStorage.setItem("name", props.name);
              setTimeout(() => {
                setAnchorElDetail(null);
              }, 3000);
            }}
          >
            {props.name}
          </p>{" "}
          <CheckCircleIcon
            style={{ color: "#1da1f2", fontSize: 13, marginTop: 3 }}
          ></CheckCircleIcon>
        </Grid>
      </Link>
    </div>
  );
}
