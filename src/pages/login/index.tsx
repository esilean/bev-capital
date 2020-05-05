import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { Input } from '../../components/template/input/input'

import logoImg from '../../assets/logo/logo-bev-capital.png'
import './styles.less'

interface LoginData {
  email: string
  password: string
}

export const Login = () => {
  const history = useHistory()

  const { register, handleSubmit, errors } = useForm<LoginData>()

  function onSubmit(data: LoginData) {
    console.log(data)
    history.replace('/')
  }

  return (
    <div className="login">
      <img src={logoImg} alt="Logo" />
      <h2>Bev Capital</h2>
      <section className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Email"
            type="text"
            name="email"
            placeholder="Informe seu e-mail"
            error={errors.email}
            register={register({ required: true })}
          />

          <Input
            label="Senha"
            type="password"
            name="password"
            placeholder="Informe sua senha"
            error={errors.password}
            register={register({ required: true })}
          />

          <button className="btn btn-bg" type="submit">
            Entrar
          </button>
        </form>
      </section>
    </div>
  )
}
