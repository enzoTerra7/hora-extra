import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  `}
`

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    flex-direction: column;
    border-radius: ${theme.radius.md};
    transform: translate(0rem, -1rem);

    & > div {
      width: 160px;
      height: 160px;
      svg {
        width: 100%;
        height: 100%;
      }
    }

    .editProfile {
      transform: translate(-0.5rem, 1rem);
      z-index: 5;
      position: relative;
    }

    .removeImage {
      margin-top: 1rem;
    }
  `}
`

export const Divisor = styled.hr`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.unselected};
    height: 220px;
  `}
`

export const GridInformation = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns:  repeat(auto-fit, minMax(200px, 1fr));
    gap: 1rem;
    width: 100%;
  `}
`


export const SendImageContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    border: 1px dashed ${theme.colors.unselected};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    height: 30vh;
    border-radius: 16px;
    cursor: pointer;

    color: ${theme.colors.unselected};
    font-size: 0.75rem;
    line-height: 1rem;
  `}
`

export const PreviewContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    .resendImage{
      width: 200px;
    }
  `}
`

export const ImagePreview = styled.div`
  ${({ theme }) => css`
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      width: 100%;
      height: 100%;
    }
  `}
`