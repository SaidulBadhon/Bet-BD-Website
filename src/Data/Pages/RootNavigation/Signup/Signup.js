import React, { useState, Fragment } from "react"
import "./Signup.css";

import { Button, TextField, Typography } from "@material-ui/core/";

import img from "../../../../Assets/AuthPage/Signup.svg"
import Loading from "../../../../Data/Components/Loading"


const Signup = (props) => {
  const OnSubmit = (gol) => {
    console.log("GOL " + gol)
  }
  const [loaded, setLoaded] = useState(true);

  return (
    <Fragment>
      {loaded ? <Loading /> : <div />}

      <div className="SingUpForm">
        <div className="SingUpImage">
          <img src={img} alt="back" onLoad={() => { setLoaded(false) }} />
        </div>
        <div className="BaseContainer">
          <div className="content">

            <h1>Signup</h1>


            <form onSubmit={OnSubmit}>


              <div className="FormFields">

                <div className="FirstAndLastName">
                  <TextField
                    className="TextField"

                    variant="outlined"
                    margin="normal"
                    required
                    id="firstname"
                    label="First Name"
                    name="firstname"
                    autoComplete="firstname" style={{ backgroundColor: "#fff" }}
                  />

                  <TextField
                    className="TextField"
                    variant="outlined"
                    margin="normal"
                    required
                    id="lastname"
                    label="Last Name"
                    name="lastname"
                    autoComplete="lastname" style={{ backgroundColor: "#fff" }}
                  />
                </div>

                <TextField
                  className="TextField"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  name="username"
                  autoComplete="username" style={{ backgroundColor: "#fff" }}
                />


                <TextField
                  className="TextField"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="number"
                  label="Phone Nummber" style={{ backgroundColor: "#fff" }}
                  name="number"
                  autoComplete="number"
                />

                <TextField
                  className="TextField"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email" style={{ backgroundColor: "#fff" }}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />

                <TextField
                  className="TextField"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  name="password" style={{ backgroundColor: "#fff" }}
                  autoComplete="password"
                />

                <TextField
                  className="TextField"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="confirmpassword"
                  label="Confirm Password" style={{ backgroundColor: "#fff" }}
                  name="confirmpassword"
                  autoComplete="confirmpassword"
                />

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
                className="FormButton"
                type="submit"

                variant="contained"
                color="secondary" >
                Register
              </Button>
            </form>
          </div>

        </div>
      </div>
    </Fragment>
  )
}

export default Signup
