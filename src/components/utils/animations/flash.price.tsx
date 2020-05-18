import React, { useRef, useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import { usePrevious } from '../hooks/usePrevious'

type FlashProps = {
  children: React.ReactNode
  timeout?: number
  price: number
}

export const Flash: React.FC<FlashProps> = ({ children, price, timeout = 200 }: FlashProps): JSX.Element => {
  const [flash, setFlash] = useState(false)
  const [classNames, setClassNames] = useState('')
  const prevPrice = usePrevious(price)

  useEffect(() => {
    if (flash) {
      setFlash(false)
    }
  }, [flash])

  useEffect(() => {
    if (prevPrice) {
      if (price > prevPrice) setClassNames('flashup')
      else if (price < prevPrice) setClassNames('flashdown')
      else setClassNames('')
    }

    setFlash(true)
  }, [price])

  const nodeRef = useRef(null)
  return (
    <CSSTransition key="flashKey" nodeRef={nodeRef} in={flash} timeout={timeout} classNames={classNames}>
      <div ref={nodeRef}>{children}</div>
    </CSSTransition>
  )
}
