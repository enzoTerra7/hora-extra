import Globals from 'styles/theme/globals'
import theme from 'styles/theme/theme'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { CssBaseline } from "@material-ui/core";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Globals />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
