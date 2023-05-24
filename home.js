import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="home-desktop1">
        <img
          alt="Vector1125"
          src="/external/vector1125-bwu.svg"
          className="home-vector1"
        />
        <span className="home-text">Tip of the Day!</span>
        <span className="home-text1">
          Make sure your are drinking enough water throughout the day. Feeling
          hydrated will help you feel that little bit better during the day.
          Find out more here: examplelink.com
        </span>
        <div className="home-group9">
          <Link to="/settings" className="home-navlink">
            <img
              alt="Vector21117"
              src="/external/vector21117-8tij.svg"
              className="home-vector2"
            />
          </Link>
          <Link to="/settings" className="home-navlink1">
            <img
              alt="Ellipse11118"
              src="/external/ellipse11118-zx5c.svg"
              className="home-ellipse1"
            />
          </Link>
        </div>
        <span className="home-text2">Student Well-being</span>
        <Link to="/report" className="home-navlink2 button">
          Submit a report
        </Link>
        <Link to="/progress" className="home-navlink3 button">
          See progress
        </Link>
        <Link to="/meeting" className="home-navlink4 button">
          Book a meeting
        </Link>
        <Link to="/help" className="home-navlink5 button">
          Need help?
        </Link>
      </div>
    </div>
  )
}

export default Home
