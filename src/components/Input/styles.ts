import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .input {
      width: 100%;
      color: ${theme.colors.input};

      ::placeholder {
        color: ${theme.colors.unselected};
      }
    }

    svg {
      color: ${theme.colors.locked};
      transition: all 0.2s ease-in-out;
    }

    .MuiInputBase-root {
      border-radius: 8px;
    }

    .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root{
      transform: translate(14px, 12px) scale(1);
    }

    input{
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
    }

    .MuiFormHelperText-root{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.125rem;
      margin: 0;

      svg {
        margin-right: 0.375rem;
      }
      
      * {
        color: ${theme.colors.error};
      }
    }

    &:not(.Mui-error){
      &:has(.Mui-focused), &:has(.MuiInputBase-root:hover), &:has(label:hover){
        fieldset {
          border-color: ${theme.colors.primary};
        }
        label, legend, span{
          color: ${theme.colors.primary};
        }
        svg {
          color: ${theme.colors.primary};
        }
      }
    }

    &:has(.Mui-error) {
      label, legend, span, .MuiFormHelperText-root, svg{
        color: ${theme.colors.error};
      }
      &:has(.Mui-focused), &:has(.MuiInputBase-root:hover){
        fieldset {
          border-color: ${theme.colors.error};
        }
        label, legend, span, svg{
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