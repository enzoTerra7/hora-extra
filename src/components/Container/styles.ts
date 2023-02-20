import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    border: 1px solid #f1f5f9;
    width: 100%;
    background-color: ${theme.colors.white};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    row-gap: 1rem;
    border-radius: 16px;
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .main {
      width: 100%;
      max-width: 50%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      column-gap: 1rem;

      .icon {
        padding: 0.75rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${theme.colors.primary};
        border-radius: 100%;

        * {
          color: ${theme.colors.white};
          padding: 0;
          border: 0;
          width: 1.5rem;
          height: auto;
        }
      }

      .titles {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        column-gap: 1rem;

        h4 {
          margin: 0;
          font-size: 1.125rem;
          color: ${theme.colors.black};
        }

        small {
          margin: 0;
          font-size: 0.8125rem;
          color: ${theme.colors.subtle};
        }
      }
    }

    .buttons {
      width: 100%;
      flex: 1;
      display: flex;
      column-gap: 1rem;
      justify-content: end;
      align-items: center;

      button {
        max-width: 200px;

        &.minus {
          max-width: 70px;
        }
      }
    }

    @media screen and (max-width: 700px){
      &, .buttons, .main {
        flex-direction: column;
        gap: 1rem;
      }
    }
  `}
`