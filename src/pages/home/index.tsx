import React from 'react'

import { Stocks } from '../../components/stock/stock'

import './styles.less'
import { LoginEnum } from '../../interfaces/enums/login'

type HomeProps = {
  loggedIn: LoginEnum
}

export const Home: React.FC<HomeProps> = ({ loggedIn }: HomeProps) => {
  return (
    <div className="home">
      <Stocks loggedIn={loggedIn} />
    </div>
  )
}
