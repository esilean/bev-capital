import React from 'react'

type CBProps = {
  color: string
}

export const CloseButton: React.FC<CBProps> = ({ color }: CBProps) => {
  return (
    <button type='button' className='toastr-close-button' style={{ color }}>
      ✖
    </button>
  )
}
