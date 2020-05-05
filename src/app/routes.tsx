import * as React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { App } from './app'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  )
}
