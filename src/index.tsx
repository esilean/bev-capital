import React from 'react'
import ReactDOM from 'react-dom'

import { Routes } from './app/routes'

import './styles/all.less'

ReactDOM.render(
  <React.StrictMode>
    <Routes></Routes>
  </React.StrictMode>,
  document.getElementById('root')
)
