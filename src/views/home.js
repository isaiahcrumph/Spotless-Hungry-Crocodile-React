import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Features1 from '../components/features1'
import CTA from '../components/cta'
import Features2 from '../components/features2'
import Pricing from '../components/pricing'
import Steps from '../components/steps'
import Testimonial from '../components/testimonial'
import Contact from '../components/contact'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Tony Montana Fitness</title>
      </Helmet>
      <Navbar></Navbar>
      <Hero
        heading1="Transform Your Body with Tony Montana"
        image2Src="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTUzMDI1MHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        image9Src="https://images.unsplash.com/photo-1486218119243-13883505764c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTU4ODA1NHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        rootClassName="heroroot-class-name"
      ></Hero>
      <Features1></Features1>
      <CTA></CTA>
      <Features2
        feature1Title="Tailored Fitness Plans"
        feature2Title="Personalized Workout Coaching"
        feature3Title="Nutrition Advice with Tony"
        feature1Description="Welcome to Tony Montana Fitness! We offer personalized fitness plans and expert guidance to help you achieve your fitness goals. Our services include tailored workout programs, nutrition guidance, and training sessions with Tony himself. Hear what our satisfied clients have to say about Tony's effective approach to fitness and nutrition. Contact us today for consultations and inquiries to kickstart your fitness journey."
        feature2Description="Get personalized fitness plans and expert guidance to help you achieve your fitness goals."
        feature3Description="Tony Montana Nutrition offers personalized nutrition plans and expert guidance to help clients achieve their health goals. Services include customized meal plans, dietary advice, and consultations with Tony. Testimonials rave about Tony's successful approach to nutrition and wellness. Contact Tony for appointments and questions to kickstart your journey to a healthier lifestyle."
      ></Features2>
      <Pricing rootClassName="pricingroot-class-name"></Pricing>
      <Steps rootClassName="stepsroot-class-name"></Steps>
      <Testimonial author4Src="https://images.unsplash.com/photo-1512005286309-e5b890ca36b6?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTUzMzUwM3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"></Testimonial>
      <Contact></Contact>
      <Footer
        action1="Subscribe"
        content2="2023 Tony Montana Fitness. All Rights Reserved."
        content3="Designed by Isaiah C. Rumph"
        cookiesLink="Cookie Policy"
      ></Footer>
    </div>
  )
}

export default Home
