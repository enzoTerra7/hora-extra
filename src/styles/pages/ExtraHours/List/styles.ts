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

export const Details = styled.div`
  ${({theme}) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;

    .total {
      display: flex;
      align-items: center;

      strong {
        font-weight: 700;
        color: ${theme.colors.primaryHover};
        margin: 0 0.25rem;
      }
      

      @media screen and (max-width: 768px) {
        text-align: center;
      }
    }

    .buttonsRow {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    
    button {
      max-width: 300px;
    }
  `}
`