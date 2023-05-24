import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './settings.css'

const Settings = (props) => {
  return (
    <div className="settings-container">
      <Helmet>
        <title>Settings - exported project</title>
        <meta property="og:title" content="Settings - exported project" />
      </Helmet>
      <div className="settings-desktop1">
        <span className="settings-text">
          <span>Settings</span>
        </span>
        <img
          alt="Vector1313"
          src="/external/vector1313-mixm.svg"
          className="settings-vector1"
        />
        <span className="settings-text02">
          <span>Tip of the Day!</span>
        </span>
        <span className="settings-text04">
          <span>
            Make sure your are drinking enough water throughout the day. Feeling
            hydrated will help you feel that little bit better during the day.
            Find out more here: examplelink.com
          </span>
        </span>
        <div className="settings-group9"></div>
        <div className="settings-group11">
          <img
            alt="Ellipse5320"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6e35936c-b67e-49bd-b8fc-55f3c371bcbd/be58ff74-a138-4dc9-bd7e-4ab6eed4a91f?org_if_sml=194"
            className="settings-ellipse5"
          />
          <img
            alt="Ellipse6321"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6e35936c-b67e-49bd-b8fc-55f3c371bcbd/7ec84151-d19c-4e59-8e9a-e5bf38d843af?org_if_sml=194"
            className="settings-ellipse6"
          />
          <img
            alt="Vector1322"
            src="/external/vector1322-xpi.svg"
            className="settings-vector11"
          />
          <img
            alt="Vector2323"
            src="/external/vector2323-pm4o.svg"
            className="settings-vector2"
          />
          <img
            alt="Vector3324"
            src="/external/vector3324-zha.svg"
            className="settings-vector3"
          />
        </div>
        <span className="settings-text06">
          <span> Username</span>
        </span>
        <div className="settings-group2">
          <img
            alt="Rectangle5327"
            src="/external/rectangle5327-5qgr-400w.png"
            className="settings-rectangle5"
          />
          <img
            alt="Rectangle5327"
            src="/external/rectangle5327-5qgr-400w.png"
            className="settings-rectangle51"
          />
          <img
            alt="Rectangle5327"
            src="/external/rectangle5327-5qgr-400w.png"
            className="settings-rectangle52"
          />
          <img
            alt="Rectangle5327"
            src="/external/rectangle5327-5qgr-400w.png"
            className="settings-rectangle53"
          />
          <span className="settings-text08">
            <span>Email: email@gmail.com</span>
          </span>
          <span className="settings-text10">
            <span>Password: ............................</span>
          </span>
          <span className="settings-text12">Notifications: ON</span>
          <span className="settings-text13">
            <span>Language: English</span>
          </span>
        </div>
        <span className="settings-text15">
          <span>Personal Details</span>
        </span>
        <span className="settings-text17">
          <span>Preferences</span>
        </span>
        <Link to="/" className="settings-navlink button">
          Home
        </Link>
        <button className="settings-button button">Report</button>
        <Link to="/meeting" className="settings-navlink1 button">
          Meeting
        </Link>
        <Link to="/progress" className="settings-navlink2 button">
          Progress
        </Link>
        <Link to="/change-settings" className="settings-navlink3">
          <img
            alt="pastedImage"
            src="/external/pastedimage-98i-200w.png"
            className="settings-pasted-image"
          />
        </Link>
        <Link to="/change-settings" className="settings-navlink4">
          <img
            alt="pastedImage"
            src="/external/pastedimage-98i-200w.png"
            className="settings-pasted-image1"
          />
        </Link>
        <Link to="/change-settings" className="settings-navlink5">
          <img
            alt="pastedImage"
            src="/external/pastedimage-98i-200w.png"
            className="settings-pasted-image2"
          />
        </Link>
        <Link to="/change-settings" className="settings-navlink6">
          <img
            alt="pastedImage"
            src="/external/pastedimage-98i-200w.png"
            className="settings-pasted-image3"
          />
        </Link>
      </div>
    </div>
  )
}

export default Settings
