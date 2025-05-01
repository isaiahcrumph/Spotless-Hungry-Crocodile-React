/* ------------------------------------------------------------------
 *  Navbar.jsx  – desktop–first nav with responsive burger menu
 * ------------------------------------------------------------------ */

import React from 'react'
import PropTypes from 'prop-types'

import './navbar.css'
import tmLogo from '../assets/tmLogo.svg'

const Navbar = ({
  logoAlt  = 'Tony Montana Fitness Consultant',
  logoSrc  = tmLogo,
  link1    = 'Home',
  link2    = 'About',
  link3    = 'Services',
  link4    = 'Testimonials',
  link5    = 'Contact',
  action1  = 'Sign up',
  action2  = 'Log in',
}) => {
  return (
    <header className="navbar-container">
      <header data-thq="thq-navbar" className="navbar-navbar-interactive">

        {/* brand mark */}
        <img alt={logoAlt} src={logoSrc} className="navbar-image1" />

        {/* ---------- DESKTOP NAVIGATION ---------- */}
        <nav data-thq="thq-navbar-nav" className="navbar-desktop-menu">
          <span className="thq-link thq-body-small">{link1}</span>
          <span className="thq-link thq-body-small">{link2}</span>
          <span className="thq-link thq-body-small">{link3}</span>
          <span className="thq-link thq-body-small">{link4}</span>
          <span className="thq-link thq-body-small">{link5}</span>
        </nav>

        {/* ---------- BURGER ICON (mobile only) ---------- */}
        <div data-thq="thq-burger-menu" className="navbar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar-icon1">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"/>
          </svg>
        </div>

        {/* ---------- MOBILE SLIDE-OUT MENU ---------- */}
        <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
          <div className="navbar-nav">
            <div className="navbar-top">
              <img alt={logoAlt} src={logoSrc} className="navbar-logo" />
              <div data-thq="thq-close-menu" className="navbar-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar-icon3">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"/>
                </svg>
              </div>
            </div>

            {/* same five links for mobile */}
            <nav className="navbar-links">
              <span className="thq-link thq-body-small">{link1}</span>
              <span className="thq-link thq-body-small">{link2}</span>
              <span className="thq-link thq-body-small">{link3}</span>
              <span className="thq-link thq-body-small">{link4}</span>
              <span className="thq-link thq-body-small">{link5}</span>
            </nav>
          </div>

          {/* action buttons */}
          <div className="navbar-buttons">
            <button className="thq-button-filled">{action2}</button>
            <button className="thq-button-outline">{action1}</button>
          </div>
        </div>
      </header>
    </header>
  )
}

Navbar.propTypes = {
  logoAlt: PropTypes.string,
  logoSrc: PropTypes.string,
  link1:   PropTypes.string,
  link2:   PropTypes.string,
  link3:   PropTypes.string,
  link4:   PropTypes.string,
  link5:   PropTypes.string,
  action1: PropTypes.string,
  action2: PropTypes.string,
}

export default Navbar
