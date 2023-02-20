import React, { useState, useEffect } from 'react'
import { LowerBar, LowerBarProps } from 'components/Lowbar'
import { Navbar } from 'components/Navbar'
import { Sidebar } from 'components/Sidebar'
import * as Styles from './styles'

export interface LayoutProps {
  lowerBarProps: LowerBarProps
  children: React.ReactNode
  className?: string
}

export const Layout = (props: LayoutProps) => {
  return (
    <Styles.Container className={props.className} >
      <Sidebar />
      <div className="content">
        <Navbar />
        <LowerBar {...props.lowerBarProps} />
        <Styles.Content>
          {props.children}
        </Styles.Content>
      </div>
    </Styles.Container>
  )
}