import { InputComponent } from 'components/Input'
import React, { ChangeEvent, useCallback, useMemo } from 'react'
import { ButtonComponent, ButtonProps } from 'components/Button'


import * as S from './styles'
import { MdClose } from 'react-icons/md'

type InputProps = {
  label: string
  value: string
  onChangeInputValue: (value: string) => void
  type?: string
}

export type DialogMessageModel = {
  title?: string
  message?: string
  jsx?: JSX.Element
  mainButton?: ButtonProps
  secondaryButton?: ButtonProps
  withoutFilter?: Boolean
  allowOverlayClick?: boolean
  img?: React.ReactNode
  spinner?: boolean
  jsxfunc?: () => any
  withoutBg?: boolean
  error?: boolean
  showCloseButton?: boolean
}

export type DialogProps = DialogMessageModel & {
  onClose: () => void
  allowOverlayClick?: boolean
  inputProps?: InputProps
  withoutClose?: boolean
  inputProps2?: InputProps
}

export const Dialog = ({
  allowOverlayClick = true,
  img,
  inputProps,
  mainButton,
  message,
  jsx,
  withoutBg,
  spinner,
  jsxfunc,
  inputProps2,
  onClose,
  secondaryButton,
  title,
  withoutClose,
  withoutFilter,
  error,
  showCloseButton
}: DialogProps) => {
  const { onClick: mainButtonClick } = mainButton || {}

  const handleMainButtonClick = useCallback(
    (element: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (mainButtonClick) {
        mainButtonClick(element)
      }
      if (onClose) {
        onClose()
      }
    },
    [onClose, mainButtonClick]
  )

  const { onClick: secondaryButtonClick } = secondaryButton || {}
  const handleSecondaryButton = useCallback(
    (element: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (secondaryButtonClick) {
        secondaryButtonClick(element)
      }
      if (onClose) {
        onClose()
      }
    },
    [onClose, mainButtonClick] //eslint-disable-line
  )

  const handleButtons = useMemo(
    (): JSX.Element => (
      <>
        {secondaryButton && (
          <ButtonComponent
            {...secondaryButton}
            onClick={handleSecondaryButton}
          />
        )}
        {mainButton && (
          <ButtonComponent {...mainButton} onClick={handleMainButtonClick} />
        )}
      </>
    ),
    [title, mainButton] //eslint-disable-line
  )

  const handleDialogMessageModal = useMemo(() => {
    return (
      <S.DialogModalContainer id="modal">
        <S.DialogModalContent>
          {showCloseButton && (
            <S.DialogCloseButton onClick={onClose}>
              <MdClose size={32} title='Fechar modal'/>
            </S.DialogCloseButton>
          )}
          <S.DialogModalMessage>
            {img && (
              <div className={`${withoutBg ? '': 'background-icon'}`} id={error ? 'error' : ''}>
                {img}
              </div>
            )}
            <h1 style={{
              marginTop: withoutBg ? '1rem': '0' 
            }}>{title}</h1>
            <p>{message}</p>
            {jsx}
            {jsxfunc && jsxfunc()}
            {Boolean(inputProps) && (
              <S.InputWrapper>
                <InputComponent
                  label={inputProps?.label}
                  placeholder={inputProps?.label}
                  value={inputProps?.value}
                  onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
                    inputProps?.onChangeInputValue(target.value)
                  }
                  type={inputProps?.type ? inputProps?.type : 'text'}
                />
                {inputProps2 && (
                  <InputComponent
                    label={inputProps2?.label}
                    placeholder={inputProps2?.label}
                    value={inputProps2?.value}
                    onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
                      inputProps2?.onChangeInputValue(target.value)
                    }
                    type={inputProps2?.type ? inputProps2?.type : 'text'}
                  />
                )}
              </S.InputWrapper>
            )}
          </S.DialogModalMessage>
        </S.DialogModalContent>
        <S.DialogModalFooter id={error ? 'error' : ''}>
          {/* {mainButton || secondaryButton && (
            {handleButtons}
          )} */}
          {handleButtons}
        </S.DialogModalFooter>
      </S.DialogModalContainer>
    )
  }, [onClose]) //eslint-disable-line

  return (
    <S.DialogOverlay
      onClick={
        withoutClose
          ? () => {}
          : () => {
              if (allowOverlayClick && onClose) onClose()
            }
      }
    >
      {handleDialogMessageModal}
    </S.DialogOverlay>
  )
}
