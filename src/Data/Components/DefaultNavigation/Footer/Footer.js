import React, { Component } from "react"
import "./Footer.css"


import facebookLogo from "./img/facebook.png"
import linkedInLogo from "./img/linkedIn.png"
import twitterLogo from "./img/twitter.png"

function Footer() {
  return (
    <div className="Footer">
      <div className="Contener">

        <div className="Text-Files">
          <h3>Copyright © 2020 by <a href="techsecbd.com"> Saidul Badhon</a>, All rights reserved </h3>
        </div>

        <div className="Logos">

          <div className="aButton">
            <img src={facebookLogo} alt="facebooklogo" onClick={() => window.open("https://facebook.com/SaidulBadhon", '_blank')} />
          </div>

          <div className="aButton">
            <img src={twitterLogo} alt="twitterLogo" onClick={() => window.open("https://twitter.com/SaidulBadhon1", '_blank')} />
          </div>

          <div className="aButton">
            <img src={linkedInLogo} alt="linkedInLogo" onClick={() => window.open("https://www.linkedin.com/in/saidulbadhon/", '_blank')} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
