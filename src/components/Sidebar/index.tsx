import React, { useState, useEffect } from 'react'
import * as Styles from './styles'

import { MdOtherHouses, MdInsertChart, MdGroups, MdEngineering, MdAutoAwesomeMotion, MdMonetizationOn, MdPinDrop, MdAdminPanelSettings, MdKeyboardArrowDown, MdMiscellaneousServices } from 'react-icons/md'
import { BsFillKeyFill } from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'
import { useRouter } from 'next/router'
import { Heading } from 'components/Heading'

type LinkProps = {
  href: string
  icon: React.ReactNode
  label: React.ReactNode
  disabled: boolean
  subItems?: LinkProps[]
  myId?: number
  recognize: string
}

export interface SidebarProps {
  className?: string
}

export const Sidebar = (props: SidebarProps) => {

  const navigate = useRouter()

  const [usedId, setUsedId] = useState(0)
  const [showChild, setShowChild] = useState<number | undefined>(-1)
  const [links, setLinks] = useState<LinkProps[]>([
    {
      href: '/dashboard',
      icon: <MdOtherHouses size={20} title='Ir para o ínico' />,
      label: 'Início',
      disabled: usedId === 0,
      recognize: 'home'
    },
    {
      href: '/clients',
      icon: <MdGroups size={20} title='Ir para o Clientes' />,
      label: 'Clientes',
      disabled: usedId === 1,
      recognize: 'clients'
    },
    {
      href: '/admins',
      icon: <MdEngineering size={20} title='Ir para o Administradores' />,
      label: 'Administradores',
      disabled: usedId === 2,
      recognize: 'adms'
    },
    {
      href: '',
      icon: <MdAutoAwesomeMotion size={20} title='Ir para o Serviços' />,
      label: 'Serviços',
      disabled: (usedId === 3 || usedId === 3.1 || usedId === 3.2),
      recognize: 'services',
      myId: 3,
      subItems: [
        {
          href: '/',
          icon: <MdMiscellaneousServices size={20} title='Ir para o Serviços' />,
          label: 'Em andamento',
          recognize: 'services_progress',
          disabled: usedId === 3.1
        },
        {
          href: '/avaliable-services',
          icon: <BiWorld size={20} title='Ir para a tela de Serviços Disponíveis' />,
          recognize: 'services_avaliable',
          label: 'Disponíveis',
          disabled: usedId === 3.2
        }
      ]
    },
    {
      href: '/consortium',
      icon: <MdMonetizationOn size={20} title='Ir para o Consórcio' />,
      label: 'Consórcio',
      disabled: usedId === 4,
      recognize: 'consortium'
    },
    {
      href: '/',
      icon: <BsFillKeyFill size={20} title='Ir para o Permissões' />,
      label: 'Permissões',
      disabled: usedId === 5,
      recognize: 'permissions'
    },
    {
      href: '',
      icon: <MdInsertChart size={20} title='Ir para o Permissões' />,
      label: 'Cadastros',
      recognize: 'registers',
      myId: 6,
      disabled: (usedId === 6 || usedId === 6.1 || usedId === 6.2),
      subItems: [
        {
          href: '/expansionist',
          icon: <MdAdminPanelSettings size={20} title='Ir para Expansionistas' />,
          recognize: 'expansionist',
          label: 'Expansionistas',
          disabled: usedId === 6.1
        },
        {
          href: '/jbsPlants',
          icon: <MdPinDrop size={20} title='Ir para Plantas JBS' />,
          recognize: 'plants',
          label: 'Plantas JBS',
          disabled: usedId === 6.2
        }
      ]
    },
  ])
  const [expansive, setExpansive] = useState(false)

  return (
    <Styles.Container expansive={expansive} className={props.className}>
      <Heading size='xxl' className='logo hidden'>
        <h3>
          HOURS CONTROL
        </h3>
      </Heading>
      <Styles.linksContainer>
        {links.map((link, index) => (
          <>
            <Styles.LinkComponent expansive={expansive} key={index} disabled={link.disabled} onClick={() => link.disabled ? '' : (link.subItems && link.myId) ? setShowChild(e => e == link.myId ? -1 : link.myId) : navigate.push(link.href)}
              preSeted={showChild == link.myId}
              name={link.recognize}
            >
              <span className="icon">
                {link.icon}
              </span>
              <div className="title">
                {link.label}
              </div>
              {link.subItems && (
                <div className="dropdown" id={showChild == link.myId ? 'rotated' : 'normal'}>
                  <MdKeyboardArrowDown size={20} />
                </div>
              )}
            </Styles.LinkComponent>
            {/* {link.subItems && (
              <Styles.SubLinkContainer id={(showChild == link.myId || (currentPage >= Number(link.myId) && currentPage < (Number(link.myId) + 1))) ? 'show' : 'hidden'}>
                {link.subItems.map((sublink, idx) => (
                  <Styles.SubLinkComponent id={(showChild == link.myId || (currentPage >= Number(link.myId) && currentPage < (Number(link.myId) + 1))) ? 'show' : 'hidden'} expansive={expansive} key={idx} disabled={sublink.disabled} onClick={() => sublink.disabled ? '' : navigate(sublink.href)} name={sublink.recognize}>
                    <span className="icon">
                      {sublink.icon}
                    </span>
                    <div className="title">
                      {sublink.label}
                    </div>
                  </Styles.SubLinkComponent>
                ))}
              </Styles.SubLinkContainer>
            )} */}
          </>
        ))}
      </Styles.linksContainer>
    </Styles.Container>
  )
}