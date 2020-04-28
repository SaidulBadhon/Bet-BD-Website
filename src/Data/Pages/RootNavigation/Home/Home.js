import React, { Fragment } from 'react'
import "./Home.css"
import { } from "@material-ui/core/"
import TopBackground from "../../../../Assets/HomePage/TopBackground.svg"

export default function Home() {
    return (
        <Fragment>
            <div className="HomeContainer">
                <div className="LeftContainer">
                    <h3>Welcome to</h3>
                    <h1>Bet BD</h1>


                    <h2>Biggest betting site in Bangladesh</h2>
                </div>

                <div className="RightContainer">
                    <img src={TopBackground} alt="Right Side Image" />
                </div>
            </div>
        </Fragment>
    )
}
