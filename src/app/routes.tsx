import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { toast } from 'react-toastify'

import { App } from './app'
import { Login } from '../pages/login'
import { Register } from '../pages/register'

toast.configure({
  autoClose: 3500,
})

export const Routes: React.FC = () => {
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
