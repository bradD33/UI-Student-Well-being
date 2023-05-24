import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './change-settings.css'

const ChangeSettings = (props) => {
  return (
    <div className="change-settings-container">
      <Helmet>
        <title>ChangeSettings - exported project</title>
        <meta property="og:title" content="ChangeSettings - exported project" />
      </Helmet>
      <div className="change-settings-desktop1">
        <span className="change-settings-text">
          <span>Settings</span>
        </span>
        <img
          alt="Vector1313"
          src="/external/vector1313-mixm.svg"
          className="change-settings-vector1"
        />
        <span className="change-settings-text02">
          <span>Tip of the Day!</span>
        </span>
        <span className="change-settings-text04">
          <span>
            Make sure your are drinking enough water throughout the day. Feeling
            hydrated will help you feel that little bit better during the day.
            Find out more here: examplelink.com
          </span>
        </span>
        <div className="change-settings-group9"></div>
        <div className="change-settings-group11">
          <img
            alt="Ellipse5320"
            src="/external/ellipse5320-2cu-200h.png"
            className="change-settings-ellipse5"
          />
          <img
            alt="Ellipse6321"
            src="/external/ellipse6321-9en-200h.png"
            className="change-settings-ellipse6"
          />
          <img
            alt="Vector1322"
            src="/external/vector1322-xpi.svg"
            className="change-settings-vector11"
          />
          <img
            alt="Vector2323"
            src="/external/vector2323-pm4o.svg"
            className="change-settings-vector2"
          />
          <img
            alt="Vector3324"
            src="/external/vector3324-zha.svg"
            className="change-settings-vector3"
          />
        </div>
        <span className="change-settings-text06">
          <span> Username</span>
        </span>
        <div className="change-settings-group2">
          <img
            alt="Rectangle5327"
            src="/external/rectangle5327-5qgr-400w.png"
            className="change-settings-rectangle5"
          />
          <img
            alt="Rectangle5327"
            src="/external/rectangle5327-5qgr-400w.png"
            className="change-settings-rectangle51"
          />
          <img
            alt="Rectangle5327"
            src="/external/rectangle5327-5qgr-400w.png"
            className="change-settings-rectangle52"
          />
          <img
            alt="Rectangle5327"
            src="/external/rectangle5327-5qgr-400w.png"
            className="change-settings-rectangle53"
          />
          <span className="change-settings-text08">
            <span>Email: email@gmail.com</span>
          </span>
          <span className="change-settings-text10">
            <span>Password: ............................</span>
          </span>
          <span className="change-settings-text12">Notifications: ON</span>
          <span className="change-settings-text13">
            <span>Language: English</span>
          </span>
        </div>
        <span className="change-settings-text15">
          <span>Personal Details</span>
        </span>
        <span className="change-settings-text17">
          <span>Preferences</span>
        </span>
        <Link to="/" className="change-settings-navlink button">
          Home
        </Link>
        <button className="change-settings-button button">Report</button>
        <Link to="/meeting" className="change-settings-navlink1 button">
          Meeting
        </Link>
        <Link to="/progress" className="change-settings-navlink2 button">
          Progress
        </Link>
        <img
          alt="Rectangle7375"
          src="/external/rectangle7375-l1e-700h.png"
          className="change-settings-rectangle7"
        />
        <span className="change-settings-text19">Enter new value below:</span>
        <Link to="/settings" className="change-settings-navlink3">
          <img
            alt="pastedImage"
            src="/external/pastedimage-3r24-200h.png"
            className="change-settings-pasted-image"
          />
        </Link>
        <Link to="/submitted-page" className="change-settings-navlink4">
          <div className="change-settings-group21">
            <span className="change-settings-text20">
              <span>Submit</span>
            </span>
          </div>
        </Link>
        <img
          alt="pastedImage"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6e35936c-b67e-49bd-b8fc-55f3c371bcbd/cc3118e6-db4b-455c-8615-5605107f9a3e?org_if_sml=12700"
        />
        <img
          alt="pastedImage"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6e35936c-b67e-49bd-b8fc-55f3c371bcbd/8a7b6c5b-c38b-4bd2-8fa2-a586ae5298b8?org_if_sml=12700"
        />
        <img
          alt="pastedImage"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6e35936c-b67e-49bd-b8fc-55f3c371bcbd/d6dc6710-352e-4eba-a708-0a85a3d9cb90?org_if_sml=12700"
        />
      </div>
      <textarea
        placeholder="placeholder"
        className="change-settings-textarea textarea"
      ></textarea>
    </div>
  )
}

export default ChangeSettings
