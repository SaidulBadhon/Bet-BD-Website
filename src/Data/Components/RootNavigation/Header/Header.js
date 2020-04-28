import React, { Component, Fragment } from "react";
import "./Header.css";

import { Typography, Button } from "@material-ui/core";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from "../../../../Assets/Logo/LOGOCOLOR.png";

const Header = (props) => {
  return (
    <Fragment>
      <div className="RootHeader">

        <div className="ClickableLogo" onClick={() => { window.location.replace("/") }}>
          <div className="Logo">
            <img src={logo} />
          </div>

          <Typography variant="subtitle2" className="title" style={{ fontSize: "25px", fontWeight: 700, color: "rgba(0,0,0,.75)", paddingLeft: "10px", marginTop: -2 }}>
            Bet BD
          </Typography>
        </div>

        <div className="NavBar">
          <div className="ButtonHolder">

            <Link style={{ textDecoration: "none", color: "#444" }} className="Link" to="/"><Button><h4 style={{ padding: 0, margin: 0 }}>Home</h4></Button></Link>

            <Link style={{ textDecoration: "none", color: "#444" }} className="Link" to="/Blog"><Button><h4 style={{ padding: 0, margin: 0 }}>Blog</h4></Button></Link>

            <Link style={{ textDecoration: "none", color: "#444" }} className="Link" to="/Signup"><Button><h4 style={{ padding: 0, margin: 0 }}>Signup</h4></Button></Link>

            <Link style={{ textDecoration: "none", color: "#444" }} className="Link" to="/Login"><Button><h4 style={{ padding: 0, margin: 0 }}>Login</h4></Button></Link>

            <Link style={{ textDecoration: "none", color: "#444" }} className="Link" to="/About"><Button><h4 style={{ padding: 0, margin: 0 }}>About</h4></Button></Link>

          </div>

        </div>
      </div>

      <div className="Important-Notice" style={{ display: "none" }}>
        <marquee behavior="scroll" direction="left" scrollamount="5">
          👉 👉 Important Notice : COVID-19 Is A Danger Virus, So Please Stay
          Home. 👈 👈 &nbsp; &nbsp; Contact us : +8801620861542 &nbsp; &nbsp;
          Deposit Time : 10:00 AM to 12:00 AM. &nbsp; &nbsp; Withdraw Time :
          9:00 AM To 6:00 PM. &nbsp; &nbsp; Payment Settlement Time Minimum 3
          Hours And Maximum 24 Hours. &nbsp; &nbsp; Minimum Deposit Limit is
          300/= and Maximum Deposit Limit is 25,000/= &nbsp; &nbsp; Minimum
          Withdraw Limit is 500/= and Maximum Withdraw Limit is 10,000/= &nbsp;
          &nbsp; 👉 Thanks For Staying With Us 👈 &nbsp; &nbsp;
        </marquee>
      </div>
    </Fragment>
  );
};

export default Header;
