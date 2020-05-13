import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import If from '../../utils/if'

import logoImg from '../../../assets/logo/logo-bev-capital.png'
import './styles.less'
import consts from '../../../consts'
import { LoginEnum } from '../../../interfaces/enums/login'

type NavBarProps = {
  loggedIn: LoginEnum
}

export const NavBar: React.FC<NavBarProps> = ({ loggedIn }: NavBarProps): JSX.Element => {
  const history = useHistory()

  function logout(): void {
    localStorage.removeItem(consts.USER_KEY)
    history.replace('/')
  }

  return (
    <div className="header">
      <img src={logoImg} className="logo" />
      <nav className="nav-user">
        <If test={loggedIn === LoginEnum.In}>
          <a onClick={logout} className="btn btn-text">
            Sair
          </a>
        </If>

        <If test={loggedIn === LoginEnum.Out}>
          <Link to="/login" className="btn btn-text">
            Login
          </Link>
          <Link to="/register" className="btn btn-bg">
            Cadastre-se
          </Link>
        </If>
      </nav>
    </div>
  )
}
