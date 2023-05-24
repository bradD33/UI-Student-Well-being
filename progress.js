import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './progress.css'

const Progress = (props) => {
  return (
    <div className="progress-container">
      <Helmet>
        <title>Progress - exported project</title>
        <meta property="og:title" content="Progress - exported project" />
      </Helmet>
      <div className="progress-container1">
        <div className="progress-desktop1">
          <span className="progress-text">
            <span>
              <span>Progress</span>
              <br></br>
              <span></span>
            </span>
          </span>
          <img
            alt="Vector11148"
            src="/external/vector11148-2ygh.svg"
            className="progress-vector1"
          />
          <span className="progress-text5">
            <span>Tip of the Day!</span>
          </span>
          <span className="progress-text7">
            <span>
              Make sure your are drinking enough water throughout the day.
              Feeling hydrated will help you feel that little bit better during
              the day. Find out more here: examplelink.com
            </span>
          </span>
          <div className="progress-group9">
            <Link to="/settings" className="progress-navlink">
              <img
                alt="Vector21158"
                src="/external/vector21158-uf5f.svg"
                className="progress-vector2"
              />
            </Link>
            <Link to="/settings" className="progress-navlink1">
              <img
                alt="Ellipse11159"
                src="/external/ellipse11159-9reh.svg"
                className="progress-ellipse1"
              />
            </Link>
          </div>
          <img
            alt="Arrow31211"
            src="/external/arrow31211-k00c.svg"
            className="progress-arrow3"
          />
          <img
            alt="Arrow41212"
            src="/external/arrow41212-ixub.svg"
            className="progress-arrow4"
          />
          <Link to="/" className="progress-navlink2 button">
            Home
          </Link>
          <Link to="/help" className="progress-navlink3 button">
            Need help?
          </Link>
          <Link to="/report" className="progress-navlink4 button">
            Report
          </Link>
          <Link to="/progress" className="progress-navlink5 button">
            Progress
          </Link>
          <Link to="/meeting" className="progress-navlink6 button">
            Meeting
          </Link>
          <img
            alt="pastedImage"
            src="/external/pastedimage-gg6n-700h.png"
            className="progress-pasted-image"
          />
        </div>
      </div>
    </div>
  )
}

export default Progress
