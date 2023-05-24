import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './meeting.css'

const Meeting = (props) => {
  return (
    <div className="meeting-container">
      <Helmet>
        <title>Meeting - exported project</title>
        <meta property="og:title" content="Meeting - exported project" />
      </Helmet>
      <div className="meeting-desktop1">
        <span className="meeting-text">
          <span>
            <span>Meeting</span>
            <br></br>
            <span></span>
          </span>
        </span>
        <div className="meeting-group1">
          <span className="meeting-text05">
            <span>What is the topic of the meeting?</span>
          </span>
        </div>
        <div className="meeting-group3">
          <div className="meeting-group2">
            <span className="meeting-text07">
              <span>What is the date of the meeting?</span>
            </span>
          </div>
        </div>
        <div className="meeting-group7">
          <div className="meeting-group21">
            <span className="meeting-text09">
              <span>What is the time of the meeting?</span>
            </span>
          </div>
        </div>
        <div className="meeting-group8">
          <div className="meeting-group22">
            <span className="meeting-text11">
              <span>Where will the meeting take place?</span>
            </span>
          </div>
        </div>
        <div className="meeting-group6">
          <div className="meeting-group5">
            <Link to="/submitted-page" className="meeting-navlink">
              <div className="meeting-group23"></div>
            </Link>
          </div>
          <Link to="/submitted-page" className="meeting-text13">
            <span>Submit</span>
          </Link>
        </div>
        <img
          alt="Vector1189"
          src="/external/vector1189-s4r.svg"
          className="meeting-vector1"
        />
        <span className="meeting-text15">Tip of the Day!</span>
        <span className="meeting-text16">
          <span>
            Make sure your are drinking enough water throughout the day. Feeling
            hydrated will help you feel that little bit better during the day.
            Find out more here: examplelink.com
          </span>
        </span>
        <div className="meeting-group9">
          <Link to="/settings" className="meeting-navlink1">
            <img
              alt="Vector21112"
              src="/external/vector21112-y8v.svg"
              className="meeting-vector2"
            />
          </Link>
          <img
            alt="Ellipse11113"
            src="/external/ellipse11113-whsp.svg"
            className="meeting-ellipse1"
          />
          <textarea
            placeholder="placeholder"
            className="meeting-textarea textarea"
          ></textarea>
          <textarea
            placeholder="placeholder"
            className="meeting-textarea1 textarea"
          ></textarea>
        </div>
        <textarea
          placeholder="placeholder"
          className="meeting-textarea2 textarea"
        ></textarea>
        <textarea
          placeholder="placeholder"
          className="meeting-textarea3 textarea"
        ></textarea>
        <Link to="/" className="meeting-navlink2 button">
          Home
        </Link>
        <Link to="/help" className="meeting-navlink3 button">
          Need help?
        </Link>
        <Link to="/report" className="meeting-navlink4 button">
          Report
        </Link>
        <Link to="/meeting" className="meeting-navlink5 button">
          Meeting
        </Link>
        <Link to="/progress" className="meeting-navlink6 button">
          Progress
        </Link>
      </div>
    </div>
  )
}

export default Meeting
