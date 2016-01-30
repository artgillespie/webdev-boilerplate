import "./styles/main.styl"

import { render } from 'react-dom'
import React from 'react'
import { Router, Route, Link } from 'react-router'
import { browserHistory } from 'react-router'

const About = React.createClass({
  render() {
    return <h1>Hello, About!</h1>
  }
})

const Inbox = React.createClass({
  render() {
    return <h1>Hello, Inbox!</h1>
  }
})

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

render((
  <Router history={browserHistory}>
    <Route path="/" components={App}>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox} />
    </Route>
  </Router>
), document.getElementById("app"))
