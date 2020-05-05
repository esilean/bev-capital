import React from 'react'

import { NavBar } from '../components/template/navbar'
import { Footer } from '../components/template/footer'

import { Home } from '../pages/home'

export const App = () => (
  <div className="container">
    <NavBar />
    <div className="content">
      <Home />
    </div>
    <Footer />
  </div>
)
