import { Link } from 'gatsby'
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div>
    <Navbar light expand="md">
      <Nav className="ml-auto page-nav" navbar>
        <NavItem>
          <Link to="/" className="nav-link" id="resume">
            <span className="nav-content" >Resume</span>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/portfolio" className="nav-link" id="portfolio">
            <span className="nav-content" >Portfolio</span>
          </Link>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/stephng3" id="github">
            <span className="nav-content" >Github</span>
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
