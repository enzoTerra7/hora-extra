import { Breadcrumbs } from '@mui/material'
import React from 'react'
import * as Styles from './styles'

import { GrFormNext } from 'react-icons/gr'
import Link from '@mui/material/Link';
import { ButtonComponent, ButtonProps } from 'components/Button';

type BreadcrumbsProp = {
  href: string,
  text: React.ReactNode
}

export interface LowerBarProps {
  className?: string
  icon: React.ReactNode
  breadcrumbs: BreadcrumbsProp[]
  mainButton?: ButtonProps
  secondaryButton?: ButtonProps
  thirdButton?: ButtonProps
}

export const LowerBar = (props: LowerBarProps) => {
  return (
    <Styles.Container className={props.className} >
      <div className="left">
        <div className="icon">
          {props.icon}
        </div>
        <div className="header">
          <Breadcrumbs
            separator={<GrFormNext size={15} />}
            aria-label="breadcrumb"
          >
            {props.breadcrumbs.map((bread, index) => (
              <Link underline="hover" key={index} color="inherit" href={bread.href}>
                {bread.text}
              </Link>
            ))}
          </Breadcrumbs>
        </div>
      </div>
      <div className="right">
        {props.thirdButton && (
          <ButtonComponent {...props.thirdButton} />
        )}
        {props.secondaryButton && (
          <ButtonComponent {...props.secondaryButton} />
        )}
        {props.mainButton && (
          <ButtonComponent {...props.mainButton} />
        )}
      </div>
    </Styles.Container>
  )
}