import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Tony Montana Fitness</title>
        <meta property="og:title" content="Page - Tony Montana Fitness" />
      </Helmet>
    </div>
  )
}

export default Page
