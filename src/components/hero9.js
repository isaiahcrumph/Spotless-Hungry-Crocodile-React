import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero9.css'

const Hero9 = (props) => {
  return (
    <div className="hero9-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero9-image"
      />
      <div className="hero9-container"></div>
      <div className="hero9-max-width thq-section-max-width">
        <div className="hero9-content">
          <h1 className="hero9-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero9-text8">
                  Transform Your Body with Tony Montana Fitness
                </span>
              </Fragment>
            )}
          </h1>
          <p className="hero9-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="hero9-text5">
                  Get personalized workout plans, nutrition guidance, and expert
                  fitness consultations to help you reach your fitness goals.
                </span>
              </Fragment>
            )}
          </p>
          <div className="hero9-actions">
            <button className="thq-button-filled hero9-button1">
              <span className="hero9-text3 thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="hero9-text7">Explore Pricing Plans</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline hero9-button2">
              <span className="hero9-text4 thq-body-small">
                {props.action2 ?? (
                  <Fragment>
                    <span className="hero9-text6">Contact Tony Montana</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero9.defaultProps = {
  content1: undefined,
  action2: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1476525223214-c31ff100e1ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTM4NDY5MXw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Tony Montana Fitness',
  action1: undefined,
  heading1: undefined,
}

Hero9.propTypes = {
  content1: PropTypes.element,
  action2: PropTypes.element,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  action1: PropTypes.element,
  heading1: PropTypes.element,
}

export default Hero9
