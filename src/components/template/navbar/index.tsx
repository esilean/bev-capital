import React from 'react'
import { Link } from 'react-router-dom'

import logoImg from '../../../assets/logo/logo-bev-capital.png'
import './styles.less'

export const NavBar = () => {
  return (
    <div className="header">
      <img src={logoImg} className="logo" />
      <nav className="nav-user">
        <Link to="/login" className="btn btn-text">
          Sair
        </Link>
        <Link to="/login" className="btn btn-text">
          Login
        </Link>
        <Link to="/register" className="btn btn-bg">
          Cadastre-se
        </Link>
      </nav>
    </div>
  )
}
