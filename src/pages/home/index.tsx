import * as React from 'react'

import { Stocks } from '../../components/stock/stock'

import './styles.less'

export const Home = () => {
  return (
    <div className="home">
      <Stocks />
    </div>
  )
}
