import { Skeleton } from '@mui/material';
import React from 'react'
import { ButtonComponent, ButtonProps } from 'components/Button';
import * as Styles from './styles'

export interface ContainerProps {
  title: string;
  children: React.ReactNode
  subtitle?: string;
  rightIcon?: React.ReactNode;
  mainButton?: ButtonProps;
  secondaryButton?: ButtonProps;
  terciaryButton?: ButtonProps;
  className?: string
  loading?: boolean
}

export const ContainerComponent = (props: ContainerProps) => {
  return (
    <Styles.Container className={props.className} >
      <Styles.Header>
        {props.loading ? (
          <div className="skeleton">
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </div>
        ) : (
          <>
            <div className="main">
              {props.rightIcon && (
                <div className="icon">
                  {props.rightIcon}
                </div>
              )}
              <div className="titles">
                <h4>
                  {props.title}
                </h4>
                {props.subtitle && (
                  <small>
                    {props.subtitle}
                  </small>
                )}
              </div>
            </div>
            <div className="buttons">
              {props.terciaryButton && <ButtonComponent {...props.terciaryButton} />}
              {props.secondaryButton && <ButtonComponent {...props.secondaryButton} />}
              {props.mainButton && <ButtonComponent {...props.mainButton} />}
            </div>
          </>
        )}
      </Styles.Header>
      {props.loading ? (
        <div className="skeleton">
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </div>
      ) : props.children}
    </Styles.Container>
  )
}