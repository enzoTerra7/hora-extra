import React from 'react'
import * as Styles from './styles'

import { MdNotifications } from 'react-icons/md'
import { HiOutlineChevronDown } from 'react-icons/hi'
import { Avatar } from '@mui/material'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'


export interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps) => {

  const navigate = useRouter()

  const pathname = navigate.pathname;
  const userInfo = Cookies.get('user')

  return (
    <Styles.Container className={props.className} >
      <MdNotifications className="icon" />
      <Styles.UserInformations>
        <Avatar variant="square" className="userImage" src={userInfo?.avatar ? userInfo.avatar : undefined} alt="Imagem do usuário"/>
        <div className="message">
          Olá, <strong>{userInfo?.name ? userInfo.name : 'Usuário'}</strong>
        </div>
        <div className="dropdown">
          <HiOutlineChevronDown size={24} title="Ver mais informações do usuário" />
        </div>
      </Styles.UserInformations>
    </Styles.Container>
  )
}