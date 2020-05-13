import React, { useState, useEffect } from 'react'

import { NavBar } from '../components/template/navbar'
import { Footer } from '../components/template/footer'

import { Home } from '../pages/home'
import consts from '../consts'
import api from '../services/api'
import { LoginEnum } from '../interfaces/enums/login'

export const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<LoginEnum>(LoginEnum.None)

  const token = localStorage.getItem(consts.USER_KEY)

  useEffect(() => {
    async function validateToken(): Promise<void> {
      try {
        const response = await api.post('/token/verify', { token })
        if (response.data) setLoggedIn(LoginEnum.In)
        else setLoggedIn(LoginEnum.Out)
      } catch (error) {
        setLoggedIn(LoginEnum.Out)
      }
    }

    validateToken()
  }, [token])

  return (
    <div className="container">
      <NavBar loggedIn={loggedIn} />
      <div className="content">
        <Home loggedIn={loggedIn} />
      </div>
      <Footer />
    </div>
  )
}
