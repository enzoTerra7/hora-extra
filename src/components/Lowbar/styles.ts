import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    background-color: ${theme.colors.white};
    gap: 1rem;
    padding: 1rem 2rem;

    .left {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      width: 100%;

      .icon {
        background-color: ${theme.colors.primary};
        border-radius: 8px;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          color: ${theme.colors.white};
          width: 24px;
          height: 24px;
          margin: 0;
          padding: 0;
        }
      }
    }

    .right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 1rem;
      width: 100%;

      button {
        max-width: 150px;

        &#primary {
          max-width: 200px;
        }
      }
    }

    @media screen and (max-width: 900px) {

      .right {
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
      }
    }

    
    @media screen and (max-width: 700px){
      grid-template-columns: 1fr;
    }
  `}
`