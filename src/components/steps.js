import React from 'react'

import PropTypes from 'prop-types'

import './steps.css'

const Steps = (props) => {
  return (
    <div
      className={`steps-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="steps-max-width thq-section-max-width">
        <div className="steps-container2 thq-grid-2">
          <div className="steps-section-header">
            <h2 className="thq-heading-2 steps-text10">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large steps-text11">
              At Tony Montana Fitness, we specialize in creating personalized
              fitness plans and providing expert guidance to help our clients
              reach their fitness goals. Our services include customized workout
              programs, tailored nutrition plans, and one-on-one consultations
              with Tony Montana himself. Clients can select from a variety of
              pricing plans to suit their individual needs. Testimonials from
              satisfied clients showcase the effectiveness of Tony&apos;s
              approach in transforming both health and lifestyle.
            </p>
            <div className="steps-actions">
              <button className="thq-button-animated thq-button-filled steps-button">
                <span className="thq-body-small">Main action</span>
              </button>
            </div>
          </div>
          <div className="steps-container3">
            <div className="steps-container4 thq-card">
              <h2 className="thq-heading-2">{props.step1Title}</h2>
              <span className="steps-text14 thq-body-small">
                {props.step1Description}
              </span>
              <label className="steps-text15 thq-heading-3">01</label>
            </div>
            <div className="steps-container5 thq-card">
              <h2 className="steps-text16 thq-heading-2">{props.step2Title}</h2>
              <span className="steps-text17 thq-body-small">
                {props.step2Description}
              </span>
              <label className="steps-text18 thq-heading-3">02</label>
            </div>
            <div className="steps-container6 thq-card">
              <h2 className="thq-heading-2">{props.step3Title}</h2>
              <span className="steps-text20 thq-body-small">
                {props.step3Description}
              </span>
              <label className="steps-text21 thq-heading-3">03</label>
            </div>
            <div className="steps-container7 thq-card">
              <h2 className="thq-heading-2">{props.step4Title}</h2>
              <span className="steps-text23 thq-body-small">
                {props.step4Description}
              </span>
              <label className="steps-text24 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps.defaultProps = {
  step4Description:
    'Receive expert advice from Tony on nutrition and dietary choices to complement your fitness routine and optimize your results.',
  step4Title: 'Nutritional Guidance',
  step3Title: 'Training Sessions',
  step2Description:
    'Based on your consultation, Tony will create a customized fitness plan tailored to your goals, preferences, and fitness level.',
  step2Title: 'Personalized Fitness Plan',
  step1Title: 'Initial Consultation',
  step1Description:
    'Schedule a one-on-one meeting with Tony to discuss your fitness goals, current lifestyle, and any specific needs or concerns you may have.',
  step3Description:
    'Attend regular training sessions with Tony where he will guide you through workouts, provide feedback, and track your progress.',
  rootClassName: '',
}

Steps.propTypes = {
  step4Description: PropTypes.string,
  step4Title: PropTypes.string,
  step3Title: PropTypes.string,
  step2Description: PropTypes.string,
  step2Title: PropTypes.string,
  step1Title: PropTypes.string,
  step1Description: PropTypes.string,
  step3Description: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Steps
