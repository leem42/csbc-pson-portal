import { Link } from 'react-router-dom'
import * as React from 'react'

// tslint:disable-next-line:function-name
export function Navbar() {

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)

  function toggleDropdown(_event: any) {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const getBorder = (path: string) => {
    const hash = window.location.hash.substring(2)
    return hash.includes(path) ? 'bottom-border' : ''
  }

  return (
    <div className="flex-display nav">
      <div className="center-content nav-logo-container">
        <Link to="/" id="home-link"> CSBC / PS-ON </Link>
      </div>
      <div className="center-content nav-link-container">
        <Link className={`center-content quarter-flex-basis nav-button ${getBorder('Home')}`} to="/Home"> Home </Link>
        <div className={`dropdown quarter-flex-basis ${isDropdownOpen ? 'open' : ''} ${getBorder('Explore')}`}>
          <Link onClick={toggleDropdown} className="center-content nav-button" to="/Explore"> Explore </Link>
          {isDropdownOpen
            &&
            <div className="dropdown-menu">
              <Link
                className="dropdown-link SRC-primary-background-color-hover SRC-nested-color center-content"
                to="/Explore/Grants"
              >
                Grants
              </Link>
              <Link
                className="dropdown-link SRC-primary-background-color-hover SRC-nested-color center-content"
                to="/Explore/Studies"
              >
                Studies
              </Link>
              <Link
                className="dropdown-link SRC-primary-background-color-hover SRC-nested-color center-content"
                to="/Explore/Publications"
              >
                Publications
              </Link>
              <Link
                className="dropdown-link SRC-primary-background-color-hover SRC-nested-color center-content"
                to="/Explore/Datasets"
              >
                Datasets
              </Link>
              <Link
                className="dropdown-link SRC-primary-background-color-hover SRC-nested-color center-content"
                to="/Explore/Data"
              >
                Data Files
              </Link>
              <Link
                className="dropdown-link SRC-primary-background-color-hover SRC-nested-color center-content"
                to="/Explore/Tools"
              >
                Tools
              </Link>
            </div>
          }
        </div>
        <Link className={`center-content quarter-flex-basis nav-button ${getBorder('Programs')}`} to="/Programs"> Programs </Link>
        <Link className={`center-content quarter-flex-basis nav-button ${getBorder('About')}`} to="/About"> About </Link>
      </div>
    </div>
  )
}
