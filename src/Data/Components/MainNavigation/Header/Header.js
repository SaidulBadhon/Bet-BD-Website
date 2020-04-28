import React, { Fragment, useContext, useState } from "react";
import "./Header.css";

import { Typography, Button } from "@material-ui/core";

import { BrowserRouter as Router, Link } from "react-router-dom";

import logo from "../../../../Assets/Logo/LOGOCOLOR.png";

import * as firebase from "firebase"

import { AuthContext } from "../../../Context/AuthContext"

import HeaderProfileMenu from "./Components/HeaderProfileMenu"

const Header = (props) => {

  const authContext = useContext(AuthContext)

  const [showHeaderProfileMenu, setHeaderProfileMenu] = useState()

  const ProfileMenuButtonHandler = () => {
    setHeaderProfileMenu(!showHeaderProfileMenu)
    console.log("HI")
  }

  return (
    <Fragment>
      <div className="MainHeader">

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


            <Link style={{ textDecoration: "none", color: "#444" }} className="Link" to="/Dashboard"><Button><h4 style={{ padding: 0, margin: 0 }}>Dashboard</h4></Button></Link>

            <Link style={{ textDecoration: "none", color: "#444" }} className="Link" to="/AddMoney"><Button><h4 style={{ padding: 0, margin: 0 }}>Add Money</h4></Button></Link>

            <Link style={{ textDecoration: "none", color: "#444" }} className="Link" to="/Withdraw"><Button><h4 style={{ padding: 0, margin: 0 }}>Withdraw</h4></Button></Link>

            <Link style={{ textDecoration: "none", color: "#444" }} className="Link" to="/Blog"><Button><h4 style={{ padding: 0, margin: 0 }}>Blog</h4></Button></Link>

            <Link style={{ textDecoration: "none", color: "#444" }} className="Link" to="/About"><Button><h4 style={{ padding: 0, margin: 0 }}>About</h4></Button></Link>


            {/*<Button onClick={() => { firebase.auth().signOut() }}>Log out</Button>*/}
          </div>
        </div>

        <div className="Profile" onClick={ProfileMenuButtonHandler}>
          <div className="UserData" >
            <div className="UserName">
              <Typography variant="subtitle2">{authContext.userName}</Typography>
            </div>

            <div className="UserBalance">
              <Typography variant="subtitle2">
                {authContext.balance} ৳
                </Typography>
            </div>
          </div>

          <div className="UserLogo">
            <img src="https://i.imgur.com/dPFXOKH.jpg" />
          </div>

          {showHeaderProfileMenu ? <HeaderProfileMenu /> : <div></div>}
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
