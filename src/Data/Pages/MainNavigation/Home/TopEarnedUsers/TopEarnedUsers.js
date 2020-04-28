import React from "react"

import "./TopEarnedUsers.css"

import UserData from "./UserData"

function TopEarnedUsers() {

    function between(min, max) {
        return Math.floor(
            Math.random() * (max - min) + min
        )
    }


    return (
        <div className="TopEarnedUsers">
            <div className="Header">
                <h3>Top 10 Earned Users from last 24 hour :</h3>
            </div>

            <div className="TopEarnedUsers-Body">
                <div className="Table">

                    <div className="Table-Header">
                        <h3>Name</h3>
                        <h3>Team</h3>
                        <h3>Betted Amount (TK)</h3>
                        <h3>Earned Amount (TK)</h3>
                        <h3>Data</h3>
                    </div>

                    <div className="Table-Data1">
                        <div>
                            <div className="UserAvatar">
                                <img src="https://i.imgur.com/dPFXOKH.jpg" />

                                <h5>Saidul Badhon</h5>
                            </div>
                        </div>

                        <h6>Bangladesh</h6>
                        <h6> {between(2000, 2500)}.00 BDT</h6>
                        <h6>{between(4000, 5000)}.00 BDT</h6>
                        <h6>11/04/2020</h6>
                    </div>

                    <div className="Table-Data2">
                        <UserData />

                        <h6>India</h6>
                        <h6> {between(4000, 5000)}.00 BDT</h6>
                        <h6>{between(8000, 10000)}.00 BDT</h6>
                        <h6>11/04/2020</h6>
                    </div>

                    <div className="Table-Data1">

                        <UserData />

                        <h6>Australia</h6>
                        <h6>{between(5000, 7500)}.00 BDT</h6>
                        <h6>{between(10000, 15000)}.00 BDT</h6>
                        <h6>11/04/2020</h6>
                    </div>
                    <div className="Table-Data2">
                        <UserData />

                        <h6>England</h6>
                        <h6> {between(4000, 5000)}.00 BDT</h6>
                        <h6>{between(8000, 10000)}.00 BDT</h6>
                        <h6>11/04/2020</h6>
                    </div>

                    <div className="Table-Data1">

                        <UserData />

                        <h6>Pakistan</h6>
                        <h6>{between(5000, 7500)}.00 BDT</h6>
                        <h6>{between(10000, 15000)}.00 BDT</h6>
                        <h6>11/04/2020</h6>
                    </div>

                </div>

            </div>
        </div >
    )
}

export default TopEarnedUsers