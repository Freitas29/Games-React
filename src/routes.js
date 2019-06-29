import React, {Component} from 'react'

import { BrowserRouter,Switch, Route, Link } from 'react-router-dom';
import Main from './pages/main/index.js'

const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Main }/>
      </Switch>
    </BrowserRouter>
)

export default Routes
