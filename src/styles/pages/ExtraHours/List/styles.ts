import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({theme}) => css`
    
  `}
`

export const Content = styled.div`
  ${({theme}) => css`
    display: flex;
    width: 100%;
    border-radius: ${theme.radius.md};
    background-color: ${theme.colors.white};
    padding: 1rem;

    span:has(h3){
      & , h3 {
        width: 100%;
        text-align: center;
      }
    }
  `}
`

export const ExtraContainer = styled.div`
  ${({theme}) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    flex-wrap: wrap;

    .input {
      min-width: 150px;
    }
  `}
`