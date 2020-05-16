import React from 'react'

import './styles.less'
import { LoginEnum } from '../../interfaces/enums/login'
import { UserStockData } from './types/stock.type'

type StockCardProps = {
  loggedIn: LoginEnum
  handleDelete: (symbol: string) => Promise<void>
  userStock: UserStockData
}

export const StockCard: React.FC<StockCardProps> = ({ loggedIn, handleDelete, userStock }: StockCardProps): JSX.Element => {
  const { symbol, stock } = userStock
  const { name, website, priceToday } = stock
  const { low, high, latestPrice, latestPriceTime, previousClosePrice } = priceToday

  const priceDiff = previousClosePrice && latestPrice ? (latestPrice / previousClosePrice - 1) * 100.0 : 0.0

  function deleteStock(symbol: string): void {
    handleDelete(symbol)
  }

  return (
    <li>
      <div className="card">
        <div className="card-header">
          <div className="title">
            <span className="name">{symbol}</span>
            <a href={website} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </div>
          {loggedIn === LoginEnum.In && (
            <button type="button" className="btn-text" onClick={(): void => deleteStock(symbol)}>
              X
            </button>
          )}
        </div>
        <div className="card-price">
          <div className="price">{latestPrice ? `\$ ${latestPrice}` : '-'}</div>
          <div className="price-diff" style={priceDiff >= 0 ? { color: '#14bb14' } : { color: 'red' }}>
            {(priceDiff * 1.0).toFixed(2)} %
          </div>
        </div>
        <div className="card-footer">
          <div className="low">
            <div>Mín.</div>
            <div>{low ? `\$ ${(low / 1.0).toFixed(2)}` : '-'}</div>
          </div>
          <div className="high">
            <div>Max.</div>
            <div>{high ? `\$ ${(high / 1.0).toFixed(2)}` : '-'}</div>
          </div>
          <div className="time">{latestPriceTime ? `${new Date(latestPriceTime).toLocaleString()}` : 'no data'}</div>
        </div>
      </div>
    </li>
  )
}
