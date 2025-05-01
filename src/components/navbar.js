/* ------------------------------------------------------------------
 *  Tony Montana Fitness – Responsive Navbar  (burger + dropdown)
 * ------------------------------------------------------------------ */

import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';

import './navbar.css';       // <—  reuse / adapt your existing stylesheet
import tmLogo   from '../assets/tmLogo.svg';


const Navbar = (props) => {

  
  const [dropdownOpen,  setDropdownOpen]  = useState(false); // desktop
  const [accordionOpen, setAccordionOpen] = useState(false); // mobile
  const { logoSrc    = tmLogo,
    logoAlt    = 'Tony Montana Fitness',
    link1      = 'Home',        link1Url   = '#home',
    link2      = 'About',       link2Url   = '#about',
    link3      = 'Services',    link3Url   = '#services',
    link4      = 'Testimonials',link4Url   = '#testimonials',
    link5      = 'Contact',
    action1    = 'Get Started',
    action2    = 'Learn More', pricingRef, featureRef } = props;


  /* ------------------------------------------------------------------ */
  /* scroll helpers                                                     */
  /* ------------------------------------------------------------------ */
  const scrollToPricing  = () => pricingRef ?.current?.scrollIntoView({ behavior:'smooth' });
  const scrollToFeatures = () => featureRef?.current?.scrollIntoView({ behavior:'smooth' });

  /* ------------------------------------------------------------------ */
  /* JSX (unchanged apart from removed onGetStarted)                    */
  /* ------------------------------------------------------------------ */
  return (

    <header className="navbar">
      {/* ---------------------------------------------------------------- */}
      {/*  TOP BAR                                                        */}
      {/* ---------------------------------------------------------------- */}
      <div data-thq="thq-navbar" className="navbar__bar">

        {/* logo (absolutely-positioned, so nav can centre) */}
        <img src={logoSrc} alt={logoAlt} className="navbar__logo" />

        {/* -----------------------  DESKTOP NAV  ------------------------ */}
        <nav data-thq="thq-navbar-nav" className="navbar__links">
          <a href={link1Url} className="thq-link thq-body-small">{link1}</a>
          <a href={link2Url} className="thq-link thq-body-small">{link2}</a>
          <a href={link3Url} className="thq-link thq-body-small">{link3}</a>
          <a href={link4Url} className="thq-link thq-body-small">{link4}</a>

          {/* dropdown trigger */}
          <button
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="navbar__dropdown-trigger thq-link thq-body-small"
          >
            {link5}
         
          </button>
        </nav>

        {/* desktop buttons */}
        <div className="navbar__buttons">
          <button
          onClick={scrollToPricing}
          className="thq-button-animated thq-button-filled">
            {action1}
          </button>
          <button 
          onClick={scrollToFeatures}
          className="thq-button-animated thq-button-outline">
            {action2}
          </button>
        </div>

        {/* burger (mobile) */}
        <button data-thq="thq-burger-menu" className="navbar__burger">
          <svg viewBox="0 0 1024 1024" className="navbar__icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 ..."/>
          </svg>
        </button>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/*  DESKTOP – DROPDOWN MENU                                         */}
      {/* ---------------------------------------------------------------- */}
      {dropdownOpen && (
        <div className="navbar__dropdown thq-box-shadow">
          {[
            [page1, page1Description, page1ImageSrc, page1ImageAlt, linkUrlPage1],
            [page2, page2Description, page2ImageSrc, page2ImageAlt, linkUrlPage2],
            [page3, page3Description, page3ImageSrc, page3ImageAlt, linkUrlPage3],
            [page4, page4Description, page4ImageSrc, page4ImageAlt, linkUrlPage4],
          ].map(([title, desc, src, alt, href]) => (
            <a key={title} href={href} className="navbar__item">
              <img src={src} alt={alt} className="navbar__item-img" />
              <div>
                <span className="thq-body-large">{title}</span>
                <span className="thq-body-small">{desc}</span>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* ---------------------------------------------------------------- */}
      {/*  MOBILE – SLIDE-OUT PANEL                                        */}
      {/* ---------------------------------------------------------------- */}
      <div data-thq="thq-mobile-menu" className="navbar__mobile">
        <div className="navbar__mobile-top">
          <img src={logoSrc} alt={logoAlt} className="navbar__mobile-logo" />
          <button data-thq="thq-close-menu" className="navbar__close">
            ✕
          </button>
        </div>

        {/* mobile links */}
        <nav className="navbar__mobile-links">
          <a href={link1Url} className="thq-link thq-body-small">{link1}</a>
          <a href={link2Url} className="thq-link thq-body-small">{link2}</a>
          <a href={link3Url} className="thq-link thq-body-small">{link3}</a>
          <a href={link4Url} className="thq-link thq-body-small">{link4}</a>

          {/* accordion trigger */}
          <button
            type="button"
            onClick={() => setAccordionOpen(!accordionOpen)}
            className="navbar__accordion-trigger thq-link thq-body-small"
          >
            {link5}
            <svg
              viewBox="0 0 1024 1024"
              className={`navbar__arrow ${accordionOpen ? 'open' : ''}`}
            >
              {accordionOpen
                ? <path d="M298 426h428l-214 214z" />
                : <path d="M426 726v-428l214 214z" />
              }
            </svg>
          </button>

          {/* mobile accordion content */}
          {accordionOpen && (
            <div className="navbar__accordion-content">
              {[ [page1, linkUrlPage1],
                 [page2, linkUrlPage2],
                 [page3, linkUrlPage3],
                 [page4, linkUrlPage4] ].map(([title, href]) =>
                <a key={title} href={href} className="thq-link thq-body-small">
                  {title}
                </a>
              )}
            </div>
          )}
        </nav>

        {/* mobile buttons */}
        <div className="navbar__mobile-buttons">
          <button className="thq-button-filled">{action1}</button>
          <button className="thq-button-outline">{action2}</button>
        </div>
      </div>
    </header>
  );

  
};

Navbar.defaultProps = {
  pricingRef: null,          // new default
  onGetStarted: () => {},

  featureRef: null,        // new default
  onGetStarted: () => {},
}

Navbar.propTypes = {
  logoSrc:  PropTypes.string,
  logoAlt:  PropTypes.string,
  link1:    PropTypes.string, link1Url: PropTypes.string,
  link2:    PropTypes.string, link2Url: PropTypes.string,
  link3:    PropTypes.string, link3Url: PropTypes.string,
  link4:    PropTypes.string, link4Url: PropTypes.string,
  link5:    PropTypes.string,
  /* page-card props (all optional -- fallback images fine) */
  page1:    PropTypes.string, page1Description: PropTypes.string,
  page1ImageSrc: PropTypes.string, page1ImageAlt: PropTypes.string,
  linkUrlPage1:  PropTypes.string,
  page2:    PropTypes.string, page2Description: PropTypes.string,
  page2ImageSrc: PropTypes.string, page2ImageAlt: PropTypes.string,
  linkUrlPage2:  PropTypes.string,
  page3:    PropTypes.string, page3Description: PropTypes.string,
  page3ImageSrc: PropTypes.string, page3ImageAlt: PropTypes.string,
  linkUrlPage3:  PropTypes.string,
  page4:    PropTypes.string, page4Description: PropTypes.string,
  page4ImageSrc: PropTypes.string, page4ImageAlt: PropTypes.string,
  linkUrlPage4:  PropTypes.string,
  action1: PropTypes.string,
  action2: PropTypes.string,
  pricingRef:   PropTypes.object,
  featureRef:   PropTypes.object,
};

export default Navbar;
