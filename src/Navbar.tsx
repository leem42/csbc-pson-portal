import { Link } from 'react-router-dom'
import * as React from 'react'

// tslint:disable-next-line:function-name
export function Navbar() {

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)

  function toggleDropdown(_event: any) {
    setIsDropdownOpen(!isDropdownOpen)
  }

  // given the hash, decide if the link should have a bottom border
  const getBorder = (path: string) => {
    if (path === '') {
      // special case the home page
      return window.location.hash === '/#'
    }
    const hash = window.location.hash.substring(2)
    return hash.includes(path) ? 'bottom-border' : ''
  }

  const goToTop = (_event:any) => { window.scroll({ top: 0 }) }
  return (
    <React.Fragment>
      <nav className="flex-display nav">
        {
          isDropdownOpen
          &&
          <span onClick={toggleDropdown} className="menu-wall hand-cursor"/>
        }
        <div className="center-content nav-logo-container">
          <Link onClick={goToTop} to="/" id="home-link"> CSBC / PS-ON </Link>
        </div>
        <div className="nav-link-container">
          {/*
            TODO: Add these back in if completed
          */}
          {/* <div className={`dropdown quarter-flex-basis ${isDropdownOpen ? 'open' : ''} ${getBorder('Explore')}`}>
            <div onClick={toggleDropdown} className="center-content nav-button hand-cursor"> Explore </div>
            {isDropdownOpen
              &&
              <div className="dropdown-menu">
                <Link
                  onClick={toggleDropdown}
                  className="dropdown-link SRC-primary-background-color-hover SRC-nested-color center-content"
                  to="/Explore/Grants"
                >
                  Grants
                </Link>
                <Link
                  onClick={toggleDropdown}
                  className="dropdown-link SRC-primary-background-color-hover SRC-nested-color center-content"
                  to="/Explore/Publications"
                >
                  Publications
                </Link>
                <Link
                  onClick={toggleDropdown}
                  className="dropdown-link SRC-primary-background-color-hover SRC-nested-color center-content"
                  to="/Explore/Studies"
                >
                  Studies
                </Link>
                <Link
                  onClick={toggleDropdown}
                  className="dropdown-link SRC-primary-background-color-hover SRC-nested-color center-content"
                  to="/Explore/Data"
                >
                  Data
                </Link>
                <Link
                  onClick={toggleDropdown}
                  className="dropdown-link SRC-primary-background-color-hover SRC-nested-color center-content"
                  to="/Explore/Data"
                >
                  Data Files
                </Link>
                <Link
                  onClick={toggleDropdown}
                  className="dropdown-link SRC-primary-background-color-hover SRC-nested-color center-content"
                  to="/Explore/Tools"
                >
                  Tools
                </Link>
              </div>
            }
          </div> */}
          {/* <Link className={`center-content quarter-flex-basis nav-button ${getBorder('Programs')}`} to="/Programs"> Programs </Link> */}
          <Link className={`center-content nav-button ${getBorder('About')}`} to="/About"> About </Link>
          <Link className={`center-content nav-button ${getBorder('')}`} to="/"> Home </Link>
        </div>
      </nav>
      <div className="spacer"/>
    </React.Fragment>
  )
}
