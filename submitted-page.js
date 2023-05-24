import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './submitted-page.css'

const SubmittedPage = (props) => {
  return (
    <div className="submitted-page-container">
      <Helmet>
        <title>Submitted-page - exported project</title>
        <meta property="og:title" content="Submitted-page - exported project" />
      </Helmet>
      <div className="submitted-page-desktop1">
        <span className="submitted-page-text">
          <span>Submitted successfully! </span>
          <br></br>
        </span>
        <img
          alt="Vector1189"
          src="/external/vector1189-s4r.svg"
          className="submitted-page-vector1"
        />
        <span className="submitted-page-text3">
          <span>Tip of the Day!</span>
        </span>
        <span className="submitted-page-text5">
          <span>
            Make sure your are drinking enough water throughout the day. Feeling
            hydrated will help you feel that little bit better during the day.
            Find out more here: examplelink.com
          </span>
        </span>
        <div className="submitted-page-group9">
          <Link to="/settings" className="submitted-page-navlink">
            <img
              alt="Vector21112"
              src="/external/vector21112-y8v.svg"
              className="submitted-page-vector2"
            />
          </Link>
          <img
            alt="Ellipse11113"
            src="/external/ellipse11113-whsp.svg"
            className="submitted-page-ellipse1"
          />
        </div>
        <Link to="/" className="submitted-page-navlink1 button">
          Home
        </Link>
        <Link to="/help" className="submitted-page-navlink2 button">
          Need help?
        </Link>
        <Link to="/report" className="submitted-page-navlink3 button">
          Report
        </Link>
        <Link to="/meeting" className="submitted-page-navlink4 button">
          Meeting
        </Link>
        <Link to="/progress" className="submitted-page-navlink5 button">
          Progress
        </Link>
      </div>
    </div>
  )
}

export default SubmittedPage
