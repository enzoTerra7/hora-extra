import styled, { css } from 'styled-components'

type TableHeaderProps = {
  width?: number;
  isHidden?: boolean;
};

export const Container = styled.div`
  ${({theme}) => css`
    border: 1px solid #f1f5f9;
    width: 100%;
    background-color: ${theme.colors.white};
    padding: 1rem 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    row-gap: 1rem;
    border-radius: 16px;

    #pagination {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      nav > ul {
        .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root{
          font-size: 1.075rem;
          border-radius: 50%;
          height: 42px;
          min-width: 42px;
        }
        .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected{
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.primary};
        }
      }
    }
  `}
`

export const Header = styled.div`
  ${({theme}) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.9rem;

    .main {
      width: 100%;
      max-width: 50%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      column-gap: 1rem;
      column-gap: 0.5rem;

      .icon {
        width: 100%;
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
          font-size: 1.75rem;
          font-weight: 700;
          color: ${theme.colors.black}
        }

        small {
          margin: 0;
          font-size: 0.8125rem;
          color: ${theme.colors.subtle}
        }
      }
    }

    .buttons {
      width: 100%;
      flex: 1;
      display: flex;
      gap: 1rem;
      justify-content: end;
      align-items: center;

      .paginationRows, .searchContainer{
        max-width: 230px;

        
      }

      .paginationRows {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
      }
    }

    @media screen and (max-width: 1110px) {
      .buttons {
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-start;
      }
    }

    @media screen and (max-width: 700px) {
      flex-direction: column;
      row-gap: 2rem;

      .buttons {
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
      }

      .main {
        text-align: center;

        .titles {
          h4{
            font-size: 1.275rem;
          }
          small {
            font-size: 0.75rem
          }
        }
      }
    }
  `}
`

export const Tr = styled.tr`
  border-bottom: solid #e5eaee 1px;
  width: 100%;
  /* display: flex;
  align-items: center;
  justify-content: flex-start; */


  animation-name: transition;
  animation-duration: 0.2s;
  animation-timing-function: ease-in-out;

  @keyframes transition {
    0% {
      opacity: 0.2;
    }
    25% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.6;
    }
  }
`;

export const Th = styled.th<TableHeaderProps>`
  min-width: 130px;
  font-weight: 700;
  font-size: 0.75rem;
  padding: 0 1rem;
  color: ${(props) => props.theme.colors.black};
  height: 4rem;
  text-transform: uppercase;
  text-align: inherit;
  visibility: ${({ isHidden }) => isHidden && "hidden"};
  opacity: ${({ isHidden }) => isHidden && 0};
  display: ${({ isHidden }) => isHidden && "none"};
  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
    `}
`;

export const Table = styled.table`
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start; */
  width: 100%;

  @media screen and (max-width: 1110px) {
    display: block;
    max-width: 100%;
    overflow-x: auto;
    text-overflow: clip;
  }
`;

type Tdprops = {
  clickable?: boolean;
  isHidden?: boolean;
};

export const Td = styled.td<Tdprops>`
  min-width: 130px;
  padding: 1.5625rem 1rem;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.125rem;
  color: ${({theme}) => theme.colors.black};
  cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};
  visibility: ${({ isHidden }) => isHidden && "hidden"};
  opacity: ${({ isHidden }) => isHidden && 0};
  display: ${({ isHidden }) => isHidden && "none"};

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.375rem;
  }

  .actionsContainer {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (max-width: 940px) {
      gap: 0.5rem;
    }
  }
`;

export const Border = styled.td`
  height: 1px;
  padding: 0;
  border: 0;

  hr {
    width: 102%;
    position: relative;
    border: 1px solid ${(p) => p.theme.colors.black};
    margin-left: -1.25%;
  }
`