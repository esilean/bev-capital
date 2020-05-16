import { LoginEnum } from '../../../interfaces/enums/login'

export type StocksProps = {
  loggedIn: LoginEnum
}

export type UserData = {
  id: string
  name: string
  email: string
  stocks: UserStockData[]
}

export type UserStockData = {
  id: string
  symbol: string
  qty: number
  avgPrice: number
  stock: StockData
}

export type StockData = {
  name: string
  exchange: string
  website: string
  priceToday: PriceData
}

export type PriceData = {
  open: number
  close: number
  high: number
  low: number
  latestPrice: number
  latestPriceTime: Date
  delayedPrice: number
  delayedPriceTime: Date
  previousClosePrice: number
}

export type StockAddedData = {
  id: string
  symbol: string
  qty: number
  avgPrice: number
}
