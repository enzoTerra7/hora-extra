import styled, { css } from 'styled-components'

export const Container = styled.button`
  ${({theme}) => css`
    border: 0;
    padding: 0;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    height: 2.75rem;
    padding: 0.25rem 0.75rem;
    transition: all 0.3s ease-in-out;
    border-radius: 4px;
    cursor: pointer;

    &#primary {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary}
    }

    &#secondary {
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary}
    }

    &#primary:hover{
      border: none;
      background-color: ${theme.colors.primaryHover};
      color: ${theme.colors.white};
    }

    &#secondary:hover{
      background-color: ${theme.colors.secondary};
    }

    &#terciary {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.secondary}
    }

    &#terciary:hover{
      border: none;
      background-color: ${theme.colors.primaryHover};
      color: ${theme.colors.white};
    }
    
    &#other {
      color: ${theme.colors.unselected};
      background-color: transparent;
    }

    &#other:hover{
      border: none;
      background-color: #00000020;
    }
    
    &#error {
      color: ${theme.colors.white};
      background-color: ${theme.colors.error};
    }

    &#error:hover {
      background-color: ${theme.colors.errorHover};
    }

    &:disabled {
      cursor: not-allowed;
      background-color: ${theme.colors.subtle}!important;
      color: ${theme.colors.white}!important;
    }
  `}
`