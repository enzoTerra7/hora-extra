import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;

    label {
      background: white;
    }

    .select {
      width: 100%;
    }

    .MuiInputBase-root {
      border-radius: 8px;
    }

    .MuiSelect-select, .MuiNativeSelect-select {
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
    }

    #helper {
      margin-top: 0;
    }

    &:not(.Mui-error){
      &:has(.Mui-focused), &:has(.MuiInputBase-root:hover), &:has(label:hover){
        fieldset {
          border-color: ${theme.colors.primary};
        }
        label, legend, span{
          color: ${theme.colors.primary};
        }
      }
    }

    &:has(.Mui-error) {
      label, legend, span, .MuiFormHelperText-root{
        color: ${theme.colors.error};
      }
      &:has(.Mui-focused), &:has(.MuiInputBase-root:hover){
        fieldset {
          border-color: ${theme.colors.error};
        }
        label, legend, span{
          color: ${theme.colors.error};
        }
      }
    }

    &:has(.Mui-disabled){
      &, *{
        cursor: not-allowed!important;
      }
      fieldset {
        border-color: ${theme.colors.locked}!important;
      }
      label, legend, span{
        color: ${theme.colors.locked}!important;
      }
    }

    .invisible {
      &, svg {
        color: transparent!important;
        fill: transparent!important;
        stroke: transparent!important;
      }
    }
  `}
`