import React from 'react'
import "./Loading.css"
import loading from "../../Assets/Loading3.svg"

export default function Loading() {
    return (
        <div className="Loading">
            <img src={loading} alt="loading logo" />

            {/*<h2>Loading...</h2>*/}
        </div>
    )
}