import { Link } from 'react-router-dom'
import * as React from 'react'

// tslint:disable-next-line:function-name
export function Navbar() {

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)

  function toggleDropdown(_event: any) {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className="flex-display nav">
      <div className="center-content nav-logo-container">
        <Link to="/" id="home-link"> CSBC / PS-ON </Link>
      </div>
      <div className="center-content nav-link-container">
        <Link className="center-content quarter-flex-basis nav-button" to="/Home"> Home </Link>
        <div className={`dropdown quarter-flex-basis ${isDropdownOpen ? 'open' : ''}`}>
          <Link onClick={toggleDropdown} className="center-content nav-button" to="/Explore"> Explore </Link>
          {isDropdownOpen
            &&
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-link" to="/Explore/Grants"> Grants </Link>
              </li>
              <li> <Link className="dropdown-link" to="/Explore/Studies"> Studies </Link> </li>
              <li> <Link className="dropdown-link" to="/Explore/Publications"> Publications </Link> </li>
              <li> <Link className="dropdown-link" to="/Explore/Datasets"> Datasets </Link> </li>
              <li> <Link className="dropdown-link" to="/Explore/Data"> Data Files </Link> </li>
              <li> <Link className="dropdown-link" to="/Explore/Tools"> Tools </Link> </li>
            </ul>
          }
        </div>
        <Link className="center-content quarter-flex-basis nav-button" to="/Programs"> Programs </Link>
        <Link className="center-content quarter-flex-basis nav-button" to="/About"> About </Link>
      </div>
    </div>
  )
}
