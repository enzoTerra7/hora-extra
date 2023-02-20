import React, { ButtonHTMLAttributes } from 'react'
import * as Styles from './styles'

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode
  className?: string
  model?: 'primary' | 'secondary' | 'terciary' | 'other' | 'error' | 'active' | 'inactive'
  name?: string
}

export const IconButton = (props: IconButtonProps) => {
  return(
    <Styles.Container name={props.name} className={props.className} {...props} id={props.model || 'icon'}>
      {props.icon}
    </Styles.Container>
  )
}