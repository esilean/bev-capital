import React from 'react'
import { FieldError } from 'react-hook-form'

import './styles.less'

type InputProps = {
  label?: string
  name: string
  type: string
  placeholder: string
  error: FieldError | undefined
  register: string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined
}

export const Input: React.FC<InputProps> = ({ label, name, type, placeholder, error, register }: InputProps): JSX.Element => {
  return (
    <div className="input">
      {label && <label>{label}</label>}
      <input type={type} name={name} placeholder={placeholder} ref={register} />
      {error && <span>Este campo é obrigatório</span>}
    </div>
  )
}
