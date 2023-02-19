import styled, { css } from 'styled-components'

export const Container = styled.span`
  ${({theme}) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    h1, h2, h3, h4, h5, h6 {
      color: ${theme.colors.primary};
      font-weight: 700;
      word-spacing: -2px;

      &#sm {
        font-size: 0.75rem;
      }

      &#md {
        font-size: 1rem;
      }

      &#lg {
        font-size: 1.5rem;
      }

      &#xl {
        font-size: 2rem;
      }

      &#xxl {
        font-size: 2.75rem;
      }
    }
  `}
`