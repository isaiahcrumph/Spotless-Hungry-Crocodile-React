import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features11.css'

const Features11 = (props) => {
  return (
    <div className="features11-layout251 thq-section-padding">
      <div className="features11-max-width thq-section-max-width">
        <div className="thq-flex-row features11-section-title">
          <div className="features11-column thq-flex-column">
            <span className="thq-body-small">
              {props.slogan ?? (
                <Fragment>
                  <span className="features11-text16">
                    Achieve Your Fitness Goals with Us
                  </span>
                </Fragment>
              )}
            </span>
            <h2 className="thq-heading-2 features11-text11">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features11-text13">Features</span>
                </Fragment>
              )}
            </h2>
          </div>
          <span className="thq-body-small">
            {props.sectionDescription ?? (
              <Fragment>
                <span className="features11-text18">
                  Discover the key features of Tony Montana Fitness that set us
                  apart from the rest.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="features11-content1">
          <div className="features11-row thq-flex-row">
            <div className="features11-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features11-feature1-image"
              />
              <div className="features11-content2 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features11-text23">
                        Tailored Workout Programs
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features11-text19">
                        Receive customized workout plans designed to help you
                        reach your fitness objectives.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features11-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features11-feature2-image"
              />
              <div className="features11-content3 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features11-text21">
                        Nutrition Guidance
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features11-text15">
                        Get expert advice on nutrition to complement your
                        fitness routine and enhance your results.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features11-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features11-feature3-image"
              />
              <div className="features11-content4 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features11-text22">
                        One-on-One Consultations
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features11-text20">
                        Benefit from individual consultations with Tony to
                        address your specific needs and challenges.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features11-actions">
          <button className="thq-button-filled features11-button1">
            <span className="thq-body-small">
              {props.mainAction ?? (
                <Fragment>
                  <span className="features11-text14">
                    Personalized Fitness Plans
                  </span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline features11-button2">
            <span className="thq-body-small">
              {props.secondaryAction ?? (
                <Fragment>
                  <span className="features11-text17">Expert Guidance</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features11.defaultProps = {
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTUzNDg4MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1661355102994-4a55ce801e5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTUzNDg4MXw&ixlib=rb-4.0.3&q=80&w=1080',
  sectionTitle: undefined,
  mainAction: undefined,
  feature1ImageAlt: 'Tailored Workout Programs Image',
  feature2Description: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTUzNDg4MXw&ixlib=rb-4.0.3&q=80&w=1080',
  slogan: undefined,
  secondaryAction: undefined,
  sectionDescription: undefined,
  feature1Description: undefined,
  feature2ImageAlt: 'Nutrition Guidance Image',
  feature3Description: undefined,
  feature3ImageAlt: 'One-on-One Consultations Image',
  feature2Title: undefined,
  feature3Title: undefined,
  feature1Title: undefined,
}

Features11.propTypes = {
  feature1ImageSrc: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  sectionTitle: PropTypes.element,
  mainAction: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature2Description: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  slogan: PropTypes.element,
  secondaryAction: PropTypes.element,
  sectionDescription: PropTypes.element,
  feature1Description: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature2Title: PropTypes.element,
  feature3Title: PropTypes.element,
  feature1Title: PropTypes.element,
}

export default Features11
