import React from 'react'

import Stocks from '../../components/stock/stock'

import './styles.less'

export default function Home() {
    return (
        <div className='home'>
            <Stocks />
        </div>
    )
}