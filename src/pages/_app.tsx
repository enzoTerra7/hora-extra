import Globals from 'styles/theme/globals'
import theme from 'styles/theme/theme'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { CssBaseline } from "@material-ui/core";
import { DialogProvider } from 'src/hooks/useDialog';
import { AlertProvider } from 'src/hooks/useAlert';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DialogProvider>
        <AlertProvider>
          <CssBaseline />
          <Globals />
          <Component {...pageProps} />
        </AlertProvider>
      </DialogProvider>
    </ThemeProvider>
  )
}
