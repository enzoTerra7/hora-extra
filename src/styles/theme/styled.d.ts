import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      primary: string,
      primaryHover: string,
      secondary: string,
      secondaryHover: string,
      surface: string,
      error: string,
      errorHover: string,
      unselected: string,
      subtle: string,
      white: string,
      black: string,
      input: string,
      locked: string
    }

    radius: {
      md: string
    }

    fonts: {
      font: string
    }
  }
}
