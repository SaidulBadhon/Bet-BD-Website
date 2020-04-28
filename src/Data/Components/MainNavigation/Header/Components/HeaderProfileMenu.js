import React, { useState } from 'react'
import { Typography, Button } from "@material-ui/core";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./HeaderProfileMenu.css"
import * as firebase from "firebase"

import { animated, useSpring } from "react-spring"


export default function HeaderProfileMenu() {
    const [fade, setFade] = useState(false)

    const fadeAnim = useSpring({
        from: {
            opacity: 0.01,
            transform: "translate3d(0,0,0)"

        },
        to: {
            opacity: 1,
            transform: "translate3d(0,-25px,0)"
        }

    })

    return (
        <animated.div className="HeaderProfileMenu" style={fadeAnim}>
            <div className="Container">

                <Button><h4 style={{ padding: 0, margin: 0 }}>profile</h4></Button>
                <Button><h4 style={{ padding: 0, margin: 0 }}>Add Money</h4></Button>
                <Button><h4 style={{ padding: 0, margin: 0 }} onClick={() => { firebase.auth().signOut() }} >LogOut</h4></Button>

            </div>
        </animated.div>
    )
}
