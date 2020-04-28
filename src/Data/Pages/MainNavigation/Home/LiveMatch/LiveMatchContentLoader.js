import React, { Fragment, useState } from "react";
import "./LiveMatch.css";

import BetNow from "../BetNow/BetNow.js";

import { Typography, Button } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faClock,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

const LiveMatchContentLoader = (props) => {
  const [isAddMode, setIsAddMode] = useState(false);

  const BetNowButtonHandler = () => {
    setIsAddMode(true);
  };

  const HideBetNow = () => {
    setIsAddMode(false);
  };

  return (
    <Fragment>

      <BetNow
        visible={isAddMode}
        HideBetNow={HideBetNow}
        background={props.item.backgroundImg}
        team1Img={props.item.team1Img}
        team1Name={props.item.team1Name}
        team2Img={props.item.team2Img}
        team2Name={props.item.team2Name}

        date={props.item.date}
        time={props.item.time}
        liveState={props.item.liveState}
        isLive={props.item.isLive}

        curBalance={props.curBalance}
        updateCurBalance={props.updateCurBalance}
      />

      <div className="Contener-Box">
        <div className="Image">
          <img className="backgroundImg" src={props.item.backgroundImg} />

          <div className="TeamsVersus">
            <div className="Team1">
              <img
                style={{ width: "75px", height: "75px", maxHeight: "75px" }}
                src={props.item.team1Img}
              />

              <Typography className="TeamNameText" variant="subtitle2">
                {props.item.team1Name}
              </Typography>
            </div>

            <div className="vs">
              <Typography
                variant="h3"
                className="title"
                style={{
                  fontWeight: 500,
                  color: "rgba(256,256,256, .5)",
                  marginTop: "25px",
                }}
              >
                vs
              </Typography>
            </div>
            <div className="Team2">
              <img
                style={{ width: "75px", height: "75px", maxHeight: "75px" }}
                src={props.item.team2Img}
              />
              <Typography className="TeamNameText" variant="subtitle2">
                {props.item.team2Name}
              </Typography>
            </div>
          </div>
        </div>

        <div className="Data">
          <Typography variant="subtitle2">
            <FontAwesomeIcon
              style={{ color: "rgba(50, 50, 50, 1)" }}
              icon={faCalendarAlt}
            />
            &nbsp; {props.item.date}&nbsp;&nbsp;
            <FontAwesomeIcon
              style={{ color: "rgba(50, 50, 50, 1)" }}
              icon={faClock}
            />{" "}
            {props.item.time}&nbsp;&nbsp;&nbsp;&nbsp;
            {props.item.isLive ? (
              <FontAwesomeIcon
                style={{ color: "rgba(20, 220, 00, 1)" }}
                size="xs"
                icon={faCircle}
              />
            ) : (
                <FontAwesomeIcon
                  style={{ color: "rgba(220, 20, 00, 1)" }}
                  size="xs"
                  icon={faCircle}
                />
              )}{" "}
            {props.item.liveState}
          </Typography>

          {props.item.isLive ? (
            <Button variant="contained" onClick={BetNowButtonHandler}>
              Bet Now !
            </Button>
          ) : (
              <Button disabled="true" variant="contained">
                Bet Now !
              </Button>
            )}
        </div>
      </div>


    </Fragment>
  );
};

export default LiveMatchContentLoader;
