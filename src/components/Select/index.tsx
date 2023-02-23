import { FormControl, FormHelperText, InputLabel, MenuItem } from '@mui/material';
import SelectInput, { SelectChangeEvent } from '@mui/material/Select';
import { FiAlertCircle } from 'react-icons/fi';
import * as Styles from './styles'

type dataType = {
  value: string | number
  name: React.ReactNode
}

export interface SelectProps {
  id: string
  data: dataType[]
  value?: string
  label?: string
  isError?: boolean
  errorLabel?: string
  className?: string
  isRequired?: boolean
  isPassword?: boolean
  onChange?: (e: string | number | boolean) => void
  disabled?: boolean
  isPagination?: boolean
  notShowError?: boolean
  name?: string
  withoutDefaultOption?: boolean
}

export const Select = (props: SelectProps) => {

  const id = props.isError ? "demo-simple-select-error" : 'demo-simple-select'

  const handleChange = (event: SelectChangeEvent) => {
    if (props.onChange) props.onChange(event.target.value)
  };

  return (
    <Styles.Container className={props.className} >
      <FormControl
        variant="outlined"
      >
        {props.label && <InputLabel shrink={true} htmlFor={`${id}-label-${props.id}`}>{props.label}</InputLabel>}
        <SelectInput
          native
          className='select'
          error={props.notShowError ? false : props.isError || false}
          id={`${id} ${props.isRequired ? 'demo-simple-select-required' : ''} ${props.disabled ? 'demo-simple-select-disabled' : ''}`}
          disabled={props.disabled}
          onChange={handleChange}
          value={props.value}
          inputProps={{
            name: props.name || `${id}-label-${props.id}`,
            id: `${id}-label-${props.id}`,
            "aria-details": props.name
          }}
        >
          {!props.withoutDefaultOption && (
            <option value="">Selecione uma opção</option>
          )}
          {props.data.map((data, index) => (
            <option key={index} value={data.value}>{data.name}</option>
          ))}
        </SelectInput>
        {(props.isError && !props.disabled) && (
          <FormHelperText id="helper" className={props.notShowError ? 'invisible' : 'errorMsg'}>
            <FiAlertCircle />
            {props.errorLabel}
          </FormHelperText>
        )}
      </FormControl>
    </Styles.Container>
  )
}