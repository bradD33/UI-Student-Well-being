import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './report.css'

const Report = (props) => {
  return (
    <div className="report-container">
      <Helmet>
        <title>Report - exported project</title>
        <meta property="og:title" content="Report - exported project" />
      </Helmet>
      <div className="report-desktop1">
        <span className="report-text">Report</span>
        <div className="report-group1">
          <span className="report-text01">
            How was your overall mood for the week 1 - 10?
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div className="report-group3">
          <div className="report-group2">
            <span className="report-text02">
              <span>
                How much progress do you feel you have made for the week?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
        </div>
        <div className="report-group4">
          <div className="report-group21">
            <span className="report-text04">
              <span>Please write any thoughts or feelings below:</span>
            </span>
          </div>
        </div>
        <div className="report-group6">
          <div className="report-group5">
            <Link to="/submitted-page" className="report-navlink">
              <div className="report-group22"></div>
            </Link>
          </div>
          <span className="report-text06">
            <span>Submit</span>
          </span>
        </div>
        <img
          alt="Vector1141"
          src="/external/vector1141-7qsk.svg"
          className="report-vector1"
        />
        <span className="report-text08">
          <span>Tip of the Day!</span>
        </span>
        <span className="report-text10">
          <span>
            Make sure your are drinking enough water throughout the day. Feeling
            hydrated will help you feel that little bit better during the day.
            Find out more here: examplelink.com
          </span>
        </span>
        <div className="report-group9">
          <Link to="/settings" className="report-navlink1">
            <img
              alt="Vector21120"
              src="/external/vector21120-u702.svg"
              className="report-vector2"
            />
          </Link>
          <img
            alt="Ellipse11121"
            src="/external/ellipse11121-55fd.svg"
            className="report-ellipse1"
          />
        </div>
        <div data-thq="thq-dropdown" className="report-thq-dropdown list-item">
          <ul data-thq="thq-dropdown-list" className="report-dropdown-list">
            <li data-thq="thq-dropdown" className="report-dropdown list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="report-dropdown-toggle"
              >
                <span className="report-text12">Sub-menu Item</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="report-dropdown1 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="report-dropdown-toggle1"
              >
                <span className="report-text13">Sub-menu Item</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="report-dropdown2 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="report-dropdown-toggle2"
              >
                <span className="report-text14">Sub-menu Item</span>
              </div>
            </li>
          </ul>
        </div>
        <Link to="/help" className="report-navlink2 button">
          Need help?
        </Link>
        <Link to="/progress" className="report-navlink3 button">
          Progress
        </Link>
      </div>
      <Link to="/" className="report-navlink4 button">
        Home
      </Link>
      <Link to="/meeting" className="report-navlink5 button">
        Meeting
      </Link>
      <button className="report-button button">Report</button>
      <div data-thq="thq-dropdown" className="report-thq-dropdown1 list-item">
        <ul data-thq="thq-dropdown-list" className="report-dropdown-list1">
          <li data-thq="thq-dropdown" className="report-dropdown3 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="report-dropdown-toggle3"
            >
              <span className="report-text15">Sub-menu Item</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="report-dropdown4 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="report-dropdown-toggle4"
            >
              <span className="report-text16">Sub-menu Item</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="report-dropdown5 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="report-dropdown-toggle5"
            >
              <span className="report-text17">Sub-menu Item</span>
            </div>
          </li>
        </ul>
      </div>
      <textarea
        placeholder="placeholder"
        className="report-textarea textarea"
      ></textarea>
      <textarea
        placeholder="placeholder"
        className="report-textarea1 textarea"
      ></textarea>
      <textarea
        placeholder="placeholder"
        className="report-textarea2 textarea"
      ></textarea>
    </div>
  )
}

export default Report
