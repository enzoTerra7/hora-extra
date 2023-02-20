import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

import { ButtonProps } from 'components/Button'
import { Dialog } from 'components/Dialog'

export type DialogContextTypeModel = {
  showDialog: (dialog: DialogMessageModel) => void
}

export type DialogMessageModel = {
  title?: string
  img?: React.ReactNode
  jsx?: JSX.Element
  message?: string
  mainButton?: ButtonProps
  secondaryButton?: ButtonProps
  allowOverlayClick?: boolean
  withoutClose?: boolean
  withoutFilter?: boolean
  error?: boolean
  showCloseButton?: boolean
}

export type DialogProviderProps = {
  name?: string
}

const DialogContext = createContext<DialogContextTypeModel>({
  showDialog: (dialog) => {
    
  }
})

export type DialogProviderPropsWithChildren = PropsWithChildren<DialogProviderProps>

const DialogProvider: React.FC<DialogProviderPropsWithChildren> = ({
  children
}: DialogProviderPropsWithChildren) => {
  const [dialogMessage, setDialogMessage] =
    useState<DialogMessageModel | undefined>(undefined)

  const handleShowDialog = useCallback((newMessage: DialogMessageModel) => {
    setDialogMessage(newMessage)
  }, [])

  const handleOnCloseDialogMessageModal = useCallback(() => {
    setDialogMessage(undefined)
  }, [dialogMessage]) //eslint-disable-line

  const handleDialogContainer = useMemo(
    () =>
      dialogMessage && (
        <Dialog onClose={handleOnCloseDialogMessageModal} {...dialogMessage} />
      ),
    [dialogMessage] //eslint-disable-line
  )

  return (
    <DialogContext.Provider
      value={{
        showDialog: handleShowDialog
      }}
    >
      {children}
      {handleDialogContainer}
    </DialogContext.Provider>
  )
}

const useDialog = (): DialogContextTypeModel => {
  const context = useContext(DialogContext)

  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider')
  }

  return context
}

export { DialogProvider, useDialog }