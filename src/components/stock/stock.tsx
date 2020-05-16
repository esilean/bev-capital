import React, { useEffect, useState } from 'react'
import toast from '../toastr'

import If from '../utils/if'

import { StockCard } from './card'
import { StockCardNew } from './card-new'

import './styles.less'
import { LoginEnum } from '../../interfaces/enums/login'
import api from '../../services/api'
import consts from '../../consts'

import socketioClient from 'socket.io-client'
import { usePrevious } from '../utils/hooks/usePrevious'
import { StocksProps, UserStockData, UserData, StockAddedData } from './types/stock.type'

export const Stocks: React.FC<StocksProps> = ({ loggedIn }: StocksProps) => {
  const [stocks, setStocks] = useState<UserStockData[]>([])
  const stocksPrev = usePrevious(stocks)

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
        avgPrice: 0,
      }

      await api.post<StockAddedData>('/usersstock/', data, {
        headers: { Authorization: `Bearer ${localStorage.getItem(consts.USER_KEY)}` },
      })
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) toast.info('Stock is not avaiable.')
        if (error.response.status === 400) toast.warn(error.response.data.message)
      } else {
        toast.error('Error adding stock. Contact the admin...')
      }
    } finally {
      if (consts.USER_ID) loadStocks(consts.USER_ID)
    }
  }
  async function deleteStock(symbol: string): Promise<void> {
    try {
      await api.delete(`/usersstock/${symbol}`, { headers: { Authorization: `Bearer ${localStorage.getItem(consts.USER_KEY)}` } })

      const updatedStocks = stocks.filter((stock) => stock.symbol !== symbol)
      setStocks(updatedStocks)
    } catch (error) {
      toast.error('Error removing stock. Try again later...')
    }
  }

  useEffect(() => {
    if (consts.USER_ID) loadStocks(consts.USER_ID)
  }, [])

  useEffect(() => {
    const sockio = socketioClient(consts.IO_URL)

    sockio.on('updateStocks', () => {
      if (consts.USER_ID) loadStocks(consts.USER_ID)
    })
  }, [])

  return (
    <ul className="stocks">
      {stocks.map((us) => (
        <StockCard key={us.id} loggedIn={loggedIn} handleDelete={deleteStock} userStock={us} />
      ))}
      <If test={loggedIn === LoginEnum.In}>{stocks.length < 12 && <StockCardNew handleAdd={addStock} />}</If>
    </ul>
  )
}
