import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './help.css'

const Help = (props) => {
  return (
    <div className="help-container">
      <Helmet>
        <title>Help - exported project</title>
        <meta property="og:title" content="Help - exported project" />
      </Helmet>
      <div className="help-desktop1">
        <span className="help-text">
          <span>Help</span>
        </span>
        <img
          alt="Rectangle3365"
          src="/external/rectangle3365-jrp-200h.png"
          className="help-rectangle3"
        />
        <span className="help-text02">Useful links for support:</span>
        <img
          alt="Vector1369"
          src="/external/vector1369-2pn.svg"
          className="help-vector1"
        />
        <span className="help-text03">
          <span>Tip of the Day!</span>
        </span>
        <span className="help-text05">
          <span>
            Make sure your are drinking enough water throughout the day. Feeling
            hydrated will help you feel that little bit better during the day.
            Find out more here: examplelink.com
          </span>
        </span>
        <div className="help-group9">
          <Link to="/settings" className="help-navlink">
            <img
              alt="Vector2373"
              src="/external/vector2373-6kli.svg"
              className="help-vector2"
            />
          </Link>
          <img
            alt="Ellipse1374"
            src="/external/ellipse1374-nb07.svg"
            className="help-ellipse1"
          />
        </div>
        <img
          alt="Rectangle7375"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6e35936c-b67e-49bd-b8fc-55f3c371bcbd/dd7d7556-16c6-4aae-9047-98ab583cc64c?org_if_sml=12781"
          className="help-rectangle7"
        />
        <a
          href="https://www.hull.ac.uk/choose-hull/student-life/student-support"
          target="_blank"
          rel="noreferrer noopener"
          className="help-text07"
        >
          https://www.hull.ac.uk/choose-hull/student-life/student-support
        </a>
        <a
          href="https://www.hull.ac.uk/choose-hull/student-life/student-support"
          target="_blank"
          rel="noreferrer noopener"
          className="help-text08"
        >
          https://www.studentminds.org.uk/
        </a>
        <a
          href="https://www.hull.ac.uk/choose-hull/student-life/student-support"
          target="_blank"
          rel="noreferrer noopener"
          className="help-text09"
        >
          https://www.mind.org.uk/
        </a>
        <Link to="/" className="help-navlink1 button">
          Home
        </Link>
        <button className="help-button button">Report</button>
        <Link to="/meeting" className="help-navlink2 button">
          Meeting
        </Link>
        <span>Text</span>
        <Link to="/progress" className="help-navlink3 button">
          Progress
        </Link>
      </div>
    </div>
  )
}

export default Help
