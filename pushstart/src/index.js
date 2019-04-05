import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, BrowserRouter as Router ,Switch} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap';

import logo from './media/zn.svg';
import rk from './media/rk.svg';
import App from './App'
import Dashboard from './dashboard';
import Admin from './admin';
import Notfound from './notfound'
const routing = (
  <Router>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/"><img src={logo} style={{width:'30px'}} alt="Logo"></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/dashboard"><i className="far fa-server default-color"></i>Data Library</Nav.Link>
          <Nav.Link href="/dashboard"><i className="far fa-code-branch fa-rotate-90 default-color"></i>Workflows</Nav.Link>
          <Nav.Link href="/admin"><i className="far fa-play-circle default-color"></i>Scheduler</Nav.Link>
          <Nav.Link href="/admin"><i className="far fa-bug default-color"></i>Error Manager</Nav.Link>
          <Nav.Link href="/"><i className="far fa-comment-dots default-color"></i>Notifications</Nav.Link>
          <Nav.Link href="/"><i className="far fa-chart-line default-color"></i>Reports</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="/admin"><i className="far fa-question-circle"></i></Nav.Link>
          <Nav.Link href="/admin"><img src={rk} style={{width:'18px',marginBottom:'3px'}} alt="Logo"></img></Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br/>
      <Switch>
      <Route exact path="/" component={App} />
      <Route path="/admin" component={Admin} />
      <Route path="/dashboard" component={Dashboard} />
      <Route component={Notfound} />
      </Switch>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))