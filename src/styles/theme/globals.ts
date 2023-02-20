import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.font};
  };

  a {
    position: relative;
    text-decoration: none!important;
    color: ${({ theme }) => theme.colors.primary};
    transition: all 0.25s ease-in-out;

    &:after {
      content: '';
      position: absolute;
      width: 0%;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.primaryHover};
      bottom: -5px; /* adjust the value to control the distance between text and underline */
      left: 0;
      transition: all 0.25s ease-in-out;
    }
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primaryHover};

    &:after {
      width: 100%;
    }
  }
`
