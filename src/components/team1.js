import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './team1.css'

const Team1 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="team1-max-width thq-section-max-width">
        <div className="team1-section-title">
          <span className="thq-body-small team1-text10">
            {props.content1 ?? (
              <Fragment>
                <span className="team1-text66">Join Our Team Today!</span>
              </Fragment>
            )}
          </span>
          <div className="team1-content10">
            <h2 className="thq-heading-2 team1-text11">
              {props.heading1 ?? (
                <Fragment>
                  <span className="team1-text59">Meet Our Team</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large team1-text12">
              {props.content2 ?? (
                <Fragment>
                  <span className="team1-text61">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="team1-content11">
          <div className="team1-content12">
            <div className="team1-row1">
              <div className="team1-container1">
                <div className="team1-card1">
                  <img
                    alt={props.member1Alt}
                    src={props.member1Src}
                    className="team1-placeholder-image1 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content13">
                    <div className="team1-title1">
                      <span className="team1-text13 thq-body-small">
                        {props.member1 ?? (
                          <Fragment>
                            <span className="team1-text46">Tony Montana</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team1-text14 thq-body-small">
                        {props.member1Job ?? (
                          <Fragment>
                            <span className="team1-text54">
                              Founder &amp; Head Trainer
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team1-text15 thq-body-small">
                      {props.member1Content ?? (
                        <Fragment>
                          <span className="team1-text43">
                            Tony is a certified personal trainer with over 10
                            years of experience in the fitness industry. He is
                            passionate about helping clients achieve their
                            fitness goals and live a healthier lifestyle.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons1">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="team1-card2">
                  <img
                    alt={props.member2Alt}
                    src={props.member2Src}
                    className="team1-placeholder-image2 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content14">
                    <div className="team1-title2">
                      <span className="team1-text16 thq-body-small">
                        {props.member2 ?? (
                          <Fragment>
                            <span className="team1-text41">Sarah Johnson</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team1-text17 thq-body-small">
                        {props.member2Job ?? (
                          <Fragment>
                            <span className="team1-text49">
                              Nutrition Specialist
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team1-text18 thq-body-small">
                      {props.member2Content ?? (
                        <Fragment>
                          <span className="team1-text67">
                            Sarah is a registered dietitian who specializes in
                            creating personalized nutrition plans to complement
                            clients&apos; workout routines and optimize their
                            results.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons2">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="team1-container2">
                <div className="team1-card3">
                  <img
                    alt={props.member3Alt}
                    src={props.member3Src}
                    className="team1-placeholder-image3 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content15">
                    <div className="team1-title3">
                      <span className="team1-text19 thq-body-small">
                        {props.member3 ?? (
                          <Fragment>
                            <span className="team1-text58">Alex Rodriguez</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team1-text20 thq-body-small">
                        {props.member3Job ?? (
                          <Fragment>
                            <span className="team1-text64">Fitness Coach</span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team1-text21 thq-body-small">
                      {props.member3Content ?? (
                        <Fragment>
                          <span className="team1-text50">
                            Alex is a dedicated fitness coach who motivates and
                            guides clients through their workout sessions,
                            ensuring they stay on track towards reaching their
                            fitness goals.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons3">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="team1-card4">
                  <img
                    alt={props.member4Alt}
                    src={props.member4Src}
                    className="team1-placeholder-image4 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content16">
                    <div className="team1-title4">
                      <span className="team1-text22 thq-body-small">
                        {props.member4 ?? (
                          <Fragment>
                            <span className="team1-text56">Emily Smith</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team1-text23 thq-body-small">
                        {props.member4Job ?? (
                          <Fragment>
                            <span className="team1-text63">
                              Wellness Consultant
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team1-text24 thq-body-small">
                      {props.member4Content ?? (
                        <Fragment>
                          <span className="team1-text40">
                            Emily focuses on holistic wellness and provides
                            valuable insights to clients on how to maintain a
                            balanced lifestyle that supports their overall
                            health and well-being.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons4">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="team1-row2">
              <div className="team1-container3">
                <div className="team1-card5">
                  <img
                    alt={props.member5Alt}
                    src={props.member5Src}
                    className="team1-placeholder-image5 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content17">
                    <div className="team1-title5">
                      <span className="team1-text25 thq-body-small">
                        {props.member5 ?? (
                          <Fragment>
                            <span className="team1-text51">Chris Thompson</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team1-text26 thq-body-small">
                        {props.member5Job ?? (
                          <Fragment>
                            <span className="team1-text52">
                              Strength Training Expert
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team1-text27 thq-body-small">
                      {props.member5Content ?? (
                        <Fragment>
                          <span className="team1-text60">
                            Chris specializes in strength training programs
                            tailored to individual needs, helping clients build
                            muscle, improve endurance, and enhance their overall
                            physical strength.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons5">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="team1-card6">
                  <img
                    alt={props.member6Alt}
                    src={props.member6Src}
                    className="team1-placeholder-image6 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content18">
                    <div className="team1-title6">
                      <span className="team1-text28 thq-body-small">
                        {props.member6 ?? (
                          <Fragment>
                            <span className="team1-text48">Jessica Lee</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team1-text29 thq-body-small">
                        {props.member6Job ?? (
                          <Fragment>
                            <span className="team1-text57">
                              Yoga &amp; Meditation Instructor
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team1-text30 thq-body-small">
                      {props.member6Content ?? (
                        <Fragment>
                          <span className="team1-text45">
                            Jessica brings a calming presence to the team as she
                            leads yoga and meditation sessions that promote
                            relaxation, flexibility, and mindfulness for a
                            well-rounded approach to fitness.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons6">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="team1-container4">
                <div className="team1-card7">
                  <img
                    alt={props.member7Alt}
                    src={props.member7Src}
                    className="team1-placeholder-image7 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content19">
                    <div className="team1-title7">
                      <span className="team1-text31 thq-body-small">
                        {props.member7 ?? (
                          <Fragment>
                            <span className="team1-text65">Michael Davis</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team1-text32 thq-body-small">
                        {props.member7Job ?? (
                          <Fragment>
                            <span className="team1-text69">
                              Cardiovascular Fitness Coach
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team1-text33 thq-body-small">
                      {props.member7Content ?? (
                        <Fragment>
                          <span className="team1-text44">
                            Michael is passionate about cardiovascular health
                            and designs cardio-focused workouts that boost
                            endurance, improve heart health, and enhance overall
                            fitness levels.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons7">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="team1-card8">
                  <img
                    alt={props.member8Alt}
                    src={props.member8Src}
                    className="team1-placeholder-image8 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content20">
                    <div className="team1-title8">
                      <span className="team1-text34 thq-body-small">
                        {props.member8 ?? (
                          <Fragment>
                            <span className="team1-text42">Rachel White</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team1-text35 thq-body-small">
                        {props.member8Job ?? (
                          <Fragment>
                            <span className="team1-text53">Wellness Coach</span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team1-text36 thq-body-small">
                      {props.member8Content ?? (
                        <Fragment>
                          <span className="team1-text68">
                            Rachel specializes in overall wellness coaching,
                            providing guidance on stress management, sleep
                            optimization, and lifestyle changes to support
                            clients&apos; long-term health goals.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons8">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="team1-content21">
            <div className="team1-content22">
              <h2 className="thq-heading-2 team1-text37">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="team1-text62">We’re hiring!</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small team1-text38">
                {props.content3 ?? (
                  <Fragment>
                    <span className="team1-text47">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <button className="team1-button thq-button-filled">
              <span className="thq-body-small">
                {props.actionContent ?? (
                  <Fragment>
                    <span className="team1-text55">Open positions</span>
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

Team1.defaultProps = {
  member4Content: undefined,
  member7Src:
    'https://images.unsplash.com/photo-1609708993734-29d07306bdc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTUzNDg4MXw&ixlib=rb-4.0.3&q=80&w=1080',
  member2: undefined,
  member1Alt: 'Member Alt',
  member8: undefined,
  member1Content: undefined,
  member2Src:
    'https://images.unsplash.com/photo-1613376023733-0a73315d9b06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTUzNDg4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  member5Alt: 'Member Alt',
  member7Content: undefined,
  member6Content: undefined,
  member1: undefined,
  content3: undefined,
  member7Alt: 'Member Alt',
  member6: undefined,
  member6Alt: 'Member Alt',
  member3Alt: 'Member Alt',
  member2Job: undefined,
  member5Src:
    'https://images.unsplash.com/photo-1502768040783-423da5fd5fa0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTUzNDg4MXw&ixlib=rb-4.0.3&q=80&w=1080',
  member3Content: undefined,
  member5: undefined,
  member2Alt: 'Member Alt',
  member5Job: undefined,
  member8Src:
    'https://images.unsplash.com/photo-1601255596436-3d600117f19e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTUzNDg4MXw&ixlib=rb-4.0.3&q=80&w=1080',
  member8Job: undefined,
  member1Job: undefined,
  actionContent: undefined,
  member4: undefined,
  member3Src:
    'https://images.unsplash.com/photo-1636041248580-0bd37ad8cccc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTUzNDg4MXw&ixlib=rb-4.0.3&q=80&w=1080',
  member8Alt: 'Member Alt',
  member4Alt: 'Member Alt',
  member6Job: undefined,
  member3: undefined,
  heading1: undefined,
  member5Content: undefined,
  content2: undefined,
  heading2: undefined,
  member4Src:
    'https://images.unsplash.com/photo-1495553715023-a3c367bb8620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTUzNDg4MXw&ixlib=rb-4.0.3&q=80&w=1080',
  member4Job: undefined,
  member3Job: undefined,
  member7: undefined,
  content1: undefined,
  member1Src:
    'https://images.unsplash.com/photo-1587764379873-97837921fd44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTUzNDg4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  member2Content: undefined,
  member8Content: undefined,
  member6Src:
    'https://images.unsplash.com/photo-1587398099807-ff052ff03b56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTUzNDg4MXw&ixlib=rb-4.0.3&q=80&w=1080',
  member7Job: undefined,
}

Team1.propTypes = {
  member4Content: PropTypes.element,
  member7Src: PropTypes.string,
  member2: PropTypes.element,
  member1Alt: PropTypes.string,
  member8: PropTypes.element,
  member1Content: PropTypes.element,
  member2Src: PropTypes.string,
  member5Alt: PropTypes.string,
  member7Content: PropTypes.element,
  member6Content: PropTypes.element,
  member1: PropTypes.element,
  content3: PropTypes.element,
  member7Alt: PropTypes.string,
  member6: PropTypes.element,
  member6Alt: PropTypes.string,
  member3Alt: PropTypes.string,
  member2Job: PropTypes.element,
  member5Src: PropTypes.string,
  member3Content: PropTypes.element,
  member5: PropTypes.element,
  member2Alt: PropTypes.string,
  member5Job: PropTypes.element,
  member8Src: PropTypes.string,
  member8Job: PropTypes.element,
  member1Job: PropTypes.element,
  actionContent: PropTypes.element,
  member4: PropTypes.element,
  member3Src: PropTypes.string,
  member8Alt: PropTypes.string,
  member4Alt: PropTypes.string,
  member6Job: PropTypes.element,
  member3: PropTypes.element,
  heading1: PropTypes.element,
  member5Content: PropTypes.element,
  content2: PropTypes.element,
  heading2: PropTypes.element,
  member4Src: PropTypes.string,
  member4Job: PropTypes.element,
  member3Job: PropTypes.element,
  member7: PropTypes.element,
  content1: PropTypes.element,
  member1Src: PropTypes.string,
  member2Content: PropTypes.element,
  member8Content: PropTypes.element,
  member6Src: PropTypes.string,
  member7Job: PropTypes.element,
}

export default Team1
