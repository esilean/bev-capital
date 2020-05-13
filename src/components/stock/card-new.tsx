import React from 'react'

import './styles.less'
import { useForm } from 'react-hook-form'

type StockCardNewProps = {
  handleAdd: (symbol: string) => Promise<void>
}

type StockAddData = {
  symbol: string
}

export const StockCardNew: React.FC<StockCardNewProps> = ({ handleAdd }: StockCardNewProps) => {

  const { register, handleSubmit, reset } = useForm<StockAddData>()

  async function addStock({ symbol }: StockAddData): Promise<void> {
    if (symbol !== '') {
      handleAdd(symbol)
      reset({ symbol: '' })
    }
  }

  return (
    <li>
      <form onSubmit={handleSubmit(addStock)}>
        <div className="card-new">

          <span>Fill in stock symbol</span>
          <input
            autoComplete='off'
            type='text'
            name='symbol'
            maxLength={15}
            ref={register({ required: true })}
          />

        </div>
      </form>
    </li >
  )
}
