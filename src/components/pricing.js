import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './pricing.css'

const Pricing = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <div
      className={`pricing-pricing23 thq-section-padding ${props.rootClassName} `}
    >
      <div className="pricing-max-width thq-section-max-width">
        <div className="pricing-section-title">
          <span className="pricing-text10 thq-body-small">
            {props.content1}
          </span>
          <div className="pricing-content">
            <h2 className="pricing-text11 thq-heading-2">{props.heading1}</h2>
            <p className="pricing-text12 thq-body-large">{props.content2}</p>
          </div>
        </div>
        <div className="pricing-tabs">
          {isMonthly && (
            <button
              onClick={() => setIsMonthly(true)}
              className="pricing-button10 thq-button-animated thq-button-filled"
            >
              <span className="thq-body-small">Monthly</span>
            </button>
          )}
          {!isMonthly && (
            <button
              onClick={() => setIsMonthly(true)}
              className="pricing-button11 thq-button-animated thq-button-outline"
            >
              <span className="thq-body-small">Monthly</span>
            </button>
          )}
          {!isMonthly && (
            <button
              onClick={() => setIsMonthly(false)}
              className="pricing-button12 thq-button-animated thq-button-filled"
            >
              <span className="thq-body-small">Yearly</span>
            </button>
          )}
          {isMonthly && (
            <button
              onClick={() => setIsMonthly(false)}
              className="pricing-button13 thq-button-animated thq-button-outline"
            >
              <span className="thq-body-small">Yearly</span>
            </button>
          )}
        </div>
        {isMonthly && (
          <div className="pricing-container1">
            <div className="pricing-column1 thq-card">
              <div className="pricing-price10">
                <div className="pricing-price11">
                  <p className="pricing-text17 thq-body-large">{props.plan1}</p>
                  <h3 className="pricing-text18 thq-heading-3">
                    {props.plan1Price}
                  </h3>
                  <p className="thq-body-large">{props.plan1Yearly}</p>
                </div>
                <div className="pricing-list1">
                  <div className="pricing-list-item10">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature1}
                    </span>
                  </div>
                  <div className="pricing-list-item11">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature2}
                    </span>
                  </div>
                  <div className="pricing-list-item12">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature3}
                    </span>
                  </div>
                </div>
              </div>
              <a href="https://buy.stripe.com/test_fZe5no99wh0RaD65kq">
              <button className="pricing-button14 thq-button-animated thq-button-outline">
                <span className="thq-body-small">{props.plan1Action}</span>
              </button>
              </a>
            </div>
            <div className="pricing-column2 thq-card">
              <div className="pricing-price12">
                <div className="pricing-price13">
                  <p className="pricing-text24 thq-body-large">{props.plan2}</p>
                  <h3 className="pricing-text25 thq-heading-3">
                    {props.plan2Price}
                  </h3>
                  <p className="thq-body-large">{props.plan2Yearly}</p>
                </div>
                <div className="pricing-list2">
                  <div className="pricing-list-item13">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature1}
                    </span>
                  </div>
                  <div className="pricing-list-item14">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature2}
                    </span>
                  </div>
                  <div className="pricing-list-item15">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature3}
                    </span>
                  </div>
                  <div className="pricing-list-item16">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature4}
                    </span>
                  </div>
                </div>
              </div>
              <a href="https://buy.stripe.com/test_7sI6rs2L8dOF3aE28d">
              <button className="pricing-button15 thq-button-animated thq-button-filled">
                <span className="thq-body-small">{props.plan2Action}</span>
              </button>
              </a>
            </div>
            <div className="pricing-column3 thq-card">
              <div className="pricing-price14">
                <div className="pricing-price15">
                  <p className="pricing-text32 thq-body-large">{props.plan3}</p>
                  <h3 className="pricing-text33 thq-heading-3">
                    {props.plan3Price}
                  </h3>
                  <p className="thq-body-large">{props.plan3Yearly}</p>
                </div>
                <div className="pricing-list3">
                  <div className="pricing-list-item17">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature1}
                    </span>
                  </div>
                  <div className="pricing-list-item18">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature2}
                    </span>
                  </div>
                  <div className="pricing-list-item19">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature3}
                    </span>
                  </div>
                  <div className="pricing-list-item20">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature4}
                    </span>
                  </div>
                  <div className="pricing-list-item21">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature5}
                    </span>
                  </div>
                </div>
              </div>
              <a href="https://buy.stripe.com/test_dR6g223PcaCt9z2eUY">
              <button className="pricing-button16 thq-button-animated thq-button-filled">
                <span className="thq-body-small">{props.plan3Action}</span>
              </button>
              </a>
            </div>
          </div>
        )}
        {!isMonthly && (
          <div className="pricing-container2">
            <div className="pricing-column4 thq-card">
              <div className="pricing-price16">
                <div className="pricing-price17">
                  <span className="pricing-text41 thq-body-large">
                    {props.plan11}
                  </span>
                  <h3 className="pricing-text42 thq-heading-3">
                    {props.plan1Price1}
                  </h3>
                  <span className="thq-body-large">{props.plan1Yearly1}</span>
                </div>
                <div className="pricing-list4">
                  <div className="pricing-list-item22">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature11}
                    </span>
                  </div>
                  <div className="pricing-list-item23">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature21}
                    </span>
                  </div>
                  <div className="pricing-list-item24">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature31}
                    </span>
                  </div>
                </div>
              </div>
              <a href="https://buy.stripe.com/test_4gw2bc5Xk11TaD63cd">
              <button className="pricing-button17 thq-button-animated thq-button-outline">
                <span className="thq-body-small">{props.plan1Action1}</span>
              </button>
              </a>
            </div>
            <div className="pricing-column5 thq-card">
              <div className="pricing-price18">
                <div className="pricing-price19">
                  <span className="pricing-text48 thq-body-large">
                    {props.plan21}
                  </span>
                  <h3 className="pricing-text49 thq-heading-3">
                    {props.plan2Price1}
                  </h3>
                  <span className="thq-body-large">{props.plan2Yearly1}</span>
                </div>
                <div className="pricing-list5">
                  <div className="pricing-list-item25">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature11}
                    </span>
                  </div>
                  <div className="pricing-list-item26">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature21}
                    </span>
                  </div>
                  <div className="pricing-list-item27">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature31}
                    </span>
                  </div>
                  <div className="pricing-list-item28">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature41}
                    </span>
                  </div>
                </div>
              </div>
              <a href="https://buy.stripe.com/test_dR6034gBYh0R7qUdQS">
              <button className="pricing-button18 thq-button-animated thq-button-filled">
                <span className="thq-body-small">{props.plan2Action1}</span>
              </button>
              </a>
            </div>
            <div className="pricing-column6 thq-card">
              <div className="pricing-price20">
                <div className="pricing-price21">
                  <span className="pricing-text56 thq-body-large">
                    {props.plan31}
                  </span>
                  <h3 className="pricing-text57 thq-heading-3">
                    {props.plan3Price1}
                  </h3>
                  <span className="thq-body-large">{props.plan3Yearly1}</span>
                </div>
                <div className="pricing-list6">
                  <div className="pricing-list-item29">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature11}
                    </span>
                  </div>
                  <div className="pricing-list-item30">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature21}
                    </span>
                  </div>
                  <div className="pricing-list-item31">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature31}
                    </span>
                  </div>
                  <div className="pricing-list-item32">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature41}
                    </span>
                  </div>
                  <div className="pricing-list-item33">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature51}
                    </span>
                  </div>
                </div>
              </div>
              <a href="https://buy.stripe.com/test_dR62bcetQ6mdfXq4gj">
              <button className="pricing-button19 thq-button-animated thq-button-filled">
                <span className="thq-body-small">{props.plan3Action1}</span>
              </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

Pricing.defaultProps = {
/* ─────────────────────────────────────────────────────────────
     SECTION HEADERS
  ───────────────────────────────────────────────────────────── */
  content1 : 'Find the coaching tier that matches your goals',
  heading1 : 'Tony Montana Coaching Packages',
  content2 : 'Every package blends science-backed programming with Tony’s no-nonsense accountability. Cancel any time.',
  /* ─────────────────────────────────────────────────────────────
     MONTHLY TAB  (plan1 / plan2 / plan3)
  ───────────────────────────────────────────────────────────── */
  /* Starter ——————————————— */
  plan1            : 'Starter plan',
  plan1Price       : '$99/month',
  plan1Yearly      : 'or $999 yearly (save 2 months)',
  plan1Feature1    : 'Custom 4-week workout plan',
  plan1Feature2    : 'Macro-friendly meal template',
  plan1Feature3    : 'Weekly e-mail accountability check-in',
  plan1Action      : 'Start now',
  /* Business —————————————— */
  plan2            : 'Business plan',
  plan2Price       : '$149/month',
  plan2Yearly      : 'or $1,499 yearly (save 3 months)',
  plan2Feature1    : 'Everything in Starter, plus:',
  plan2Feature2    : 'Bi-weekly 30-min video call with Tony',
  plan2Feature3    : 'Exclusive workout-demo video library',
  plan2Feature4    : 'Priority e-mail support',
  plan2Action      : 'Start now',
  /* Enterprise ——————————— */
  plan3            : 'Enterprise plan',
  plan3Price       : '$199/month',
  plan3Yearly      : 'or $1,999 yearly (save 4 months)',
  plan3Feature1    : 'Everything in Business, plus:',
  plan3Feature2    : 'Unlimited 1-on-1 Zoom sessions',
  plan3Feature3    : '24/7 WhatsApp chat support',
  plan3Feature4    : 'Monthly deep-dive progress analysis',
  plan3Feature5    : 'Custom meal-prep & grocery lists',
  plan3Action      : 'Start now',
  /* ─────────────────────────────────────────────────────────────
     YEARLY TAB  (plan11 / plan21 / plan31)
     TeleportHQ generated a second set of props for the Yearly
     column components; mirror the same copy but with yearly
     prices so the Yearly tab makes sense on its own.
  ───────────────────────────────────────────────────────────── */
  /* Starter ——————————————— */
  plan11           : 'Starter plan',
  plan1Price1      : '$999/yr',
  plan1Yearly1     : '≈ $99 monthly',
  plan1Feature11   : 'Custom 4-week workout plan',
  plan1Feature21   : 'Macro-friendly meal template',
  plan1Feature31   : 'Weekly e-mail accountability check-in',
  plan1Action1     : 'Start now',
  /* Business —————————————— */
  plan21           : 'Business plan',
  plan2Price1      : '$1,499/yr',
  plan2Yearly1     : '≈ $149 monthly',
  plan2Feature11   : 'Everything in Starter, plus:',
  plan2Feature21   : 'Bi-weekly 30-min video call with Tony',
  plan2Feature31   : 'Exclusive workout-demo video library',
  plan2Feature41   : 'Priority e-mail support',
  plan2Action1     : 'Start now',
  /* Enterprise ——————————— */
  plan31           : 'Enterprise plan',
  plan3Price1      : '$1,999/yr',
  plan3Yearly1     : '≈ $199 monthly',
  plan3Feature11   : 'Everything in Business, plus:',
  plan3Feature21   : 'Unlimited 1-on-1 Zoom sessions',
  plan3Feature31   : '24/7 WhatsApp chat support',
  plan3Feature41   : 'Monthly deep-dive progress analysis',
  plan3Feature51   : 'Custom meal-prep & grocery lists',
  plan3Action1     : 'Start now',
  /* ───────────────────────────────────────────────────────────── */
  rootClassName    : '',
}

Pricing.propTypes = {
  plan2Feature11: PropTypes.string,
  plan2Yearly: PropTypes.string,
  plan3Feature51: PropTypes.string,
  plan1Feature2: PropTypes.string,
  plan2Feature1: PropTypes.string,
  plan11: PropTypes.string,
  heading1: PropTypes.string,
  plan3Feature11: PropTypes.string,
  plan1: PropTypes.string,
  plan2Feature4: PropTypes.string,
  plan21: PropTypes.string,
  plan1Action1: PropTypes.string,
  plan31: PropTypes.string,
  plan2Price: PropTypes.string,
  plan3Feature3: PropTypes.string,
  plan1Feature11: PropTypes.string,
  plan3Action1: PropTypes.string,
  plan3Price: PropTypes.string,
  plan1Feature31: PropTypes.string,
  plan1Price: PropTypes.string,
  plan3Yearly: PropTypes.string,
  plan3Feature31: PropTypes.string,
  plan3Yearly1: PropTypes.string,
  plan3Price1: PropTypes.string,
  plan3: PropTypes.string,
  content2: PropTypes.string,
  plan3Feature5: PropTypes.string,
  plan3Feature21: PropTypes.string,
  plan1Feature21: PropTypes.string,
  plan3Feature41: PropTypes.string,
  plan1Feature3: PropTypes.string,
  plan2Feature2: PropTypes.string,
  plan2Price1: PropTypes.string,
  plan1Action: PropTypes.string,
  content1: PropTypes.string,
  plan3Feature1: PropTypes.string,
  plan1Price1: PropTypes.string,
  plan1Feature1: PropTypes.string,
  plan2Feature31: PropTypes.string,
  plan3Feature2: PropTypes.string,
  plan2Feature3: PropTypes.string,
  plan1Yearly: PropTypes.string,
  plan2Feature21: PropTypes.string,
  plan2Yearly1: PropTypes.string,
  plan2: PropTypes.string,
  plan3Action: PropTypes.string,
  plan2Action1: PropTypes.string,
  plan2Feature41: PropTypes.string,
  plan2Action: PropTypes.string,
  plan3Feature4: PropTypes.string,
  plan1Yearly1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Pricing
