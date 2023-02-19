import { InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import InputMask from 'react-input-mask';
import * as Styles from './styles'
import { FiAlertCircle } from 'react-icons/fi'

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

export interface InputProps {
  value?: string | number
  label?: string
  type?: string
  isError?: boolean
  errorLabel?: React.ReactNode
  className?: string
  isPassword?: boolean
  disabled?: boolean
  onChange?: (value: any) => void
  onKeyUp?: (value: any) => void
  placeholder?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  mask?: string
  notShowError?: boolean
  id?: string
  multiline?: boolean
  rows?: number
  name?: string
}

export const InputComponent = (props: InputProps) => {

  const [showPass, setShowPass] = useState(false)

  const id = props.notShowError ? 'outlined' : props.isError ? props.errorLabel ? "outlined-error-helper-text" : "outlined-error" : 'outlined'

  if (props.mask) {
    return (
      <Styles.Container className={props.className} >
        <TextField
          {...props}
          name={props.name}
          variant="outlined"
          className='input'
          type={props.isPassword ? showPass ? 'text' : 'password' : props.type || 'text'}
          error={props.notShowError ? false : props.isError || false}
          id={`${id}`}
          multiline={props.multiline}
          rows={props.rows}
          label={props.label}
          value={props.value}
          onKeyUp={props.onKeyUp}
          helperText={(props.isError && !props.disabled) && (
            <span className={props.notShowError ? 'invisible' : 'show'}>
              <FiAlertCircle />
              {props.errorLabel}
            </span>
          ) || ''}
          onChange={props.onChange}
          disabled={props.disabled}
          placeholder={props.placeholder}
          InputProps={{
            inputComponent: InputMask as any,
            startAdornment: props.leftIcon && (
              <InputAdornment position="start">
                {props.leftIcon}
              </InputAdornment>
            ),
            endAdornment: (props.rightIcon || props.isPassword) && (
              <InputAdornment position="end">
                {props.isPassword ? (
                  <>
                    {showPass ? <AiFillEyeInvisible size={30} cursor="pointer" onClick={() => setShowPass(false)} /> : <AiFillEye onClick={() => setShowPass(true)} size={30} cursor="pointer" />}
                  </>
                ) : props.rightIcon}
              </InputAdornment>
            ),
            inputProps: {
              mask: props.mask,
              maskChar: null
            }
          }}
        />
      </Styles.Container>
    )
  } else {
    return (
      <Styles.Container className={props.className} >
        <TextField
          {...props}
          name={props.name}
          variant="outlined"
          className='input'
          type={props.isPassword ? showPass ? 'text' : 'password' : props.type || 'text'}
          error={props.notShowError ? false : props.isError || false}
          id={`${id}`}
          multiline={props.multiline}
          rows={props.rows}
          label={props.label}
          value={props.value}
          onKeyUp={props.onKeyUp}
          helperText={(props.isError && !props.disabled) && (
            <span className={props.notShowError ? 'invisible' : 'show'}>
              <FiAlertCircle />
              {props.errorLabel}
            </span>
          ) || ''}
          onChange={props.onChange}
          disabled={props.disabled}
          placeholder={props.placeholder}
          InputProps={{
            startAdornment: props.leftIcon && (
              <InputAdornment position="start">
                {props.leftIcon}
              </InputAdornment>
            ),
            endAdornment: (props.rightIcon || props.isPassword) && (
              <InputAdornment position="end">
                {props.isPassword ? (
                  <>
                    {showPass ? <AiFillEyeInvisible size={30} cursor="pointer" onClick={() => setShowPass(false)} /> : <AiFillEye onClick={() => setShowPass(true)} size={30} cursor="pointer" />}
                  </>
                ) : props.rightIcon}
              </InputAdornment>
            )
          }}
        />
      </Styles.Container>
    )
  }
}