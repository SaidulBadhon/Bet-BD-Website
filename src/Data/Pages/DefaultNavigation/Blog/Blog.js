import React, { useState } from "react"
import "./Blog.css"
import { Button } from "@material-ui/core";
import background from "../../../../Assets/BlogPage/background.svg"

import Virus from "../../../../Assets/BlogPage/Posts/CoronaUpdate/Virus3.svg"

import Loading from "../../../../Data/Components/Loading"

function Blog() {
  const [loaded, setLoaded] = useState(true);

  return (
    <div className="Blog">
      {loaded ? <Loading /> : <div />}

      <div className="Contener">
        <div className="Header">
          <img src={background} alt="Blog Background" onLoad={() => { setLoaded(false) }} />
          <div className="HeaderText">
            <h1>Bet BD</h1>
            <h2>Biggest betting sites in Bangladesh...</h2>
            <Button onClick={() => window.location.replace("#Body")}><h4>Daily News</h4></Button>
          </div>
          <div className="HeaderBottomBar" />
        </div>

        <div id="Body">
          <div className="Body">

            <div className="BlogPost" style={{ backgroundColor: "#333eb3", height: 200 }}>
              <div className="PostHeader" >
                <div className="PostImage" style={{ backgroundColor: "#8b96fe" }}>
                  <img width={25} height={25} src={Virus} alt="Logo" />
                </div>
                <h3>Coronavirus disease (COVID-19) update.</h3>
              </div>
              <div className="PostBody" >
                <h4>On this website you can find information and guidance from WHO regarding the current outbreak of coronavirus disease (COVID-19) that was first reported from Wuhan, China, on 31 December 2019. Please visit this page for daily updates.</h4>
              </div>
            </div>

            <div className="BlogPost" style={{ backgroundColor: "#f55859", height: 240 }}>
              <div className="PostHeader" >
                <div className="PostImage" style={{ backgroundColor: "#fd9fa2" }}>
                  <img width={25} height={25} src={Virus} alt="Logo" />
                </div>
                <h3 style={{ color: "#fff" }}>Grand National cancellation to cost <br />bookmakers more than £100m.</h3>
              </div>
              <div className="PostBody" >
                <h4 style={{ color: "#fff" }}>With the Grand National cancelled for the first time since the Second World War, bookmakers are expected to make devastating losses over the coming weeks, with Monday’s decision to run horseracing meets behind closed doors almost certain to be reviewed immediately following the British government’s change in stance on coronavirus.</h4>
              </div>
            </div>




            <div className="BlogPost" style={{ backgroundColor: "#f55859", height: 215, marginTop: -30 }}>
              <div className="PostHeader" >
                <div className="PostImage" style={{ backgroundColor: "#fd9fa2" }}>
                  <img width={25} height={25} src={Virus} alt="Logo" />
                </div>
                <h3 style={{ color: "#fff" }}>Gambling firms pledge to halt TV and radio advertising during lockdown.</h3>
              </div>
              <div className="PostBody" >
                <h4 style={{ color: "#fff" }}>The BGC, which represents betting shops, online betting and gaming, bingo and casinos, said existing TV and radio advertising slots will be replaced by safer gambling messages, donated to charities or removed from broadcast where contracts allow.</h4>
              </div>
            </div>





            <div className="BlogPost" style={{ backgroundColor: "#333eb3", height: 200, marginTop: 15 }}>
              <div className="PostHeader" >
                <div className="PostImage" style={{ backgroundColor: "#8b96fe" }}>
                  <img width={25} height={25} src={Virus} alt="Logo" />
                </div>
                <h3>Why Labour might be right with its call for new gambling regulations.</h3>
              </div>
              <div className="PostBody" >
                <h4 >We need to ask whether the costs of liberalisation that the industry has benefited handsomely from are now outweighing the benefits. It would help if the two main parties could reach a consensus about that rather than trading jabs.</h4>
              </div>
            </div>



          </div>
        </div>

      </div>
    </div>
  )
}

export default Blog
