import * as React from 'react'

import './styles.less'

interface StockCardProps {
    name: string
}

export const StockCard = ({ name }: StockCardProps) => {
    return (
        <li>
            <div className='card'>
                <div className='card-header'>
                    <div className='title'>
                        <span className='name'>{name}</span>
                        <span>Apple</span>
                    </div>
                    <div className='close'>X</div>
                </div>
                <div className='card-price'>
                    <div className='price'>
                        $198.00
                    </div>
                    <div className='price-diff'>
                        15%
                    </div>
                </div>
                <div className='card-footer'>
                    <div className='low'>
                        <div>Mín.</div>
                        <div>197.00</div>
                    </div>
                    <div className='high'>
                        <div>Max.</div>
                        <div>200.56</div>
                    </div>
                    <div className='time'>04/05/2020 17:05:00</div>
                </div>
            </div>
        </li>
    )
}