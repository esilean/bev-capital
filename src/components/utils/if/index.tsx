/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

type IFProps = {
  test: boolean
  children: React.ReactNode
}

const If: React.FC<IFProps> = ({ test, children }: IFProps): any => {
  if (test) {
    return children
  } else {
    return false
  }
}

export default If
