import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Login from "../components/Login"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Card from "../components/Card"
import PrivateRoute from "../components/PrivateRoute"
import Lineup from "../components/Lineup"
import Home from "../components/Home"

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/home" component={Home} />
      <PrivateRoute path="/app/lineup" component={Lineup} />
      <PrivateRoute path="/app/card/${data}" component={Card} />
      <PrivateRoute path="/app/header" component={Header} />
      <PrivateRoute path="/app/footer" component={Footer} />
      <PrivateRoute path="/app/home/:id" component={Card} />

      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App
