import React from 'react'

import StockCard from './card'

import './styles.less'

export default function Stocks() {
    return (
        <ul className='stocks'>
            <StockCard name='APPL' />
            <StockCard name='PSA' />
            <StockCard name='FB' />
            <StockCard name='AWR' />
            <StockCard name='DIS' />
            <StockCard name='TSLA' />
            <StockCard name='E' />
            <StockCard name='TEX' />
            <StockCard name='SBUK' />
        </ul>
    )
}