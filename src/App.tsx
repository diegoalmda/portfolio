import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { Router } from './Router'
import { GlobalLanguageContextProvider } from './contexts/GlobalLanguageContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalLanguageContextProvider>
          <Router />
        </GlobalLanguageContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
  
}
