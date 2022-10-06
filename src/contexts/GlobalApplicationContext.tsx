import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react'
import { portfolioContent } from '../languages/portfolioContent';

interface GlobalApplicationProps {
  selected: string
  menu: {
    selectlanguage: string
    items: { title: string, link: string }[]
  },
  home: {
    greetings: string,
    beforeName: string,
    message: string,
    description: string,
    doc: string,
    file: string
  },
  about: {
    title: string,
    subtitle: string,
    secondTitle: string,
    message: string,
    text: string
  },
  contact: {
    title: string,
    subtitle?: string,
    message: string,
    form: {
      name: string,
      subject: string,
      message: string,
      button: string,
      success: string, 
      successMessage: string
    }
  },
  projects: {
    title: string,
    subtitle: string,
    message1: string,
    message2: string,
    list: {
      name: string,
      live?: string,
      repo?: string,
      message?: string,
      image: string,
      technologies: string[],
      text: string
    }[]
  },
  skills: {
    title: string,
    subtitle?: string
    message1: string,
    message2: string,
    text: string
  },
}

interface GlobalApplicationContextType {
  selectedLanguage: GlobalApplicationProps
  selectLanguage: (language: string) => void
  changeShowSideMenu: boolean
  changeSideMenuState: () => void
}

const GlobalLanguageContext = createContext({} as GlobalApplicationContextType);

interface GlobalApplicationContextProviderProps {
  children: ReactNode
}

function GlobalApplicationContextProvider({
  children,
}: GlobalApplicationContextProviderProps) {
  const { en, pt } = portfolioContent;
  
  const [selectedLanguage, setSelectedLanguage] = useState<GlobalApplicationProps>(en);
  const [changeShowSideMenu, setChangeShowSideMenu] = useState(false);

  function selectLanguage(language: string) {
    if(language === 'en') {
      setSelectedLanguage(en)
    } else {
      setSelectedLanguage(pt)
    }
  }

  function changeSideMenuState() {
    setChangeShowSideMenu(!changeShowSideMenu)
  }

  return (
    <GlobalLanguageContext.Provider
      value={{
        selectedLanguage,
        selectLanguage,
        changeShowSideMenu,
        changeSideMenuState
      }}
    >
      {children}
    </GlobalLanguageContext.Provider>
  )
}

function useGlobalContext() {
  const context = useContext(GlobalLanguageContext);

  return context;
}

export { GlobalApplicationContextProvider, useGlobalContext};
