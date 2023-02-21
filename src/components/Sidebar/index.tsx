import React, { useState, useEffect } from 'react'
import * as Styles from './styles'

import { MdOtherHouses, MdKeyboardArrowDown, MdMonetizationOn } from 'react-icons/md'
import { BiUser } from 'react-icons/bi'
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
      disabled: navigate.pathname.includes('/dashboard'),
      recognize: 'home'
    },
    {
      href: '/my-profile',
      icon: <BiUser size={20} title='Ir para meu perfil' />,
      label: 'Meu perfil',
      disabled: navigate.pathname.includes('/my-profile'),
      recognize: 'myProfile'
    },
    {
      href: '/extra-hours',
      icon: <MdMonetizationOn size={20} title='Ir para horas extras' />,
      label: 'Extras',
      disabled: navigate.pathname.includes('/extra-hours'),
      recognize: 'horasExtras'
    }
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