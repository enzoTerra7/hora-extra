import styled, { css } from 'styled-components'

type Responsive = {
  expansive: boolean
  preSeted?: boolean
}

export const Container = styled.div<Responsive>`
  ${({ theme, expansive }) => css`
    height: 100%;
    min-height: 100vh;
    width: 250px;
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    transition: all 0.2s ease-in-out;
    border-right: 1px solid ${theme.colors.unselected}70;

    .hidden {
      display: none;
    }

    .show {
      display: block;
    }

    @media screen and (max-width: 1248px) {
      position: absolute;
      z-index: 10;
      width: ${expansive ? "250px" : "95px"};
      box-shadow: ${expansive ? "10px 8px 17px #00000020" : "unset"};

      .hidden {
        display: ${expansive ? "none" : "block"};
      }

      .show {
        display: ${expansive ? "block" : "none"};
      }
    }

    .logo {
      width: 80%;
      height: 13vh;
      margin: 1.5rem auto 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`

export const linksContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0 1rem 0.4rem;
    max-height: 75vh;
    text-overflow: clip;
    overflow: auto;

    ::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${theme.colors.secondary};
      border-radius: 4px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.white};
      height: 12px;
      border-radius: 4px;
    }
  `}
`

export const LinkComponent = styled.button<Responsive>`
  ${({ theme, expansive, preSeted }) => css`
    background-color: transparent;
    color: ${theme.colors.black};
    display: flex;
    align-items: center;
    border: none;
    width: 100%;
    border-radius: 6px;
    padding: 1.7rem 0.75rem;
    height: 2.5rem;
    gap: 1.25rem;
    color: ${theme.colors.unselected};
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    margin-bottom: 0.5rem;

    &:hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
    }

    .icon, .dropdown {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;

      * {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
      }
    }

    .dropdown{
      transition: transform 0.25s ease-in-out;

      &#rotated {
        transform: rotate(180deg);
      }

      @media screen and (max-width: 1248px) {
        display: ${expansive ? "flex" : "none"};

        /* .hidden {
          display: ${expansive ? "block" : "none"};
        }

        .show {
          display: ${!expansive ? "block" : "none"};
        } */
    }
    }

    .title {
      font-size: 0.875rem;
      text-overflow: clip;
      overflow: hidden;
      
      @media screen and (max-width: 1248px) {
        width: ${expansive ? 'unset' : '0px'};
        max-width: ${expansive ? 'unset' : '0px'};
      }
    }

    &:disabled {
      background-color: ${theme.colors.primaryHover};
      color: ${theme.colors.white};
      cursor: default;
    }

    ${preSeted && css`
      background-color: ${theme.colors.primaryHover};
      color: ${theme.colors.white};
    `}

    @media screen and (max-width: 1248px) {
      justify-content: ${expansive ? 'flex-start' : 'center'};
      gap: ${expansive ? '1.25rem' : '0'};
    }
  `}
`

export const SubLinkContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    background-color: ${theme.colors.secondary};
    border-radius: 8px;
    transition: all 0.25s ease-in-out;

    &#show {
      padding: 0.5rem;
      height: unset;
      margin-bottom: 0.5rem;
    }

    &#hidden {
      padding: 0;
      height: 0;
    }
  `}
`

export const SubLinkComponent = styled.button<Responsive>`
  ${({ theme, expansive }) => css`
    background-color: transparent;
    color: ${theme.colors.black};
    display: flex;
    align-items: center;
    border: none;
    width: 100%;
    border-radius: 6px;
    gap: 1.25rem;
    color: ${theme.colors.unselected};
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    text-overflow: clip;
    overflow: hidden;

    &:hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
    }

    .icon {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;

      * {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
      }
    }

    .title {
      font-size: 0.875rem;
      text-overflow: clip;
      overflow: hidden;
      
      @media screen and (max-width: 1248px) {
        width: ${expansive ? 'unset' : '0px'};
        max-width: ${expansive ? 'unset' : '0px'};
      }
    }

    &:disabled {
      color: ${theme.colors.white};
      cursor: default;

      &:hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.secondary};
      }
    }

    &#show {
      padding: 1.7rem 0.75rem;
      height: 2.5rem;
      margin-bottom: 0.5rem;
    }

    &#hidden {
      padding: 0;
      height: 0;
    }

    @media screen and (max-width: 1248px) {
      justify-content: ${expansive ? 'flex-start' : 'center'};
      gap: ${expansive ? '1.25rem' : '0'};
    }
  `}
`