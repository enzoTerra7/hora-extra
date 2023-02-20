import React, { useState, useEffect } from 'react'
import * as Styles from 'styles/pages/Login/styles'
import { Heading } from 'components/Heading'
import { InputComponent } from 'components/Input'
import { ButtonComponent } from 'components/Button'
import Link from 'next/link'
import axios from 'axios'
import Cookies from 'js-cookie';
import { Loader } from 'components/Loader'
import { useAlert } from 'src/hooks/useAlert'
import { GetServerSideProps } from 'next'

export interface LoginProps {
  className?: string
}

const Login = (props: LoginProps) => {

  const { showAlert } = useAlert()

  const [pass, setPass] = useState('')
  const [email, setEmail] = useState('')

  const [sending, setSending] = useState(false)

  const makeLogin = async () => {
    try {
      setSending(true)
      const { data } = await axios.post(`/api/login`, {
        password: pass,
        email
      })
      console.log(data)
      Cookies.set('token', data.data.token.id, {
        immutable: true,
        expires: 8
      })
      Cookies.set('user', JSON.stringify(data.data.user), {
        immutable: true,
        expires: 7
      })
      Cookies.set('user-id', data.data.user.id, {
        immutable: true,
        expires: 7
      })
      showAlert({
        severity: 'success',
        title: 'Login realizado com sucesso.'
      })
    } catch(e){
      console.log(e)
    } finally {
      setSending(false)
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
        <ButtonComponent
          model='primary'
          text="Fazer login"
          onClick={() => makeLogin()}
        />
        <small>
          Não tem conta?
          <Link href="/register">
            Cria uma agora caraí!
          </Link>
        </small>
      </Styles.Content>
      <Loader show={sending} />
    </Styles.Container>
  )
}

export default Login

export const getServerSideProps: GetServerSideProps = async (props) => {
  const token = props.req.cookies.token
  console.log(token)

  if(token) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false
      }
    }
  } else {
    return {
      props: {}
    }
  }
}