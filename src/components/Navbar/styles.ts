import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    min-height: 64px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: ${theme.colors.white};
    border-bottom: 1px solid #EBEBEB;
    gap: 1rem;
    color: ${theme.colors.secondary};
    padding: 1rem 2rem;

    .icon {
      width: 24px;
      height: 24px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &.active {
        cursor: default;
        color: ${theme.colors.primary}
      }

      &:hover {
        cursor: pointer;
        color: ${theme.colors.primary}
      }
    }
  `}
`

export const UserInformations = styled.div`
  ${({theme}) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: ${theme.colors.black};

    .userImage {
      width: 24px;
      height: 24px;
    }

    .message, .dropdown {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.875rem;
    }

    .message {
      gap: 0.5rem;
    }
  `}
`