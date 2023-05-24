import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - exported project</title>
        <meta property="og:title" content="Login - exported project" />
      </Helmet>
      <div className="login-desktop1">
        <span className="login-text">Login</span>
        <div className="login-group9">
          <Link to="/settings" className="login-navlink">
            <img
              alt="Vector2373"
              src="/external/vector2373-6kli.svg"
              className="login-vector2"
            />
          </Link>
          <img
            alt="Ellipse1374"
            src="/external/ellipse1374-nb07.svg"
            className="login-ellipse1"
          />
        </div>
        <img
          alt="Rectangle7375"
          src="/external/rectangle7375-l1e-700h.png"
          className="login-rectangle7"
        />
        <span className="login-text1">Student Well-being</span>
        <span className="login-text2">Username:</span>
        <span className="login-text3">Password:</span>
        <img alt="image" src="/sun-1100h.png" className="login-image" />
        <Link to="/" className="login-navlink1">
          <div className="login-group2">
            <span className="login-text4">Login</span>
          </div>
        </Link>
        <textarea
          placeholder="placeholder"
          className="login-textarea textarea"
        ></textarea>
        <textarea
          placeholder="placeholder"
          className="login-textarea1 textarea"
        ></textarea>
      </div>
    </div>
  )
}

export default Login
