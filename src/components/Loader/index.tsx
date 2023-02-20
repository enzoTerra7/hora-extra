import { CircularProgress } from '@mui/material'
import React from 'react'
import * as Styles from './styles'

export interface LoadingProps {
  className?: string
  show: boolean
}

export const Loader = (props: LoadingProps) => {
  return(
    <Styles.Container className={props.className} hidden={!props.show} >
      <CircularProgress />
    </Styles.Container>
  )
}