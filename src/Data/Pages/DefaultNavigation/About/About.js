import React, { useState, Fragment } from "react"
import "./About.css"

import Section1Img from "../../../../Assets/AboutPage/Invest.svg"
import Section2Img from "../../../../Assets/AboutPage/Printing_Money.svg"
import Section3Img from "../../../../Assets/AboutPage/SportsWatching.svg"
import Section4Img from "../../../../Assets/AboutPage/Wallet.svg"
import Section5Img from "../../../../Assets/AboutPage/ContuctUs.svg"

import Loading from "../../../../Data/Components/Loading"

function About() {
  const [loaded, setLoaded] = useState(true);

  return (
    <Fragment>
      {loaded ? <Loading /> : <div />}
      <div className="About">
        <div className="Contener">
          <div className="MainSection">
            <b></b>
            <h1>Bet BD - Biggest Gambling site in Bangladesh</h1>
          </div>

          <div className="Sections">
            <div className="Section1">
              <div>
                <h5> Bet BD is an Betting and Gambling site founded by Saidul Badhon & <a href="https://TechSecBD.com">TechSecBD Inc</a> in 2020.</h5>
                <p>
                  <b></b>
                  Bet BD offers a great selection of betting opportunities not only on sporting events but also on TV games. The Bet BD Forum offers various types of competitions every month.
                  We also hold the "Betting Cup" annual tournament for the most active online users. Get lucky with BetBD!
              </p>
              </div>
              <img src={Section1Img} alt="Section 1 Image" onLoad={() => { setLoaded(false) }} />
            </div>

            <div className="Section2">

              <img src={Section2Img} alt="Section 2 Image" />

              <p>
                <h2>TYPES OF BETS</h2>
                  Bet BD offers types of bets such as singles, accumulators, system and chain bets.
                  <b></b>

                  We offer many additional markets on specific events: European handicap, correct score, run of play, <br></br> over / under, team to score first etc.
                  We also have a great selection of markets on international games on a club and country level.
                  <b></b>
                  In individual sports such as cycling, golf, athletics, skiing etc, apart from outright betting, we also offer head-to-heads on two selected athletes at all times.

                  <b></b>
                <h4>We offer you enhanced odds and increased stake amounts on all those matches!</h4>
              </p>


            </div>


            <div className="Section3">

              <p>
                <h2>LIVE BETS</h2>
                Live bets are available 24 hours a day.
                For most sports, more than 30 markets <br></br>are offered for each event,
                including bets on corners, yellow cards, free kicks etc.

                <b></b>

                <h2>SPORTS</h2>
                Our Sportsbook includes over 1,000 events daily. <b style={{ marginTop: 5 }}></b>
                You can bet on a variety of popular sports: football, tennis, basketball, volleyball, ice hockey, golf, <br></br>boxing, handball, American football, hockey, baseball, table tennis, biathlon, Aussie rules and bandy.
                <b style={{ marginTop: 10 }} ></b>
                 We also offer bets on cricket, snooker, Formula 1, cycling, ski jumping, curling, floorball, inline hockey and water polo. With Bet BD, you can bet on more than 1,000 sporting events every day.



              </p>

              <img src={Section3Img} alt="Section 3 Image" />

            </div>

            <div className="Section4">

              <img src={Section4Img} alt="Section 4 Image" />


              <p>
                <h2>DEPOSIT / WITHDRAWAL</h2>

                You can top up your account at Bet BD betting shops. We also accept e-payments via WebMoney, Qiwi and others.

                Winnings are paid out through the same method that was used to make a deposit.



                  </p>


            </div>




            <div className="Section5">

              <p>
                <h2>SUPPORT</h2>

                  Bet BD provides 24-hour customer support on the following number +8801620861542. We also have an Online Consultant service.
                  Alternatively, you can get in touch with Bet BD by email. Our contact details can be found in the Contacts section.



              </p>

              <img src={Section5Img} alt="Section 3 Image" />
            </div>

          </div>
        </div>
      </div>
      <div className="AboutBeg1"></div>
      <div className="AboutBeg2"></div>
    </Fragment >
  )
}

export default About
