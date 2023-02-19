import React, { ButtonHTMLAttributes } from 'react'
import * as Styles from './styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  model: 'primary' | 'secondary' | 'terciary' | 'other' | 'error'
  text: React.ReactNode
  leftIcon?: React.ReactNode
  rigthIcon?: React.ReactNode
  className?: string
  name?: string
}

export const ButtonComponent = (props: ButtonProps) => {
  return(
    <Styles.Container name={props.name} className={props.className} id={props.model} {...props}>
      {props.leftIcon}
      {props.text}
      {props.rigthIcon}
    </Styles.Container>
  )
}