import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { Router } from './Router'
import { GlobalLanguageContextProvider } from './contexts/GlobalLanguageContext'
import { ScrollToTheTop } from './helpers/ScrollToTheTop'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalLanguageContextProvider>
          <ScrollToTheTop />
          <Router />
        </GlobalLanguageContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
  
}
