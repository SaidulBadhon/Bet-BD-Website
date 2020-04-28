import React, { useState, Fragment, useEffect } from "react"
import "./LogIn.css";

import { Button, TextField, Typography } from "@material-ui/core/";

import LoginSVG from "../../../../Assets/AuthPage/Login.svg"

import * as firebase from "firebase"

import Loading from "../../../../Data/Components/Loading"

const Login = (props) => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const OnLoginPress = (element) => {
    element.preventDefault();

    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      window.location.replace("/");
    }, (error) => {
      alert(error.message)
    })
  }
  const [loaded, setLoaded] = useState(true);


  return (
    <Fragment >
      {loaded ? <Loading /> : <div />}

      <div className="LogInForm">
        <div className="LoginImage">
          <img src={LoginSVG} alt="back" onLoad={() => { setLoaded(false) }} />
        </div>

        <div className="BaseContainer">
          <div className="content">
            <h1>Login</h1>


            <form onSubmit={OnLoginPress}>

              <div className="FormFields">

                <TextField
                  className="TextField"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={event => { const { value } = event.target; setEmail(value) }}
                  style={{ backgroundColor: "#fff" }}
                />

                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={event => { const { value } = event.target; setPassword(value) }}

                  style={{ backgroundColor: "#fff" }}

                />

              </div>

              <div className="RememberMe-Text">
                <input type="checkbox" id="Remember" name="Remember" value="Remember" />
                <label className="RememberMe-Lable" for="Remember"><h6>Remember Me</h6> </label><br></br>
              </div>

              <div className="Ref-Text">
                <h6> Already habe an account ? <a className="Ref-Text-A" href="/Login">Click Here !</a></h6>
              </div>

              <Button
                className="FormButton"
                style={{
                  height: "40px",
                  width: "100%",
                  borderRadius: "10px",
                }}
                type="submit"

                variant="contained"

                color="secondary" >
                Log In
              </Button>
            </form>
          </div>

        </div>
      </div>
    </Fragment >
  )
}

export default Login
