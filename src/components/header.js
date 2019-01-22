import { Link } from 'gatsby'
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div>
    <Navbar light expand="md">
      <Nav className="ml-auto" navbar>
        <NavItem>
            <Link
              to="/"
              className="nav-link">
              Resume
            </Link>
        </NavItem>
        <NavItem>
            <Link
              to="/portfolio"
              className="nav-link">
              Portfolio
            </Link>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/stephng3">
            Github
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
