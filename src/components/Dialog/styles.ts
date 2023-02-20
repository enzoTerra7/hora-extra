import styled from 'styled-components'

export const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: auto;

  background-color: rgba(0, 0, 0, 0.2);
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
`
export const DialogModalContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  padding: 1.4375rem;
  position: relative;
  width: 100%;
  max-width: 31.3125rem;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.06);
`

export const DialogModalContent = styled.div``

export const DialogCloseButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  color: ${({theme}) => theme.colors.subtle};

  & > svg {
    pointer-events: none;
  }
`

export const DialogModalMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;

  .background-icon {
    width: 4.3125rem;
    height: 4.3125rem;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.875rem;
    img {
      min-width: 1.515625rem;
      width: auto;
      max-width: 2.1875rem;

      min-height: 1.96875rem;
      height: auto;
      max-height: 2.1875rem;

      filter: invert(96%) sepia(2%) saturate(1187%) hue-rotate(188deg)
        brightness(112%) contrast(100%);
    }
    svg {
      color: ${p => p.theme.colors.white};
      width: 40px;
      height: 40px;
    }
  }

  #error {
    background-color: ${p => p.theme.colors.error};
  }

  h1 {
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 100%;
    color: ${({ theme }) => theme.colors.black};
  }

  p {
    margin-top: 0.5rem;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: ${({ theme }) => theme.colors.subtle};
    max-width: 23.0625rem;
  }
`

export const DialogModalFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  button {
    margin-top: 0.5rem;
  }

  &#error{
    button{
      &#other {
        color: ${p => p.theme.colors.error};
      }
    }
  }
`

export const InputWrapper = styled.div`
  margin-bottom: 1rem;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div{
    width: 95%!important;
  }
`
