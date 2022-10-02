import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react'
import { portfolioContent } from '../languages/portfolioContent';

interface GlobalLanguageProps {
  selected: string
  menu: {
    selectlanguage: string
    items: { title: string, link: string }[]
  },
  home: {
    greetings: string,
    beforeName: string,
    description: string,
    doc: string,
    file: string
  }
}

interface GlobalLanguageContextType {
  selectedLanguage: GlobalLanguageProps
  selectLanguage: (language: string) => void
}

const GlobalLanguageContext = createContext({} as GlobalLanguageContextType);

interface GlobalLanguageContextProviderProps {
  children: ReactNode
}

function GlobalLanguageContextProvider({
  children,
}: GlobalLanguageContextProviderProps) {
  const { en, pt } = portfolioContent;
  
  const [selectedLanguage, setSelectedLanguage] = useState<GlobalLanguageProps>(en);

  function selectLanguage(language: string) {
    if(language === 'en') {
      setSelectedLanguage(en)
    } else {
      setSelectedLanguage(pt)
    }
  }

  return (
    <GlobalLanguageContext.Provider
      value={{
        selectedLanguage,
        selectLanguage
      }}
    >
      {children}
    </GlobalLanguageContext.Provider>
  )
}

function useGlobalLanguage() {
  const context = useContext(GlobalLanguageContext);

  return context;
}

export { GlobalLanguageContextProvider, useGlobalLanguage};
