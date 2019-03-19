import { Link } from 'react-router-dom'
import * as React from 'react'

export const Navbar: React.SFC<{}> = ({}) => (
  <div className="flex-display nav">
    <div className="center-content nav-logo-container">
      <Link to="/" id="home-link"> CSBC / PS-ON </Link>
    </div>
    <div className="center-content nav-link-container">
      <Link className="center-content nav-button" to="/Home"> Home </Link>
      <Link className="center-content nav-button" to="/Explore"> Explore </Link>
      <Link className="center-content nav-button" to="/Programs"> Programs </Link>
      <Link className="center-content nav-button" to="/About"> About </Link>
    </div>
  </div>
)
