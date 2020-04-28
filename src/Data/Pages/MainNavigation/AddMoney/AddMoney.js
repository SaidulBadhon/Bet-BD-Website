import React, { useState, useContext } from 'react'
import "./AddMoney.css"
import { AuthContext } from "../../../Context/AuthContext"
import { Button } from "@material-ui/core"
import { animated, useSpring } from "react-spring"

import bkashPersonal from "../../../../Assets/AddBalance/PaymentMethodLogos/bKashPresonal.png"
import bkashPayment from "../../../../Assets/AddBalance/PaymentMethodLogos/bKashPayment.png"
import DBBLRocket from "../../../../Assets/AddBalance/PaymentMethodLogos/DBBLRocket.svg"
import Nexuspay from "../../../../Assets/AddBalance/PaymentMethodLogos/Nexuspay.png"
import Nogod from "../../../../Assets/AddBalance/PaymentMethodLogos/Nogod.svg"

import loadingIcon from "../../../../Assets/Loading.png"



export default function AddMoney() {
    const authContext = useContext(AuthContext)

    const [paymentMethod, setPaymentMethod] = useState(false)

    const [ammount, setAmmount] = useState()
    const [rechargeError, setRrechargeError] = useState(false)
    const [showRrechargeInfo, setShowRrechargeInfo] = useState(false)

    const fadeAnim = useSpring({
        opacity: showRrechargeInfo ? 1 : 0,
        transform: showRrechargeInfo ? "translate3d(0,0,0)" : "translate3d(0,-25px,0)"
    })


    const [showLoadingAnim, setLoadingAnim] = useState(false)

    const LoadingAnimHandler = () => {
        setLoadingAnim(true)
        setTimeout(() => {
            rechargeButtonHandler()
            setLoadingAnim(false)
        }, 4000);
    }


    const paymentMethodSelecterAnim = useSpring({
        opacity: paymentMethod ? 1 : 0,
        transform: paymentMethod ? "translate3d(0,0,0)" : "translate3d(0,-50px,0)",
    })

    const paymentMethodSelecterHandler = () => {
        setPaymentMethod(!paymentMethod)
    }



    const rechargeButtonHandler = () => {
        setShowRrechargeInfo(true)

        if (ammount == 0 || ammount == "" || ammount == null) {
            setRrechargeError(true)
            setTimeout(() => {
                setShowRrechargeInfo(false)
            }, 2000);
        } else {
            authContext.AdjustBalance(parseInt(ammount))


            setRrechargeError(false)

            setAmmount("");

            setTimeout(() => {
                setShowRrechargeInfo(false)
            }, 2000);

        }
    }

    return (
        <div className="AddMoney">
            {/*<div className="Page-Header">
                <h3 style={{ fontWeight: 700, color: "#333" }}>Add Balance</h3>
            </div>*/}

            <div className="Selecter-header">
                <h2 style={{ fontWeight: 500, color: "rgba(40,40,40,.75)" }}>Please select favorite your payment method</h2>
            </div>

            <div className="Payment">
                <div className="PaymentSelecter" onClick={paymentMethodSelecterHandler}>
                    <img src={bkashPersonal} alt="bKash Personal Logo" />
                </div>

                <div className="PaymentSelecter" onClick={paymentMethodSelecterHandler}>
                    <img src={bkashPayment} alt="bkash Payment Logo" />
                </div>

                <div className="PaymentSelecter" onClick={paymentMethodSelecterHandler}>
                    <img src={DBBLRocket} alt="DBBL Rocket Logo" />
                </div>

                <div className="PaymentSelecter" onClick={paymentMethodSelecterHandler}>
                    <img src={Nexuspay} alt="Nexuspay Logo" />
                </div>

                <div className="PaymentSelecter" onClick={paymentMethodSelecterHandler}>
                    <animated.img src={Nogod} alt="Nogod Logo" />
                </div>
            </div>


            <animated.div style={paymentMethodSelecterAnim}>
                <div className="Recharge">
                    <h2>Recharge ammount (BDT) : </h2>

                    <input className="InputField" type="number" value={ammount} onChange={event => { const { value } = event.target; setAmmount(value) }} />
                </div>
                <Button onClick={LoadingAnimHandler}>Recharge</Button>

                {showLoadingAnim ?
                    <div className="LoadingIcon">
                        <img src={loadingIcon} alt="Loading Icon" />
                    </div> : <div></div>}


                {showRrechargeInfo ?
                    (rechargeError ?

                        <animated.div style={fadeAnim}>
                            <div style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                                <h4 style={{ color: "rgb(220, 20, 60)", fontSize: ".75rem" }} >...Please enter How much you want to Recharge...</h4>
                            </div>
                        </animated.div>
                        :
                        <animated.div style={fadeAnim}>
                            <div style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                                <h4 style={{ color: "rgb(20, 220, 60)", fontSize: ".75rem" }} >...Payment Successful...</h4>
                            </div>
                        </animated.div>
                    )
                    : <div></div>}

            </animated.div>

        </div >

    )
}
