import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({theme}) => css`
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.surface};
  `}
`

export const Content = styled.div`
  ${({theme}) => css`
    min-width: 50vw;
    min-height: 50vh;
    max-height: 98vh;
    max-width: 98vw;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    background-color: ${theme.colors.white};
    border-radius: ${theme.radius.md};
    padding: 1rem;

    .heading {
      margin-bottom: 1rem;
    }

    small {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
      font-size: 0.875rem;
      color: ${theme.colors.black};
    }

    @media screen and (min-width: 768px) {
      padding: 2rem 5rem;
    }
  `}
`