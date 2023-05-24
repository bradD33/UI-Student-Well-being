import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Login from './views/login'
import Meeting from './views/meeting'
import Home from './views/home'
import SubmittedPage from './views/submitted-page'
import Help from './views/help'
import Progress from './views/progress'
import Settings from './views/settings'
import ChangeSettings from './views/change-settings'
import Report from './views/report'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Login} exact path="/login" />
        <Route component={Meeting} exact path="/meeting" />
        <Route component={Home} exact path="/" />
        <Route component={SubmittedPage} exact path="/submitted-page" />
        <Route component={Help} exact path="/help" />
        <Route component={Progress} exact path="/progress" />
        <Route component={Settings} exact path="/settings" />
        <Route component={ChangeSettings} exact path="/change-settings" />
        <Route component={Report} exact path="/report" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
