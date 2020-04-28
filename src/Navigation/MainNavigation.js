import React, { Fragment, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import Header from "../Data/Components/MainNavigation/Header/Header";

import Home from "../Data/Pages/MainNavigation/Home/Home"
import Dashboard from "../Data/Pages/MainNavigation/Dashboard/Dashboard"
import AddMoney from "../Data/Pages/MainNavigation/AddMoney/AddMoney"
import Withdraw from "../Data/Pages/MainNavigation/Withdraw/Withdraw"


import Footer from "../Data/Components/DefaultNavigation/Footer/Footer";
import Blog from "../Data/Pages/DefaultNavigation/Blog/Blog"
import About from "../Data/Pages/DefaultNavigation/About/About"
import PageNotFound from "../Data/Pages/DefaultNavigation/PageNotFound/PageNotFound"

export default function MainNavigation() {
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
                    <Route exact path="/Dashboard" component={() => <Dashboard />} />
                    <Route exact path="/AddMoney" component={() => <AddMoney />} />
                    <Route exact path="/Withdraw" component={() => <Withdraw />} />


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
