import * as React from 'react'

import logoImg from '../../../assets/logo/logo-bev-capital.png'
import './styles.less'

export const NavBar = () => {
    return (
        <div className='header'>
            <img src={logoImg} className="logo" />
            <nav className='nav-user'>
                <a href='#' className='nav-btn nav-login'>Login</a>
                <a href='#' className='nav-btn nav-signup'>Cadastre-se</a>
            </nav>
        </div>
    )
}