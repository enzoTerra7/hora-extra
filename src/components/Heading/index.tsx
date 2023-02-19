import React, { useState, useEffect } from 'react'
import * as Styles from './styles'

export interface HeadingProps {
  className?: string
  size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  children: React.ReactNode
}

export const Heading = (props: HeadingProps) => {
  return(
    <Styles.Container className={props.className} id={props.size}>
      {props.children}
    </Styles.Container>
  )
}