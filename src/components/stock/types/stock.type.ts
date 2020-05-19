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
  priceToday: StockPrice
}

export type StockPrice = {
  symbol: string
  open: number
  close: number
  high: number
  low: number
  latestPrice: number
  latestPriceTime: Date
  changePercent: number
  previousClosePrice: number
}

export type StockAddedData = {
  id: string
  symbol: string
  qty: number
  avgPrice: number
}
