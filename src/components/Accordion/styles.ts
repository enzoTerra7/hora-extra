import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;

    .css-1elwnq4-MuiPaper-root-MuiAccordion-root{
      transition: all 0.2s ease-in-out;
    }

    .css-1elwnq4-MuiPaper-root-MuiAccordion-root.Mui-expanded{
      margin: 0;
      background-color: ${theme.colors.primary};

      p, svg {
        color: #171717;
      }
      
      transition: all 0.2s ease-in-out;
    }

    .MuiButtonBase-root {
      padding: 0 32px!important;
    }

    .MuiAccordionSummary-content {
      margin: 24px 0;
      
      &.Mui-expanded {
        p {
          color: ${theme.colors.white};
        }
      }
    }

    .MuiAccordionDetails-root {
      padding: 16px 24px 24px!important;
    }

    .css-1m4ljmh-MuiTypography-root{
      width: unset;
      margin-right: 10px;
      font-weight: 600;
    }

    .css-15v22id-MuiAccordionDetails-root{
      background-color: ${theme.colors.white}
    }
  `}
`