import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero.css'

const Hero = (props) => {
  /* ➊ grab the ref that Home passes in */
  const { pricingRef, onGetStarted, featureRef, ...rest} = props;

  /* ➋ handler: scroll smoothly */
  const scrollToPricing = () => {
    if (pricingRef?.current) {
      pricingRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFeatures = () => {
    if (featureRef?.current) {
      featureRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className={`hero-header78 ${rest.rootClassName} `}>
      <div className="hero-column thq-section-padding thq-section-max-width">
        <div className="hero-content1">
          <h1 className="hero-text1 thq-heading-1">{rest.heading1}</h1>
          <p className="hero-text2 thq-body-large">{rest.content1}</p>
        </div>

        {/* ➌ FIRST BUTTON — wired to scroll */}
        <div className="hero-actions">
          <button
            onClick={scrollToPricing}
            className="thq-button-filled hero-button1"
          >
            <span className="thq-body-small">{rest.action1}</span>
          </button>

          
          <button
          onClick={scrollToFeatures}
           className="thq-button-outline hero-button2">
            <span className="thq-body-small">{rest.action2}</span>
          </button>
        </div>
      </div>

      <div className="hero-content2">
        <div className="hero-row-container1 thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero-placeholder-image10 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero-placeholder-image11 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero-placeholder-image12 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero-placeholder-image13 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero-placeholder-image14 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero-placeholder-image15 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero-placeholder-image16 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero-placeholder-image17 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero-placeholder-image18 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero-placeholder-image19 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero-placeholder-image20 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero-placeholder-image21 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = {
  image12Src:
    'https://images.unsplash.com/photo-1592402062271-11865c38baa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDkzNzA5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  image9Src:
    'https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDkzNzA5N3w&ixlib=rb-4.0.3&q=80&w=1080',
  content1:
    'Get in the best shape of your life with personalized fitness plans and expert guidance from Tony Montana, a renowned fitness consultant with years of experience in helping clients achieve their fitness goals.',
  image1Alt: 'Tony Montana working out',
  image10Src:
    'https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDkzNzA5OHw&ixlib=rb-4.0.3&q=80&w=1080',
  image7Alt: 'Yoga and meditation',
  image12Alt: 'Fitness progress tracking',
  image6Src:
    'https://images.unsplash.com/photo-1504805572947-34fad45aed93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDkzNzA5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  image6Alt: 'Personal training session',
  image2Alt: 'Dumbbells and fitness equipment',
  image5Alt: 'Outdoor workout session',
  image5Src:
    'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDkzNzA5OHw&ixlib=rb-4.0.3&q=80&w=1080',
  image7Src:
    'https://images.unsplash.com/photo-1514994444123-10094655bdb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDkzNzA5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Alt: 'Group fitness class',
  image3Src:
    'https://images.unsplash.com/photo-1434682772747-f16d3ea162c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDkzNzA5NHw&ixlib=rb-4.0.3&q=80&w=1080',
  image10Alt: 'Weightlifting session',
  image4Src:
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDkzNzA5OHw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Src:
    'https://images.unsplash.com/photo-1434682772747-f16d3ea162c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDkzNzA5NHw&ixlib=rb-4.0.3&q=80&w=1080',
  image8Src:
    'https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDkzNzA5N3w&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt: 'Healthy meal prep',
  action1: 'Get Started',
  image8Alt: 'Cardio workout',
  rootClassName: '',
  heading1: 'Transform Your Body with Tony Montana',
  image11Alt: 'Stretching exercises',
  image1Src:
    'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDkzNzA5OHw&ixlib=rb-4.0.3&q=80&w=1080',
  action2: 'Learn More',
  image11Src:
    'https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDkzNzA5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  image9Alt: 'Nutrition consultation',
  onGetStarted: () => {},

  pricingRef: null,          // new default
  onGetStarted: () => {},

  featureRef: null,        // new default
  onGetStarted: () => {},
}

Hero.propTypes = {
  image12Src: PropTypes.string,
  image9Src: PropTypes.string,
  content1: PropTypes.string,
  image1Alt: PropTypes.string,
  image10Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image12Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image5Src: PropTypes.string,
  image7Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image10Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image2Src: PropTypes.string,
  image8Src: PropTypes.string,
  image3Alt: PropTypes.string,
  action1: PropTypes.string,
  image8Alt: PropTypes.string,
  rootClassName: PropTypes.string,
  heading1: PropTypes.string,
  image11Alt: PropTypes.string,
  image1Src: PropTypes.string,
  action2: PropTypes.string,
  image11Src: PropTypes.string,
  image9Alt: PropTypes.string,
  onGetStarted: PropTypes.func,
  pricingRef: PropTypes.object,   // new type (Ref object)
  featureRef: PropTypes.object, // new type (Ref object)
  onGetStarted: PropTypes.func,
}

export default Hero
