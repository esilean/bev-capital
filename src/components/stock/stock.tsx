import * as React from 'react'

import { StockCard } from './card'

import './styles.less'

export const Stocks = () => {
  return (
    <ul className="stocks">
      <StockCard name="Apple" />
      <StockCard name="Facebook" />
      <StockCard name="Apple" />
      <StockCard name="Facebook" />
    </ul>
  )
}
