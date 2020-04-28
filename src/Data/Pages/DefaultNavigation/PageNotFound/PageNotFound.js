import React, { useEffect } from "react"
import "./PageNotFound.css"

import Page404 from "../../../../Assets/PageNotFound/404Page.svg"

import { Button } from '@material-ui/core';



const PageNotFound = (props) => {

  useEffect(() => {
    props.PageNotFoundHandler();
  })

  return (
    <div className="NotFoundBody">
      <div className="Image">
        <img src={Page404} alt="404 Background" />
      </div>
      <div className="Button">
        <Button
          onClick={() => {
            window.location.replace("/");
          }}
        >
          Return Home
          </Button>
      </div>
    </div>

  )
}

export default PageNotFound
