import { AlertComponent } from '../components/Alert'

import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

export type DialogContextTypeModel = {
  showAlert: (dialog: DialogMessageModel) => void
}

export type DialogMessageModel = {
  severity: 'error' | 'warning' | 'success' | 'info'
  title: string
  description?: React.ReactNode
  className?: string
}

export type DialogProviderProps = {
  name?: string
}

const DialogContext = createContext<DialogContextTypeModel>({
  showAlert: (dialog) => {
    
  }
})

export type DialogProviderPropsWithChildren = PropsWithChildren<DialogProviderProps>

const AlertProvider: React.FC<DialogProviderPropsWithChildren> = ({
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
        <AlertComponent {...dialogMessage} removeItems={handleOnCloseDialogMessageModal}/>
      ),
    [dialogMessage] //eslint-disable-line
  )

  useEffect(() => {
    if (!dialogMessage) {
      return
    }


    const hidden = setTimeout(() => setDialogMessage(undefined), 5000)

    return () => {
      clearTimeout(hidden)
    }
  }, [dialogMessage])

  return (
    <DialogContext.Provider
      value={{
        showAlert: handleShowDialog
      }}
    >
      {children}
      {handleDialogContainer}
    </DialogContext.Provider>
  )
}

const useAlert = (): DialogContextTypeModel => {
  const context = useContext(DialogContext)

  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider')
  }

  return context
}

export { AlertProvider, useAlert }