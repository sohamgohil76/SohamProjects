
import React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import "./header.style.css"


function logout() {
  window.localStorage.clear();
  navigate('/app/login')
}

export default function Header() {
  return (

    <div class="wrapper">

      <div class="main">
        <div class="heading">
          <h1>LOGO</h1>
        </div>
        <div class="navbar">
          <Link to="/app/lineup" id="link">LineuP</Link>
          <Link to="/" id="link">Experience</Link>
          <Link to="/" id="link">Plan Your Journey</Link>
          <Link to="/" class="active">Buy Tickets</Link>
          <Link to="/app/login" id="link" onClick={logout}>Log Out</Link>
        </div>

      </div>

    </div>
  )
}
