import styled, { css } from 'styled-components'

type ContainerProps = {
  hidden: boolean
}

export const Container = styled.div<ContainerProps>`
  ${({theme, hidden}) => css`
    width: 100vw;
    height: 100vh;
    display: ${hidden ? 'none' : 'flex'};
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    background-color: #00000045;

    * {
      color: ${theme.colors.primary}
    }
  `}
`