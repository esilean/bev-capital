import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import toast from '../../components/toastr'

import { Input } from '../../components/template/input/input'
import logoImg from '../../assets/logo/logo-bev-capital.png'
import './styles.less'

import api from '../../services/api'
import consts from '../../consts'

type LoginData = {
  email: string
  password: string
}

type LoginDataResp = {
  id: string
  name: string
  email: string
  token: string
}

export const Login: React.FC = () => {
  const history = useHistory()

  const { register, handleSubmit, errors } = useForm<LoginData>()

  async function onSubmit(data: LoginData): Promise<void> {
    try {
      const resp = await api.post<LoginDataResp>('/token', data)

      localStorage.setItem(consts.USER_KEY, resp.data.token)

      history.replace('/')
    } catch (error) {
      toast.error('User and/or password invalid.')
    }
  }

  return (
    <div className="login">
      <img src={logoImg} alt="Logo" />
      <h2>Bev Capital</h2>
      <section className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Email"
            type="email"
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
