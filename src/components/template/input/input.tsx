import * as React from 'react'
import { FieldError } from 'react-hook-form'

import './styles.less'

interface InputProps {
  label?: string
  name: string
  type: string
  placeholder: string
  error: FieldError
  register: any
}

export const Input = ({
  label,
  name,
  type,
  placeholder,
  error,
  register,
}: InputProps) => {
  return (
    <div className="input">
      {label && <label>{label}</label>}
      <input type={type} name={name} placeholder={placeholder} ref={register} />
      {error && <span>Este campo é obrigatório</span>}
    </div>
  )
}
