import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({theme}) => css`
    `}
`

export const FilterContainer = styled.div`
    ${({theme}) => css`
    min-width: 400px;
    max-width: 95vw;
    padding: 1rem;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    .doubleCol {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        align-items: center;
        justify-content: center;
        grid-column-gap: 1rem;
    }

    .tripleCol {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        align-items: center;
        justify-content: center;
        grid-column-gap: 1rem;
    }

    .uniqueCol {
        width: 100%;
    }

    .buttonsRow{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        width: 100%;
    }
    `
    }
`