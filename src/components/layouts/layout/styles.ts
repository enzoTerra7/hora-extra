import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({theme}) => css`
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    .content {
      flex: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;  
      max-height: 100vh;
      overflow-y: auto;
      overflow-x: hidden;
      text-overflow: clip;
      transition: all 0.2s ease-in-out;

      @media screen and (max-width: 1248px){
        margin-left: 95px;
      }
    }
  `}
`

export const Content = styled.div`
  ${({theme}) => css`
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 1rem;
  `}
`