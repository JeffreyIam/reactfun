import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

var App = require('../components/ToDo')
var Main = require('../components/Main')
var Spreadsheet = require('../components/SpreadSheet')

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={App} />
      <Route path='spreadsheet' component={Spreadsheet} />
    </Route>
  </Router>
)

module.exports = routes