import { Alert, AlertTitle, Snackbar } from '@mui/material'
import React, { useState } from 'react'

export interface AlertProps {
  className?: string
  severity: 'error' | 'warning' | 'success' | 'info'
  title: string
  description?: React.ReactNode
  removeItems: () => void
}

export const AlertComponent = (props: AlertProps) => {
  const [open, setOpen] = useState(true);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    props.removeItems();
  };

  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    style={{
      maxWidth: '450px'
    }}
    >
      <Alert qa-id="alertContainer" onClose={handleClose} severity={props.severity} variant="filled">
        {props.description ? (
          <>
            <AlertTitle style={{fontWeight: '700'}}>{props.title}</AlertTitle>
            {props.description}
          </>
        ) : props.title}
      </Alert>
    </Snackbar>
  )
}