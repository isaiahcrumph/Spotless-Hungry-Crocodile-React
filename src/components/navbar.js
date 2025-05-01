// Tony Montana Fitness – Responsive Navbar
import React, { useState } from 'react';
import PropTypes          from 'prop-types';
import './navbar.css';
import tmLogo             from '../assets/tmLogo.svg';

const Navbar = ({
  logoSrc  = tmLogo,
  logoAlt  = 'Tony Montana Fitness',

  link1    = 'Home',         link1Url = '#home',
  link2    = 'About',        link2Url = '#about',
  link3    = 'Services',     link3Url = '#services',
  link4    = 'Testimonials', link4Url = '#testimonials',
  link5    = 'Contact',

  action1  = 'Get Started',
  action2  = 'Learn More',

  pricingRef,
  featureRef,
}) => {
  const [desktopDropdown, setDesktopDropdown] = useState(false);
  const [mobileOpen,      setMobileOpen]      = useState(false);
  const [accordionOpen,   setAccordionOpen]   = useState(false);

  /* smooth-scroll helpers */
  const scrollToPricing  = () => pricingRef ?.current?.scrollIntoView({ behavior:'smooth' });
  const scrollToFeatures = () => featureRef?.current?.scrollIntoView({ behavior:'smooth' });

  /* helpers */
  const openMobile  = () => setMobileOpen(true);
  const closeMobile = () => {
    setMobileOpen(false);     // hide drawer
    setAccordionOpen(false);  // ← collapse Contact list
  };
  

  /* -------------------------------------------------------------- */
  return (
    <header className="navbar">

      {/* ───────────  TOP BAR  ─────────── */}
      <div className="navbar__bar">
        <img src={logoSrc} alt={logoAlt} className="navbar__logo" />

        {/* desktop links */}
        <nav className="navbar__links">
          <a href={link1Url}>{link1}</a>
          <a href={link2Url}>{link2}</a>
          <a href={link3Url}>{link3}</a>
          <a href={link4Url}>{link4}</a>

          <button
            className="navbar__dropdown-trigger"
            onClick={() => setDesktopDropdown(!desktopDropdown)}
          >
            {link5}
          </button>
        </nav>

        {/* desktop CTAs */}
        <div className="navbar__buttons">
          <button className="thq-button-filled"  onClick={scrollToPricing}> {action1} </button>
          <button className="thq-button-outline" onClick={scrollToFeatures}>{action2}</button>
        </div>

        {/* burger icon (right edge) */}
        <button className="navbar__burger" onClick={openMobile}>☰</button>
      </div>

      {/* desktop dropdown */}
      {desktopDropdown && (
        <div className="navbar__dropdown">
          <a href="#phone">Phone</a>
          <a href="#email">Email</a>
          <a href="#instagram">Instagram</a>
          <a href="#location">Location</a>
        </div>
      )}

      {/* ───────────  MOBILE DRAWER  ─────────── */}
      <div className={`navbar__mobile ${mobileOpen ? 'open' : ''}`}>
        <div className="navbar__mobile-top">
          <img src={logoSrc} alt={logoAlt} className="navbar__mobile-logo" />
          <button className="navbar__close" onClick={closeMobile}>✕</button>
        </div>

        <nav className="navbar__mobile-links">
          {/* leaf links close the drawer */}
          <a href={link1Url} onClick={closeMobile}>{link1}</a>
          <a href={link2Url} onClick={closeMobile}>{link2}</a>
          <a href={link3Url} onClick={closeMobile}>{link3}</a>
          <a href={link4Url} onClick={closeMobile}>{link4}</a>

          {/* accordion trigger toggles ONLY accordion */}
          <button
  className="navbar__accordion-trigger"
  onClick={() => setAccordionOpen(!accordionOpen)}
>
  {link5} {accordionOpen ? '▾' : '▸'}
</button>

          {accordionOpen && (
            <div className="navbar__accordion-content">
              <a href="#phone"     onClick={closeMobile}>Phone</a>
              <a href="#email"     onClick={closeMobile}>Email</a>
              <a href="#instagram" onClick={closeMobile}>Instagram</a>
              <a href="#location"  onClick={closeMobile}>Location</a>
            </div>
          )}
        </nav>

        <div className="navbar__mobile-buttons">
          <button className="thq-button-filled"  onClick={() => { closeMobile(); scrollToPricing();  }}>{action1}</button>
          <button className="thq-button-outline" onClick={() => { closeMobile(); scrollToFeatures(); }}>{action2}</button>
        </div>
      </div>
    </header>
  );
};

/* prop types for refs & logo */
Navbar.propTypes = {
  logoSrc:     PropTypes.string,
  logoAlt:     PropTypes.string,
  pricingRef:  PropTypes.object,
  featureRef:  PropTypes.object,
};

export default Navbar;
