import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author2Name: 'John Doe',
  review1:
    "Tony is not just a trainer, he's a motivator and a mentor. I highly recommend his services to anyone looking to transform their health and lifestyle.",
  author3Name: 'Emily Johnson',
  author2Alt: 'Image of John Doe',
  author1Name: 'Samantha Smith',
  author3Alt: 'Image of Emily Johnson',
  author4Alt: 'Image of Michael Williams',
  author3Position: 'Teacher',
  author4Position: 'Athlete',
  author1Src:
    'https://images.unsplash.com/photo-1608791952180-79294109d843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDkzNzA5NHw&ixlib=rb-4.0.3&q=80&w=1080',
  content1:
    'Working with Tony has been a game-changer for me. His personalized approach to fitness and nutrition has helped me achieve my goals faster than I ever thought possible.',
  author1Position: 'Marketing Manager',
  author1Alt: 'Image of Samantha Smith',
  review4:
    'Training with Tony has taken my performance to the next level. His expertise in strength and conditioning has helped me excel in my sport like never before.',
  author2Position: 'Entrepreneur',
  author2Src:
    'https://images.unsplash.com/photo-1539614474468-f423a2d2270c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDkzNzA5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  review2:
    "I've tried many fitness programs in the past, but none have been as effective as Tony's. His knowledge and dedication are truly unmatched.",
  review3:
    "Tony's positive energy is contagious! He pushes me to be my best self during every session, and I've seen incredible results because of his guidance.",
  author4Name: 'Michael Williams',
  author4Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading1: 'Testimonials',
  author3Src:
    'https://images.unsplash.com/photo-1624313603844-dda78ecf39b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDkzNzA5NXw&ixlib=rb-4.0.3&q=80&w=1080',
}

Testimonial.propTypes = {
  author2Name: PropTypes.string,
  review1: PropTypes.string,
  author3Name: PropTypes.string,
  author2Alt: PropTypes.string,
  author1Name: PropTypes.string,
  author3Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  author3Position: PropTypes.string,
  author4Position: PropTypes.string,
  author1Src: PropTypes.string,
  content1: PropTypes.string,
  author1Position: PropTypes.string,
  author1Alt: PropTypes.string,
  review4: PropTypes.string,
  author2Position: PropTypes.string,
  author2Src: PropTypes.string,
  review2: PropTypes.string,
  review3: PropTypes.string,
  author4Name: PropTypes.string,
  author4Src: PropTypes.string,
  heading1: PropTypes.string,
  author3Src: PropTypes.string,
}

export default Testimonial
