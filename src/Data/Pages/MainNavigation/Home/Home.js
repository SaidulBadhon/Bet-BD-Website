import React, { Fragment } from "react";
import "./Home.css";

import Toolbar from "./Toolbar/Toolbar";
import LiveMatch from "./LiveMatch/LiveMatch";
import TopEarnedUsers from "./TopEarnedUsers/TopEarnedUsers"


function Home(props) {
  return (
    <Fragment>

      <div className="Home">
        <Toolbar />

        <div className="Home-Body">
          <LiveMatch curBalance={props.curBalance} updateCurBalance={props.updateCurBalance} />

          <TopEarnedUsers />

        </div>
      </div>
    </Fragment>
  );
}

export default Home;
