import React, { useState, useEffect } from "react"

import Loading from "./Data/Components/Loading"
import ApiKeys from "./API/ApiKeys"

import MainNavigation from "./Navigation/MainNavigation"
import RootNavigation from "./Navigation/RootNavigation"
import AuthContextProvider from "./Data/Context/AuthContext";

import * as firebase from "firebase"

export default function App() {

  const [isLoading, setIsLoading] = useState(false);

  const [isAuthenticationReady, setIsAuthenticationReady] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [skipFirebase, setSkipFirebase] = useState(false);


  useEffect(() => {
    if (!skipFirebase) {
      if (!firebase.apps.length) {
        firebase.initializeApp(ApiKeys.FirebaseConfig)
      }
      firebase.auth().onAuthStateChanged(onAuthStateChanged);
    }
  }, [])


  const onAuthStateChanged = async (user) => {
    console.log("Hio")
    setIsAuthenticationReady(true)
    setIsAuthenticated(!!user)

    if (user === null) {
      await localStorage.removeItem("User");

    }
  }







  if (skipFirebase) {
    return (
      <AuthContextProvider>
        <Loading />
      </AuthContextProvider>
    )
  } else {
    if (isAuthenticationReady && !isLoading) {

      if (isAuthenticated === true) {
        return (
          <AuthContextProvider>
            <MainNavigation />
          </AuthContextProvider>
        )
      } else {
        return (
          <AuthContextProvider>
            <RootNavigation />
          </AuthContextProvider>
        )
      }
    } else {
      return (
        <Loading />
      )
    }
  }

  /*
    if (isLoading || !isAuthenticationReady) {
      return (
        <Loading />
      )
    }
    else {
      if (isAuthenticated || skipFirebase) {
        return (
          <AuthContextProvider>
            <MainNavigation />
          </AuthContextProvider>
        )
      } else {
        return (
          <AuthContextProvider>
            <RootNavigation />
          </AuthContextProvider>
        )
      }
    }
  */

}