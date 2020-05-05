import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { App } from './app'
import { Login } from '../pages/login'
import { Register } from '../pages/register'

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  )
}
