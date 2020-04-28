import React, { Fragment, useState } from "react";
import "./LiveMatch.css";

import { Typography } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";

import LiveMatchData from "./LiveMatchData.js";
import LiveMatchContentLoader from "./LiveMatchContentLoader.js";

const LiveMatch = (props) => {

  const [liveMatchs, setLiveMatchs] = useState(LiveMatchData);


  const handleChange = (id) => {
    this.setState((prevState) => {
      const updatedLiveMatchs = liveMatchs.map((liveMatch) => {
        if (liveMatch.id === id) {
          return {
            ...liveMatch,
            completed: !liveMatch.completed,
          };
        }
        return liveMatch;
      });
      return {
        liveMatchs: updatedLiveMatchs,
      };
    });
  }

  const liveMatchsUpdateBY = liveMatchs.map((item) => (
    <LiveMatchContentLoader
      key={item.id}
      item={item}
      handleChange={handleChange}
      curBalance={props.curBalance}
      updateCurBalance={props.updateCurBalance}
    />
  ));

  return (
    <Fragment>
      <div className="LiveMatch-Header">
        <FontAwesomeIcon
          icon={faRedoAlt}
          size="1x"
          color="#9fa0a2"
          style={{ marginLeft: "25px", marginTop: "2px" }}
          id="Reload-Icon"
        />
        <Typography
          variant="subtitle2"
          className="title"
          style={{
            fontSize: "14px",
            fontWeight: 500,
            color: "#9fa0a2",
            paddingLeft: "5px",
          }}
        >
          Live Matchs
          </Typography>
      </div>

      <div className="LiveMatch-Body">{liveMatchsUpdateBY}</div>
    </Fragment>
  );
}

export default LiveMatch;
