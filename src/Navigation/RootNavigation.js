import React, { Fragment, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"


import Header from "../Data/Components/RootNavigation/Header/Header";

import Home from "../Data/Pages/RootNavigation/Home/Home"
import Login from "../Data/Pages/RootNavigation/Login/Login"
import Signup from "../Data/Pages/RootNavigation/Signup/Signup"

import Footer from "../Data/Components/DefaultNavigation/Footer/Footer";
import Blog from "../Data/Pages/DefaultNavigation/Blog/Blog"
import About from "../Data/Pages/DefaultNavigation/About/About"
import PageNotFound from "../Data/Pages/DefaultNavigation/PageNotFound/PageNotFound"

export default function RootNavigation() {

    const [pageNotFound, setPageNotFound] = useState(false)

    const PageNotFoundHandler = () => {
        setPageNotFound(true)
    }

    return (
        <Fragment>
            <Router>
                {pageNotFound ? <Fragment></Fragment> :
                    <Header />}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/Signup" component={Signup} />
                    <Route exact path="/Blog" component={Blog} />
                    <Route exact path="/About" component={About} />
                    <Route exact path="/404" component={() => <PageNotFound PageNotFoundHandler={PageNotFoundHandler} />} />
                    <Redirect to="404" />
                </Switch>
                {pageNotFound ? <Fragment></Fragment> :
                    <Footer />}
            </Router>
        </Fragment>
    )
}
