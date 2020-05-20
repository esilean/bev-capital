import React, { useEffect, useState } from 'react'
import { Flash } from '../utils/animations/flash.price'

import './styles.less'
import { LoginEnum } from '../../interfaces/enums/login'
import { UserStockData, StockPrice } from './types/stock.type'

import io from 'socket.io-client'
import consts from '../../consts'

type StockCardProps = {
  loggedIn: LoginEnum
  handleDelete: (symbol: string) => Promise<void>
  userStock: UserStockData
}

export const StockCard: React.FC<StockCardProps> = ({ loggedIn, handleDelete, userStock }: StockCardProps): JSX.Element => {
  const { symbol, stock } = userStock
  const { name, website } = stock

  const [stockPrice, setStockPrice] = useState<StockPrice>({
    symbol,
    open: 0,
    close: 0,
    high: 0,
    low: 0,
    latestPrice: userStock.stock.priceToday.latestPrice,
    latestPriceTime: userStock.stock.priceToday.latestPriceTime,
    previousClosePrice: userStock.stock.priceToday.previousClosePrice,
    changePercent: userStock.stock.priceToday.changePercent,
  })
  function deleteStock(symbol: string): void {
    handleDelete(symbol)
  }

  useEffect(() => {
    const sockio = io(`${consts.IO_URL}${symbol}`)
    sockio.on(symbol, function (data: StockPrice) {
      setStockPrice(data)
    })

    return function cleanup(): void {
      sockio.disconnect()
    }
  }, [])

  return (
    <li>
      <Flash price={stockPrice.latestPrice}>
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
            <div className="price">{`\$ ${stockPrice.latestPrice}`}</div>
            <div className="price-diff" style={stockPrice.changePercent >= 0 ? { color: '#14bb14' } : { color: 'red' }}>
              {(stockPrice.changePercent * 1.0).toFixed(2)}%
            </div>
          </div>
          <div className="card-footer">
            <div className="low">
              <div>Mín.</div>
              <div>{stockPrice.low > 0 ? `\$ ${(stockPrice.low / 1.0).toFixed(2)}` : '-'}</div>
            </div>
            <div className="high">
              <div>Max.</div>
              <div>{stockPrice.high > 0 ? `\$ ${(stockPrice.high / 1.0).toFixed(2)}` : '-'}</div>
            </div>
            <div className="time">
              {stockPrice.latestPriceTime ? `${new Date(stockPrice.latestPriceTime).toLocaleString()}` : 'no data'}
            </div>
          </div>
        </div>
      </Flash>
    </li>
  )
}
