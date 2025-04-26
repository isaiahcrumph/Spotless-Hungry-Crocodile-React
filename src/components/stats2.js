import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './stats2.css'

const Stats2 = (props) => {
  return (
    <div className="stats2-container1 thq-section-padding">
      <div className="stats2-max-width thq-section-max-width">
        <div className="stats2-container2 thq-flex-column">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="thq-img-ratio-1-1 stats2-image"
          />
        </div>
        <div className="stats2-container3 thq-flex-column">
          <span className="thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="stats2-text21">
                  Get customized workout plans tailored to your goals and
                  fitness level
                </span>
              </Fragment>
            )}
          </span>
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="stats2-text28">
                  Transform Your Body with Tony Montana
                </span>
              </Fragment>
            )}
          </h2>
          <p className="thq-body-large">
            {props.content2 ?? (
              <Fragment>
                <span className="stats2-text29">
                  Expert Guidance from Tony Montana
                </span>
              </Fragment>
            )}
          </p>
          <div className="stats2-container4 thq-grid-2">
            <div className="stats2-container5">
              <h2 className="thq-heading-2">
                {props.stat1 ?? (
                  <Fragment>
                    <span className="stats2-text24">
                      Personalized Fitness Plans
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat1Description ?? (
                  <Fragment>
                    <span className="stats2-text23">
                      Achieve your fitness goals with personalized workout plans
                      created just for you
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats2-container6">
              <h2 className="thq-heading-2">
                {props.stat2 ?? (
                  <Fragment>
                    <span className="stats2-text31">Expert Guidance</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat2Description ?? (
                  <Fragment>
                    <span className="stats2-text26">
                      Receive expert advice and support from Tony Montana
                      throughout your fitness journey
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="stats2-container7 thq-grid-2">
            <div className="stats2-container8">
              <h2 className="thq-heading-2">
                {props.stat3 ?? (
                  <Fragment>
                    <span className="stats2-text25">
                      Tailored Nutrition Guidance
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat3Description ?? (
                  <Fragment>
                    <span className="stats2-text30">
                      Receive personalized nutrition guidance to complement your
                      workout plans
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats2-container9">
              <h2 className="thq-heading-2">
                {props.stat4 ?? (
                  <Fragment>
                    <span className="stats2-text22">Training Sessions</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat4Description ?? (
                  <Fragment>
                    <span className="stats2-text27">
                      Engage in personalized training sessions designed to help
                      you reach your fitness goals
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Stats2.defaultProps = {
  content1: undefined,
  stat4: undefined,
  stat1Description: undefined,
  image1Alt: 'Tony Montana providing fitness guidance',
  stat1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1528805639423-44f7d2a3b368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTUzNDg4MXw&ixlib=rb-4.0.3&q=80&w=1080',
  stat3: undefined,
  stat2Description: undefined,
  stat4Description: undefined,
  heading1: undefined,
  content2: undefined,
  stat3Description: undefined,
  stat2: undefined,
}

Stats2.propTypes = {
  content1: PropTypes.element,
  stat4: PropTypes.element,
  stat1Description: PropTypes.element,
  image1Alt: PropTypes.string,
  stat1: PropTypes.element,
  image1Src: PropTypes.string,
  stat3: PropTypes.element,
  stat2Description: PropTypes.element,
  stat4Description: PropTypes.element,
  heading1: PropTypes.element,
  content2: PropTypes.element,
  stat3Description: PropTypes.element,
  stat2: PropTypes.element,
}

export default Stats2
