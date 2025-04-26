import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial18.css'

const Testimonial18 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial18-max-width thq-section-max-width">
        <div className="testimonial18-container1 thq-grid-2">
          <div className="testimonial18-section-title">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="testimonial18-text33">
                    Client Testimonials
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="testimonial18-text36">
                    Tony&apos;s personalized workout plan helped me achieve my
                    fitness goals in a short period of time. His expertise and
                    guidance are truly exceptional.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="testimonial18-container2">
              <button
                type="button"
                className="thq-button-filled testimonial18-button1"
              >
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="testimonial18-text28">
                        Primary action
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button
                type="button"
                className="thq-button-outline testimonial18-button2"
              >
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="testimonial18-text25">
                        Secondary action
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="testimonial18-content">
            <div className="testimonial18-column1 thq-card">
              <div className="testimonial18-stars1">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <span className="testimonial18-text12 thq-body-small">
                {props.review1 ?? (
                  <Fragment>
                    <span className="testimonial18-text35">
                      &quot;Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Suspendisse varius enim in eros elementum tristique.
                      Duis cursus, mi quis viverra ornare.&quot;
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="testimonial18-avatar1">
                <img
                  alt={props.author1Alt}
                  src={props.author1Src}
                  className="testimonial18-avatar-image1 thq-img-round thq-img-ratio-1-1"
                />
                <div className="testimonial18-avatar-content1">
                  <span className="testimonial18-text13 thq-body-small">
                    {props.author1Name ?? (
                      <Fragment>
                        <span className="testimonial18-text30">
                          Samantha Smith
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <span className="testimonial18-text14 thq-body-small">
                    {props.author1Position ?? (
                      <Fragment>
                        <span className="testimonial18-text22">
                          Yoga Instructor
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="testimonial18-column2 thq-card">
              <div className="testimonial18-stars2">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <span className="testimonial18-text15 thq-body-small">
                {props.review2 ?? (
                  <Fragment>
                    <span className="testimonial18-text27">
                      I have seen significant improvements in my strength and
                      endurance since following Tony&apos;s nutrition guidance.
                      Highly recommend his services.
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="testimonial18-avatar2">
                <img
                  alt={props.author2Alt}
                  src={props.author2Src}
                  className="testimonial18-avatar-image2 thq-img-round thq-img-ratio-1-1"
                />
                <div className="testimonial18-avatar-content2">
                  <span className="testimonial18-text16 thq-body-small">
                    {props.author2 ?? (
                      <Fragment>
                        <span className="testimonial18-text32">John Doe</span>
                      </Fragment>
                    )}
                  </span>
                  <span className="testimonial18-text17 thq-body-small">
                    {props.author2Position ?? (
                      <Fragment>
                        <span className="testimonial18-text37">
                          Fitness Enthusiast
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="testimonial18-column3 thq-card">
              <div className="testimonial18-stars3">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <span className="testimonial18-text18 thq-body-small">
                {props.review3 ?? (
                  <Fragment>
                    <span className="testimonial18-text26">
                      Tony&apos;s fitness consultations have been instrumental
                      in enhancing my performance on the field. His tailored
                      programs are top-notch.
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="testimonial18-avatar3">
                <img
                  alt={props.author3Alt}
                  src={props.author3Src}
                  className="testimonial18-avatar-image3 thq-img-round thq-img-ratio-1-1"
                />
                <div className="testimonial18-avatar-content3">
                  <span className="testimonial18-text19 thq-body-small">
                    {props.author3 ?? (
                      <Fragment>
                        <span className="testimonial18-text31">
                          Emily Johnson
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <span className="testimonial18-text20 thq-body-small">
                    {props.author3Position ?? (
                      <Fragment>
                        <span className="testimonial18-text34">Athlete</span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="testimonial18-column4 thq-card">
              <div className="testimonial18-stars4">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <span className="testimonial18-review4 thq-body-small">
                {props.review4 ?? (
                  <Fragment>
                    <span className="testimonial18-text23">
                      As a fellow fitness professional, I can attest to
                      Tony&apos;s knowledge and dedication to his clients&apos;
                      success. Working with him has been a game-changer.
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="testimonial18-avatar4">
                <img
                  alt={props.author4Alt}
                  src={props.author4Src}
                  className="testimonial18-author41 thq-img-round thq-img-ratio-1-1"
                />
                <div className="testimonial18-avatar-content4">
                  <span className="testimonial18-author42 thq-body-small">
                    {props.author4 ?? (
                      <Fragment>
                        <span className="testimonial18-text24">
                          Michael Brown
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <span className="testimonial18-text21 thq-body-small">
                    {props.author4Position ?? (
                      <Fragment>
                        <span className="testimonial18-text29">
                          Personal Trainer
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial18.defaultProps = {
  author1Position: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1673259490113-f61211378f51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTM4NDY5MXw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Src:
    'https://images.unsplash.com/photo-1567303314286-6735a4ad9d42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTM4NDY5MXw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Alt: 'Author Avatar',
  review4: undefined,
  author4: undefined,
  action2: undefined,
  review3: undefined,
  review2: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1494253109108-2e30c049369b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTM4NDY5MXw&ixlib=rb-4.0.3&q=80&w=1080',
  action1: undefined,
  author4Position: undefined,
  author4Alt: 'Author Avatar',
  author1Name: undefined,
  author3: undefined,
  author4Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  author2: undefined,
  heading1: undefined,
  author3Position: undefined,
  review1: undefined,
  author1Alt: 'Author Avatar',
  content1: undefined,
  author2Alt: 'Author Avatar',
  author2Position: undefined,
}

Testimonial18.propTypes = {
  author1Position: PropTypes.element,
  author3Src: PropTypes.string,
  author2Src: PropTypes.string,
  author3Alt: PropTypes.string,
  review4: PropTypes.element,
  author4: PropTypes.element,
  action2: PropTypes.element,
  review3: PropTypes.element,
  review2: PropTypes.element,
  author1Src: PropTypes.string,
  action1: PropTypes.element,
  author4Position: PropTypes.element,
  author4Alt: PropTypes.string,
  author1Name: PropTypes.element,
  author3: PropTypes.element,
  author4Src: PropTypes.string,
  author2: PropTypes.element,
  heading1: PropTypes.element,
  author3Position: PropTypes.element,
  review1: PropTypes.element,
  author1Alt: PropTypes.string,
  content1: PropTypes.element,
  author2Alt: PropTypes.string,
  author2Position: PropTypes.element,
}

export default Testimonial18
