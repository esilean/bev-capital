import React, { useEffect, useState } from 'react'
import toast from '../toastr'

import If from '../utils/if'

import { StockCard } from './card'
import { StockCardNew } from './card-new'

import './styles.less'
import { LoginEnum } from '../../interfaces/enums/login'
import api from '../../services/api'
import consts from '../../consts'

type StocksProps = {
  loggedIn: LoginEnum
}

type UserData = {
  id: string
  name: string
  email: string
  stocks: UserStockData[]
}

type UserStockData = {
  id: string
  symbol: string
  qty: number
  avgPrice: number
  stock: StockData
}

type StockData = {
  name: string
  exchange: string
  website: string
  priceToday: PriceData
}

type PriceData = {
  open?: number
  close?: number
  high?: number
  low?: number
  latestPrice?: number
  latestPriceTime?: Date
  delayedPrice?: number
  delayedPriceTime?: Date
  previousClosePrice?: number
}

type StockAddedData = {
  id: string
  symbol: string
  qty: number
  avgPrice: number
}

export const Stocks: React.FC<StocksProps> = ({ loggedIn }: StocksProps) => {
  const [stocks, setStocks] = useState<UserStockData[]>([])

  async function loadStocks(id: string): Promise<void> {
    try {
      const response = await api.get<UserData>(`/users/${id}`)
      setStocks(response.data.stocks)
    } catch (error) {
      toast.error('Error loading Stocks. Try again later...')
    }
  }
  async function addStock(symbol: string): Promise<void> {
    try {

      const data = {
        symbol: symbol.toUpperCase(),
        qty: 0,
        avgPrice: 0
      }

      await api.post<StockAddedData>('/usersstock/', data,
        { headers: { 'Authorization': `Bearer ${localStorage.getItem(consts.USER_KEY)}` } })

      loadStocks('8a541124-04ee-45ae-90a0-7f431c83d7a1')

    } catch (error) {
      toast.error('Error adding stock. Try again later...')
    }
  }
  async function deleteStock(symbol: string): Promise<void> {
    try {

      await api.delete(`/usersstock/${symbol}`, { headers: { 'Authorization': `Bearer ${localStorage.getItem(consts.USER_KEY)}` } })

      const updatedStocks = stocks.filter(stock => stock.symbol !== symbol)
      setStocks(updatedStocks)

    } catch (error) {
      toast.error('Error removing stock. Try again later...')
    }
  }

  useEffect(() => {
    loadStocks('8a541124-04ee-45ae-90a0-7f431c83d7a1')
  }, [])

  return (
    <ul className="stocks">
      {stocks.map((stock) => (
        <StockCard
          key={stock.id}
          loggedIn={loggedIn}
          symbol={stock.symbol}
          name={stock.stock.name}
          price={stock.stock.priceToday.latestPrice}
          low={stock.stock.priceToday.low}
          high={stock.stock.priceToday.high}
          previousClosePrice={stock.stock.priceToday.previousClosePrice}
          latestPriceTime={stock.stock.priceToday.latestPriceTime}
          handleDelete={deleteStock}
        />
      ))}
      <If test={loggedIn === LoginEnum.In}>
        {(stocks.length < 9) && (<StockCardNew handleAdd={addStock} />)}
      </If>
    </ul>
  )
}
