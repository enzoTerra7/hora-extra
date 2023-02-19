import React, { useState, useEffect } from 'react'
import * as Styles from 'styles/pages/Register/styles'
import { Heading } from 'components/Heading'
import { InputComponent } from 'components/Input'
import { ButtonComponent } from 'components/Button'
import Link from 'next/link'
import axios from 'axios'

export interface RegisterProps {
  className?: string
}

const Register = (props: RegisterProps) => {

  const [name, setName] = useState('')
  const [pass, setPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [email, setEmail] = useState('')

  const makeRegister = async () => {
    try {
      await axios.post(`/api/register`, {
        name,
        password: pass,
        email
      })
    } catch{

    }
  }

  return (
    <Styles.Container className={props.className} >
      <Styles.Content>
        <Heading size='xl' className='heading'>
          <h1>
            HoursControl
          </h1>
        </Heading>
        <InputComponent
          label="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <InputComponent
          label="Senha"
          isPassword
          value={pass}
          onChange={e => setPass(e.target.value)}
        />
        <InputComponent
          label="Confimar senha"
          isPassword
        />
        <InputComponent
          label="Nome completo"
          placeholder='Insira seu nome completo'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <ButtonComponent
          model='primary'
          text="Fazer cadastro"
          onClick={makeRegister}
        />
        <small>
          <Link href="/">
            Voltar para login
          </Link>
        </small>
      </Styles.Content>
    </Styles.Container>
  )
}

export default Register