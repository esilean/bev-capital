import React from 'react'

import './styles.less'
import { LoginEnum } from '../../interfaces/enums/login'

type StockCardProps = {
  loggedIn: LoginEnum
  symbol: string
  website: string
  name: string
  price?: number
  low?: number
  high?: number
  previousClosePrice?: number
  latestPriceTime?: Date,
  handleDelete: (symbol: string) => Promise<void>
}

export const StockCard: React.FC<StockCardProps> = ({ loggedIn, symbol, name, website, price, low, high, previousClosePrice, latestPriceTime, handleDelete }: StockCardProps): JSX.Element => {
  const priceDiff = (previousClosePrice && price) ? (((price / previousClosePrice) - 1) * 100.00) : 0.00

  function deleteStock(symbol: string): void {
    handleDelete(symbol)
  }

  return (
    <li>
      <div className="card">
        <div className="card-header">
          <div className="title">
            <span className="name">{symbol}</span>
            <a href={website} target='_blank' rel="noopener noreferrer" >{name}</a>
          </div>
          {loggedIn === LoginEnum.In && (<button type='button' className='btn-text' onClick={(): void => deleteStock(symbol)}>X</button>)}
        </div>
        <div className="card-price">
          <div className="price">{(price) ? `\$ ${price}` : '-'}</div>
          <div className="price-diff" style={(priceDiff >= 0) ? { color: '#14bb14' } : { color: 'red' }}>
            {(priceDiff * 1.00).toFixed(2)} %
          </div>
        </div>
        <div className="card-footer">
          <div className="low">
            <div>Mín.</div>
            <div>{(low) ? `\$ ${(low / 1.00).toFixed(2)}` : '-'}</div>
          </div>
          <div className="high">
            <div>Max.</div>
            <div>{(high) ? `\$ ${(high / 1.00).toFixed(2)}` : '-'}</div>
          </div>
          <div className="time">{(latestPriceTime) ? `${new Date(latestPriceTime).toLocaleString()}` : 'no data'}</div>
        </div>
      </div>
    </li >
  )
}
