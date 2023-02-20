import styled, { css } from 'styled-components'

export const Container = styled.button`
  ${({theme}) => css`
    border: 0;
    padding: 0;
    background-color: ${theme.colors.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.25rem;
    height: 2.25rem;
    /* padding: 0.25rem 0.75rem; */
    border-radius: 8px;
    cursor: pointer;
    color: ${theme.colors.primary};

    &, svg {
      transition: all 0.2s ease-in-out!important;
    }

    &.circle {
      border-radius: 100%;
    }
/* 
    &:hover {
      background-color: ${theme.colors.primaryHover};
      * {
        color: ${theme.colors.white};
      }
    } */

    &#primary {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
    }

    &#secondary {
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
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

    &#inactive {
      color: ${theme.colors.unselected};
      background-color: ${theme.colors.white};
    }

    &#inactive:hover{
      border: 1px solid ${theme.colors.secondary};
      background-color: ${theme.colors.secondary};

      &, svg {
        color: ${theme.colors.primary};
        fill: ${theme.colors.primary};
      }
    }

    &#active {
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
    }

    &#active:hover{
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
    
    &#error {
      color: ${theme.colors.white};
      background-color: ${theme.colors.error};
    }

    &:disabled {
      cursor: not-allowed;
      background-color: ${theme.colors.subtle}!important;
      color: ${theme.colors.surface}!important;
    }
  `}
`