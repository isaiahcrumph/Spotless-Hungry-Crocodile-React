import React from 'react'

import PropTypes from 'prop-types'

import './cta.css'

const CTA = (props) => {
  const { pricingRef, onGetStarted } = props;


  const scrollToPricing = () => {
    if (pricingRef?.current) {
      pricingRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta-accent2-bg">
          <div className="cta-accent1-bg">
            <div className="cta-container2">
              <div className="cta-content">
                <span className="thq-heading-2">{props.heading1}</span>
                <p className="thq-body-large">{props.content1}</p>
              </div>
              <div className="cta-actions">
                <button 
                onClick={scrollToPricing}
                type="button" className="thq-button-filled cta-button">
                  {props.action1}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA.defaultProps = {
  action1: 'Get started today',
  heading1: 'Ready to transform your body?',
  content1:
    'Take the first step towards a healthier lifestyle with personalized fitness plans designed by Tony Montana.',

    pricingRef: null,          // new default
  onGetStarted: () => {},
  }

CTA.propTypes = {
  action1: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  pricingRef: PropTypes.object,   // new type (Ref object)
  
}

export default CTA
