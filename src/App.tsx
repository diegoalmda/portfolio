import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { Router } from './Router'
import { ScrollToTheTop } from './helpers/ScrollToTheTop'
import { GlobalApplicationContextProvider } from './contexts/GlobalApplicationContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalApplicationContextProvider>
          <ScrollToTheTop />
          <Router />
        </GlobalApplicationContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
  
}
